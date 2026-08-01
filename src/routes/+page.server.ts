import { env } from "$env/dynamic/private";
import { fail } from "@sveltejs/kit";
import type { Actions } from "./$types";

const getField = (formData: FormData, field: string) => {
  const value = formData.get(field);
  return typeof value === "string" ? value.trim() : "";
};

export const actions = {
  subscribe: async ({ request }) => {
    const formData = await request.formData();
    const email = getField(formData, "email").toLowerCase();
    const website = getField(formData, "website");
    const consent = formData.get("consent") === "yes";

    if (website) return { newsletterSuccess: true };

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return fail(400, {
        newsletterError: "Please enter a valid email address.",
        newsletterEmail: email,
      });
    }

    if (!consent) {
      return fail(400, {
        newsletterError: "Please confirm that you would like to receive the newsletter.",
        newsletterEmail: email,
      });
    }

    if (!env.RESEND_API_KEY || !env.RESEND_SEGMENT_ID) {
      console.error("Missing RESEND_API_KEY or RESEND_SEGMENT_ID for newsletter signup.");
      return fail(503, {
        newsletterError: "Newsletter signup is temporarily unavailable. Please try again soon.",
        newsletterEmail: email,
      });
    }

    try {
      const headers = {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      };
      let response = await fetch("https://api.resend.com/contacts", {
        method: "POST",
        headers,
        body: JSON.stringify({
          email,
          unsubscribed: false,
          segments: [{ id: env.RESEND_SEGMENT_ID }],
        }),
      });

      // Existing global contacts can still opt into this specific newsletter.
      if (response.status === 409) {
        response = await fetch(
          `https://api.resend.com/contacts/${encodeURIComponent(email)}/segments/${env.RESEND_SEGMENT_ID}`,
          { method: "POST", headers },
        );
      }

      if (!response.ok) {
        console.error("Resend newsletter signup error:", await response.text());
        return fail(502, {
          newsletterError: "We couldn't add you just now. Please try again in a moment.",
          newsletterEmail: email,
        });
      }

      return { newsletterSuccess: true };
    } catch (error) {
      console.error("Newsletter signup failed:", error);
      return fail(502, {
        newsletterError: "We couldn't add you just now. Please try again in a moment.",
        newsletterEmail: email,
      });
    }
  },
} satisfies Actions;
