import { env } from "$env/dynamic/private";
import { fail } from "@sveltejs/kit";
import { load as loadHtml } from "cheerio";
import type { Actions, PageServerLoad } from "./$types";

export const prerender = false;

type Job = {
  id: string;
  title: string;
  employer: string;
  location: string;
  salary: string;
  posted: string;
  url: string;
  source: "Adzuna" | "Jobs Derbyshire" | "Reed" | "Jooble";
};

const text = (value: FormDataEntryValue | null) =>
  typeof value === "string" ? value.trim() : "";

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const salary = (minimum?: number, maximum?: number) => {
  if (!minimum && !maximum) return "Salary not stated";
  const pounds = (value: number) =>
    new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      maximumFractionDigits: 0,
    }).format(value);
  if (minimum && maximum) return `${pounds(minimum)}–${pounds(maximum)} a year`;
  return `${minimum ? "From" : "Up to"} ${pounds(minimum || maximum || 0)} a year`;
};

const normaliseJobField = (value: string) =>
  value
    .toLocaleLowerCase("en-GB")
    .replace(/&amp;/g, "and")
    .replace(/\b(?:limited|ltd|plc|llp)\b/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

const normaliseJobUrl = (value: string) => {
  try {
    const url = new URL(value);
    url.hash = "";
    for (const key of [...url.searchParams.keys()]) {
      if (key.startsWith("utm_") || ["source", "ref", "referrer"].includes(key)) {
        url.searchParams.delete(key);
      }
    }
    return url.toString().replace(/\/$/, "");
  } catch {
    return value.trim().toLocaleLowerCase();
  }
};

function deduplicateJobs(jobs: Job[]) {
  const sourceIds = new Set<string>();
  const urls = new Set<string>();
  const details = new Set<string>();

  return jobs.filter((job) => {
    const sourceId = `${job.source}:${job.id}`;
    const url = normaliseJobUrl(job.url);
    const detailKey = [job.employer, job.title, job.location]
      .map(normaliseJobField)
      .join("|");
    const duplicate = sourceIds.has(sourceId) || urls.has(url) || details.has(detailKey);

    sourceIds.add(sourceId);
    urls.add(url);
    details.add(detailKey);
    return !duplicate;
  });
}

async function getAdzunaJobs(fetcher: typeof fetch): Promise<Job[]> {
  if (!env.ADZUNA_APP_ID || !env.ADZUNA_APP_KEY) return [];

  const params = new URLSearchParams({
    app_id: env.ADZUNA_APP_ID,
    app_key: env.ADZUNA_APP_KEY,
    where: "Long Eaton",
    distance: "3",
    results_per_page: "24",
    sort_by: "date",
    "content-type": "application/json",
  });

  try {
    const response = await fetcher(
      `https://api.adzuna.com/v1/api/jobs/gb/search/1?${params}`,
      { headers: { Accept: "application/json" } },
    );
    if (!response.ok) return [];
    const body = await response.json();
    return (body.results ?? []).map((item: any) => ({
      id: `adzuna-${item.id}`,
      title: item.title,
      employer: item.company?.display_name || "Employer not stated",
      location: item.location?.display_name || "Long Eaton area",
      salary: salary(item.salary_min, item.salary_max),
      posted: item.created || "",
      url: item.redirect_url,
      source: "Adzuna" as const,
    }));
  } catch {
    return [];
  }
}

async function getDerbyshireJobs(fetcher: typeof fetch): Promise<Job[]> {
  try {
    const response = await fetcher("https://jobs.derbyshire.gov.uk/rss", {
      headers: {
        Accept: "application/rss+xml, application/xml, text/xml",
        "User-Agent": "LoveLongEatonJobs/1.0 (+https://long-eaton.vercel.app/contact)",
      },
    });
    if (!response.ok) return [];
    const xml = await response.text();
    const $ = loadHtml(xml, { xmlMode: true });
    const localPlaces = [
      "long eaton",
      "sawley",
      "sandiacre",
      "breaston",
      "toton",
      "chilwell",
    ];

    return $("item")
      .map((index, item) => {
        const node = $(item);
        const encodedDescription = node.find("description").text();
        const description = loadHtml(encodedDescription).text().replace(/\s+/g, " ").trim();
        const haystack = `${node.find("title").text()} ${description}`.toLowerCase();
        if (!localPlaces.some((place) => haystack.includes(place))) return null;

        const matchedPlace =
          localPlaces.find((place) => haystack.includes(place)) || "long eaton";
        const location = matchedPlace
          .split(" ")
          .map((word) => word[0].toUpperCase() + word.slice(1))
          .join(" ");
        const salaryMatch = description.match(
          /£[\d,]+(?:\.\d{1,2})?(?:\s*(?:-|–|to)\s*£?[\d,]+(?:\.\d{1,2})?)?/,
        );

        return {
          id: `derbyshire-${index}-${node.find("guid").text() || node.find("link").text()}`,
          title: node.find("title").text().trim(),
          employer: node.find("category").text().trim() || "Derbyshire employer",
          location,
          salary: salaryMatch?.[0] || "See vacancy for salary",
          posted: node.find("pubDate").text(),
          url: node.find("link").text().trim(),
          source: "Jobs Derbyshire" as const,
        };
      })
      .get()
      .filter((job): job is NonNullable<typeof job> => Boolean(job?.title && job?.url))
      .slice(0, 24);
  } catch {
    return [];
  }
}

async function getReedJobs(fetcher: typeof fetch): Promise<Job[]> {
  if (!env.REED_API_KEY) return [];
  const params = new URLSearchParams({
    locationName: "Long Eaton",
    distanceFromLocation: "3",
    resultsToTake: "40",
  });

  try {
    const response = await fetcher(
      `https://www.reed.co.uk/api/1.0/search?${params}`,
      {
        headers: {
          Accept: "application/json",
          Authorization: `Basic ${Buffer.from(`${env.REED_API_KEY}:`).toString("base64")}`,
        },
      },
    );
    if (!response.ok) return [];
    const body = await response.json();
    return (body.results ?? []).map((item: any) => ({
      id: `reed-${item.jobId}`,
      title: item.jobTitle,
      employer: item.employerName || "Employer not stated",
      location: item.locationName || "Long Eaton area",
      salary: salary(item.minimumSalary, item.maximumSalary),
      posted: item.date || "",
      url: `https://www.reed.co.uk/jobs/${item.jobId}`,
      source: "Reed" as const,
    }));
  } catch {
    return [];
  }
}

async function getJoobleJobs(fetcher: typeof fetch): Promise<Job[]> {
  if (!env.JOOBLE_API_KEY) return [];

  try {
    const response = await fetcher(
      `https://uk.jooble.org/api/${encodeURIComponent(env.JOOBLE_API_KEY)}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          keywords: "",
          location: "Long Eaton",
          radius: "4",
          page: "1",
          ResultOnPage: "40",
        }),
      },
    );
    if (!response.ok) return [];
    const body = await response.json();
    return (body.jobs ?? [])
      .map((item: any) => ({
        id: `jooble-${item.id}`,
        title: item.title,
        employer: item.company || "Employer not stated",
        location: item.location || "Long Eaton area",
        salary: item.salary || "Salary not stated",
        posted: item.updated || "",
        url: item.link,
        source: "Jooble" as const,
      }))
      .filter((job: Job) => Boolean(job.title && job.url));
  } catch {
    return [];
  }
}

export const load: PageServerLoad = async ({ fetch }) => {
  const [adzunaJobs, derbyshireJobs, reedJobs, joobleJobs] = await Promise.all([
    getAdzunaJobs(fetch),
    getDerbyshireJobs(fetch),
    getReedJobs(fetch),
    getJoobleJobs(fetch),
  ]);

  return {
    jobs: deduplicateJobs([
      ...adzunaJobs,
      ...derbyshireJobs,
      ...reedJobs,
      ...joobleJobs,
    ]),
    liveLocalJobsEnabled: Boolean(env.ADZUNA_APP_ID && env.ADZUNA_APP_KEY),
    reedEnabled: Boolean(env.REED_API_KEY),
    joobleEnabled: Boolean(env.JOOBLE_API_KEY),
  };
};

export const actions = {
  submit: async ({ request }) => {
    const formData = await request.formData();
    const contactName = text(formData.get("contactName"));
    const email = text(formData.get("email"));
    const employer = text(formData.get("employer"));
    const title = text(formData.get("title"));
    const location = text(formData.get("location"));
    const closingDate = text(formData.get("closingDate"));
    const applyInstructions = text(formData.get("applyInstructions"));
    const details = text(formData.get("details"));
    const website = text(formData.get("website"));
    const values = {
      contactName,
      email,
      employer,
      title,
      location,
      closingDate,
      applyInstructions,
      details,
    };

    if (website) return { submitted: true };
    if (!contactName || !email || !employer || !title || !location || !applyInstructions) {
      return fail(400, {
        values,
        submitError: "Please complete all required fields.",
      });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return fail(400, {
        values,
        submitError: "Please enter a valid contact email address.",
      });
    }
    if (!env.RESEND_API_KEY) {
      return fail(500, {
        values,
        submitError: "Vacancy submissions are not configured yet. Please use the main contact page.",
      });
    }

    const rows = [
      ["Contact", contactName],
      ["Email", email],
      ["Employer", employer],
      ["Job title", title],
      ["Location", location],
      ["Closing date", closingDate || "Not supplied"],
      ["How to apply", applyInstructions],
      ["Details", details || "Not supplied"],
    ];
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: env.CONTACT_FROM_EMAIL || "Love Long Eaton <onboarding@resend.dev>",
        to: "info@midasweb.org",
        reply_to: email,
        subject: `Local vacancy submission: ${title} at ${employer}`,
        text: rows.map(([label, value]) => `${label}: ${value}`).join("\n"),
        html: rows
          .map(
            ([label, value]) =>
              `<p><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value)}</p>`,
          )
          .join(""),
      }),
    });

    if (!response.ok) {
      return fail(500, {
        values,
        submitError: "The vacancy could not be submitted. Please try again.",
      });
    }
    return { submitted: true };
  },
} satisfies Actions;
