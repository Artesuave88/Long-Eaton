import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { load, type CheerioAPI } from "cheerio";

type ImportLink = {
  label: string;
  url: string;
};

type ImportedShow = {
  title: string;
  url: string | null;
  imageUrl?: string | null;
  startDate?: string;
  endDate?: string;
};

type ImportedVenue = {
  name: string;
  slug: string;
  category: string;
  address: string;
  summary: string;
  description: string[];
  volunteerRun: boolean;
  charityNote: string;
  sourceName: string;
  sourceUrl: string;
  socials: ImportLink[];
  links: ImportLink[];
  featuredShows: ImportedShow[];
};

const SOURCE_URL = "https://www.duchess-theatre.com/";
const WHATS_ON_URL = `${SOURCE_URL}whats-on`;
const TICKETSOURCE_URL = "https://www.ticketsource.com/duchesstheatre";
const SOURCE_NAME = "Duchess Theatre homepage";
const OUTPUT_PATH = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../src/lib/data/imported/duchess-theatre.json",
);
const EVENTS_OUTPUT_PATH = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../src/lib/data/imported/duchess-theatre-events.json",
);
const MAIN_LINK_LABELS = [
  "What's on",
  "Our Shows",
  "About Us",
  "Membership",
  "Volunteering",
  "Book our venue",
  "FAQ",
  "Contact Us",
];
const SOCIAL_LABELS = ["Facebook", "Instagram", "Twitter", "X"];

function normalizeWhitespace(value: string | null | undefined): string {
  return (value ?? "").replace(/\s+/g, " ").trim();
}

function normalizeLabelForMatch(label: string): string {
  return label
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/&/g, "and")
    .replace(/\s+/g, " ")
    .trim();
}

function absoluteUrl(
  href: string | undefined,
  base = SOURCE_URL,
): string | null {
  if (!href) {
    return null;
  }

  try {
    return new URL(href, base).toString();
  } catch {
    return null;
  }
}

function sanitizeDocument($: CheerioAPI): void {
  $("script, style, noscript, template").remove();
}

function bodyText($: CheerioAPI): string {
  return normalizeWhitespace($("body").text());
}

function collectAnchors($: CheerioAPI): ImportLink[] {
  return $("a")
    .toArray()
    .map((element) => {
      const href = $(element).attr("href");
      const url = absoluteUrl(href);
      let label = normalizeWhitespace($(element).text());

      if (!label && url) {
        if (/facebook\.com/i.test(url)) {
          label = "Facebook";
        } else if (/instagram\.com/i.test(url)) {
          label = "Instagram";
        } else if (/twitter\.com|x\.com/i.test(url)) {
          label = "Twitter";
        }
      }

      return label && url ? { label, url } : null;
    })
    .filter((value): value is ImportLink => Boolean(value));
}

function uniqueByKey<T>(values: T[], getKey: (value: T) => string): T[] {
  const seen = new Set<string>();

  return values.filter((value) => {
    const key = getKey(value);

    if (seen.has(key)) {
      return false;
    }

    seen.add(key);
    return true;
  });
}

function extractLinks($: CheerioAPI): ImportLink[] {
  const anchors = collectAnchors($);

  return MAIN_LINK_LABELS.flatMap((label) => {
    const match = anchors.find(
      (anchor) =>
        normalizeLabelForMatch(anchor.label) === normalizeLabelForMatch(label),
    );

    return match ? [{ label, url: match.url }] : [];
  });
}

function extractSocials($: CheerioAPI): ImportLink[] {
  const anchors = collectAnchors($);
  const allowed = new Set(SOCIAL_LABELS.map(normalizeLabelForMatch));

  return uniqueByKey(
    anchors.filter((anchor) =>
      allowed.has(normalizeLabelForMatch(anchor.label)),
    ),
    (anchor) => `${anchor.label}:${anchor.url}`,
  );
}

function extractVenue($: CheerioAPI): ImportedVenue {
  const pageText = bodyText($);
  const descriptionMatch = pageText.match(
    /Showcasing the best talent the local community has to offer, our programme provides something for everyone\.[\s\S]*?Long Eaton[’']s premier live arts(?:\s+and\s+|\s*&\s*)entertainment facility\./i,
  );
  const description = normalizeWhitespace(descriptionMatch?.[0])
    .split(/(?<=[.!?])\s+/)
    .map((sentence) => normalizeWhitespace(sentence))
    .filter(Boolean);

  return {
    name:
      normalizeWhitespace($('meta[property="og:site_name"]').attr("content")) ||
      "Duchess Theatre & Chatsworth Arts Centre",
    slug: "duchess-theatre-chatsworth-arts-centre",
    category: "Arts & Entertainment",
    address:
      normalizeWhitespace(
        pageText.match(
          /West Gate,\s*Long Eaton,\s*Derbyshire,\s*NG10 1EF/i,
        )?.[0],
      ) || "",
    summary:
      normalizeWhitespace(
        pageText.match(
          /Long Eaton[’']s premier live arts(?:\s*&\s*|\s+and\s+)entertainment facility/i,
        )?.[0],
      ) || "Long Eaton’s premier live arts and entertainment facility",
    description,
    volunteerRun: description.some((line) =>
      /organised and run by volunteers/i.test(line),
    ),
    charityNote:
      normalizeWhitespace(
        pageText.match(
          /The Long Eaton & District Arts Council Reg\. Charity No\. 508745/i,
        )?.[0],
      ) || "",
    sourceName: SOURCE_NAME,
    sourceUrl: SOURCE_URL,
    socials: extractSocials($),
    links: extractLinks($),
    featuredShows: [],
  };
}

function extractWhatsOnNotes($: CheerioAPI): string[] {
  const pageText = bodyText($);
  const noteMatches = [
    pageText.match(
      /Tickets are available to purchase at our weekly Saturday Coffee Mornings from 10 till 12 noon\s*&?\s*for most shows online via TicketSource\./i,
    )?.[0],
    pageText.match(
      /With it'?s fabulous extended foyer, bar and lounge area, the Duchess Theatre is a fantastic venue available to hire for events such as:[\s\S]*?Presentations\s*&\s*Celebrations\./i,
    )?.[0],
  ];

  return noteMatches.map((item) => normalizeWhitespace(item)).filter(Boolean);
}

function titleCaseWords(value: string): string {
  return value
    .toLowerCase()
    .replace(/\b[a-z]/g, (letter) => letter.toUpperCase())
    .replace(/’S\b/g, "’s")
    .replace(/'S\b/g, "'s")
    .replace(/\bKtco\b/g, "KTCo")
    .replace(/\bI\b/g, "I");
}

function cleanTicketSourceTitle(value: string): string {
  const cleaned = normalizeWhitespace(value)
    .replace(/&rsquo;|&#039;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+-\s+[^-]+$/, "");

  return titleCaseWords(cleaned);
}

function extractShowsFromTicketSource($: CheerioAPI): ImportedShow[] {
  return uniqueByKey(
    $(".result-card.eventRow")
      .toArray()
      .map((element) => {
        const title = cleanTicketSourceTitle(
          $(element).find("[itemprop='name']").first().text(),
        );
        const url = absoluteUrl(
          $(element)
            .find("a.card-link, a.result, .event-btn a")
            .first()
            .attr("href"),
          TICKETSOURCE_URL,
        );
        const imageUrl = absoluteUrl(
          $(element).find("[itemprop='image']").attr("content"),
          TICKETSOURCE_URL,
        );
        const startDate = normalizeWhitespace(
          $(element).find("[itemprop='startDate']").attr("content"),
        );
        const endDate = normalizeWhitespace(
          $(element).find("[itemprop='endDate']").attr("content"),
        );

        if (!title || !url) {
          return null;
        }

        return {
          title,
          url,
          imageUrl: imageUrl || null,
          startDate: startDate || undefined,
          endDate: endDate || undefined,
        };
      })
      .filter((value): value is ImportedShow => Boolean(value)),
    (show) => `${show.title}:${show.startDate ?? ""}:${show.url ?? ""}`,
  );
}

async function fetchHtml(url: string): Promise<string> {
  const response = await fetch(url, {
    headers: {
      "user-agent": "Mozilla/5.0 Love Long Eaton local importer",
      referer: SOURCE_URL,
    },
  });

  if (!response.ok) {
    throw new Error(
      `Request failed with ${response.status} ${response.statusText} for ${url}`,
    );
  }

  return response.text();
}

function logVenue(venue: ImportedVenue): void {
  console.log("Imported venue:");
  console.log(`- name: ${venue.name}`);
  console.log(`- slug: ${venue.slug}`);
  console.log(`- category: ${venue.category}`);
  console.log(`- address: ${venue.address || "(not found)"}`);
  console.log(`- summary: ${venue.summary || "(not found)"}`);
  console.log(`- volunteerRun: ${venue.volunteerRun}`);
  console.log(`- charityNote: ${venue.charityNote || "(not found)"}`);
  console.log(
    `- socials: ${venue.socials.map((item) => item.label).join(", ") || "(none)"}`,
  );
  console.log(
    `- links: ${venue.links.map((item) => item.label).join(", ") || "(none)"}`,
  );
  console.log(
    `- featuredShows: ${venue.featuredShows.map((item) => item.title).join(", ") || "(none)"}`,
  );
}

async function writeJson(filePath: string, value: unknown): Promise<void> {
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

async function main(): Promise<void> {
  try {
    console.log(`Fetching ${SOURCE_URL}`);
    const [homepageHtml, whatsOnHtml, ticketSourceHtml] = await Promise.all([
      fetchHtml(SOURCE_URL),
      fetchHtml(WHATS_ON_URL),
      fetchHtml(TICKETSOURCE_URL),
    ]);

    const $homepage = load(homepageHtml);
    const $whatsOn = load(whatsOnHtml);
    const $ticketSource = load(ticketSourceHtml);

    sanitizeDocument($homepage);
    sanitizeDocument($whatsOn);
    sanitizeDocument($ticketSource);

    const venue = extractVenue($homepage);
    const shows = extractShowsFromTicketSource($ticketSource);

    venue.description = [
      ...venue.description,
      ...extractWhatsOnNotes($whatsOn),
    ].filter((value, index, values) => values.indexOf(value) === index);
    venue.featuredShows = shows.map(({ title, url, startDate, endDate }) => ({
      title,
      url,
      startDate,
      endDate,
    }));

    logVenue(venue);
    await writeJson(OUTPUT_PATH, venue);
    await writeJson(EVENTS_OUTPUT_PATH, shows);

    console.log(`Wrote ${OUTPUT_PATH}`);
    console.log(`Wrote ${EVENTS_OUTPUT_PATH}`);
    console.log("Review the generated JSON before surfacing it in the UI.");
  } catch (error) {
    console.error("Importer failed.");
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  }
}

await main();
