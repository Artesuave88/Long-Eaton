import { h as head, a as attr, b as escape_html } from "../../../chunks/index.js";
import { s as site } from "../../../chunks/site.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    head("1bv7ezn", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Contact | Love Long Eaton</title>`);
      });
      $$renderer3.push(`<meta name="description" content="Get in touch to add a business, send in an event or ask about Love Long Eaton."/>`);
    });
    $$renderer2.push(`<section class="container-shell section-space"><div class="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]"><div><p class="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">Contact</p> <h1 class="mt-3 font-display text-4xl text-ink sm:text-5xl">Get in touch</h1> <p class="mt-5 max-w-xl text-lg leading-8 text-ink/72">Use this page to send in a business, share an event or ask a general question about the site.</p> <div class="mt-8 space-y-5"><div class="surface-card p-6"><p class="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">Email</p> <a${attr("href", `mailto:${site.email}`)} class="mt-2 inline-flex text-lg font-semibold text-ink hover:text-brand-700">${escape_html(site.email)}</a></div> <div class="surface-card p-6"><p class="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">Phone</p> <a${attr("href", `tel:${site.phone}`)} class="mt-2 inline-flex text-lg font-semibold text-ink hover:text-brand-700">${escape_html(site.phone)}</a></div> <div class="surface-card p-6"><p class="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">Town base</p> <p class="mt-2 text-lg font-semibold text-ink">${escape_html(site.address)}</p></div></div></div> <div class="surface-card p-6 sm:p-8"><h2 class="font-display text-3xl text-ink">Send an enquiry</h2> <form class="mt-6 space-y-5"><div><label for="name" class="mb-2 block text-sm font-semibold text-ink">Name</label> <input id="name" type="text" class="field-input"/></div> <div><label for="email" class="mb-2 block text-sm font-semibold text-ink">Email</label> <input id="email" type="email" class="field-input"/></div> <div><label for="subject" class="mb-2 block text-sm font-semibold text-ink">Enquiry type</label> <select id="subject" class="field-input">`);
    $$renderer2.option({}, ($$renderer3) => {
      $$renderer3.push(`Add my business`);
    });
    $$renderer2.option({}, ($$renderer3) => {
      $$renderer3.push(`Submit an event`);
    });
    $$renderer2.option({}, ($$renderer3) => {
      $$renderer3.push(`Partnership enquiry`);
    });
    $$renderer2.option({}, ($$renderer3) => {
      $$renderer3.push(`General message`);
    });
    $$renderer2.push(`</select></div> <div><label for="message" class="mb-2 block text-sm font-semibold text-ink">Message</label> <textarea id="message" rows="6" class="field-input"></textarea></div> <button type="submit" class="button-primary">Send enquiry</button> <p class="text-sm text-ink/55">This form is currently for layout only and can be connected to form handling later.</p></form></div></div></section>`);
  });
}
export {
  _page as default
};
