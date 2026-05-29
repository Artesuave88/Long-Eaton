import { env } from "$env/dynamic/private";
import { fail } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const prerender = false;

const contactRecipient = "info@midasweb.org";
const enquiryTypes = new Set([
  "Add my business",
  "Submit an event",
  "Partnership enquiry",
  "General message",
]);

const getField = (formData: FormData, field: string) => {
  const value = formData.get(field);
  return typeof value === "string" ? value.trim() : "";
};

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const name = getField(formData, "name");
    const email = getField(formData, "email");
    const subject = getField(formData, "subject");
    const message = getField(formData, "message");
    const website = getField(formData, "website");

    const values = { name, email, subject, message };

    if (website) {
      return { success: true };
    }

    if (!name || !email || !message || !enquiryTypes.has(subject)) {
      return fail(400, {
        values,
        error: "Please complete your name, email, enquiry type and message.",
      });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return fail(400, {
        values,
        error: "Please enter a valid email address.",
      });
    }

    if (!env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY for contact form submission.");
      return fail(500, {
        values,
        error: "The contact form is not configured yet. Please try again later.",
      });
    }

    const fromEmail = env.CONTACT_FROM_EMAIL || "Love Long Eaton <onboarding@resend.dev>";
    const submittedAt = new Date().toLocaleString("en-GB", {
      dateStyle: "medium",
      timeStyle: "short",
      timeZone: "Europe/London",
    });

    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromEmail,
          to: contactRecipient,
          reply_to: email,
          subject: `Love Long Eaton enquiry: ${subject}`,
          text: [
            `Name: ${name}`,
            `Email: ${email}`,
            `Enquiry type: ${subject}`,
            `Submitted: ${submittedAt}`,
            "",
            message,
          ].join("\n"),
          html: `
            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Enquiry type:</strong> ${escapeHtml(subject)}</p>
            <p><strong>Submitted:</strong> ${escapeHtml(submittedAt)}</p>
            <hr />
            <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
          `,
        }),
      });

      if (!response.ok) {
        console.error("Resend contact form error:", await response.text());
        return fail(500, {
          values,
          error: "Your message could not be sent. Please try again in a moment.",
        });
      }

      return { success: true };
    } catch (error) {
      console.error("Contact form submission failed:", error);
      return fail(500, {
        values,
        error: "Your message could not be sent. Please try again in a moment.",
      });
    }
  },
} satisfies Actions;
