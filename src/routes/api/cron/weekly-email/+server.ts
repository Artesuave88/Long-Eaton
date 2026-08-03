import { env } from "$env/dynamic/private";
import { buildWeeklyEmail } from "$lib/server/weekly-email";
import { error, json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const prerender = false;

const resendHeaders = (apiKey: string) => ({
  Authorization: `Bearer ${apiKey}`,
  "Content-Type": "application/json",
});

function londonScheduleParts(now: Date) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/London",
    weekday: "short",
    hour: "2-digit",
    hourCycle: "h23",
  }).formatToParts(now);
  const value = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value;
  return { weekday: value("weekday"), hour: Number(value("hour")) };
}

export const GET: RequestHandler = async ({ request }) => {
  if (!env.CRON_SECRET || request.headers.get("authorization") !== `Bearer ${env.CRON_SECRET}`) {
    throw error(401, "Unauthorized");
  }

  const now = new Date();
  const local = londonScheduleParts(now);
  if (local.weekday !== "Thu" || local.hour !== 18) {
    return json({ skipped: true, reason: "Outside Thursday 18:00 Europe/London" });
  }

  if (!env.RESEND_API_KEY || !env.RESEND_SEGMENT_ID || !env.CONTACT_FROM_EMAIL) {
    throw error(503, "Weekly email environment variables are incomplete");
  }

  const email = buildWeeklyEmail(now);
  const headers = resendHeaders(env.RESEND_API_KEY);
  const broadcastsResponse = await fetch("https://api.resend.com/broadcasts?limit=100", { headers });
  if (!broadcastsResponse.ok) {
    console.error("Could not check existing weekly broadcasts:", await broadcastsResponse.text());
    throw error(502, "Could not check existing broadcasts");
  }

  const broadcasts = (await broadcastsResponse.json()) as {
    data?: { id: string; name?: string; status?: string; created_at?: string }[];
  };
  let existing = broadcasts.data?.find((broadcast) => broadcast.name === email.campaignName);

  // Resend may label API-created broadcasts as "Untitled". The invisible marker
  // in the generated HTML gives retries a second, reliable duplicate check.
  if (!existing) {
    const recentThreshold = now.getTime() - 2 * 24 * 60 * 60 * 1000;
    const recent = (broadcasts.data ?? []).filter(
      (broadcast) =>
        !broadcast.created_at || new Date(broadcast.created_at).getTime() >= recentThreshold,
    );
    const details = await Promise.all(
      recent.map(async (broadcast) => {
        const response = await fetch(`https://api.resend.com/broadcasts/${broadcast.id}`, { headers });
        return response.ok
          ? ((await response.json()) as { id: string; name?: string; status?: string; html?: string })
          : null;
      }),
    );
    existing = details.find((broadcast) => broadcast?.html?.includes(`<!-- ${email.campaignName} -->`)) ?? undefined;
  }

  if (existing) {
    return json({ skipped: true, reason: "Campaign already exists", broadcast: existing });
  }

  const createResponse = await fetch("https://api.resend.com/broadcasts", {
    method: "POST",
    headers,
    body: JSON.stringify({
      name: email.campaignName,
      segment_id: env.RESEND_SEGMENT_ID,
      from: env.CONTACT_FROM_EMAIL,
      subject: email.subject,
      preview_text: email.previewText,
      html: email.html,
      text: email.text,
      send: true,
    }),
  });

  if (!createResponse.ok) {
    console.error("Weekly broadcast creation failed:", await createResponse.text());
    throw error(502, "Could not create weekly broadcast");
  }

  const created = (await createResponse.json()) as { id: string };
  return json({ sent: true, broadcastId: created.id, eventCount: email.eventCount });
};
