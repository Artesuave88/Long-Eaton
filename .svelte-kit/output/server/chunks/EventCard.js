import { b as escape_html, a as attr, c as bind_props } from "./index.js";
import { f as formatDisplayDate } from "./format.js";
import { I as ImagePlaceholder } from "./ImagePlaceholder.js";
function EventCard($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let event = $$props["event"];
    $$renderer2.push(`<article class="surface-card overflow-hidden">`);
    ImagePlaceholder($$renderer2, {
      label: event.imageLabel,
      style: event.imageStyle,
      className: "h-48 w-full rounded-none"
    });
    $$renderer2.push(`<!----> <div class="p-5"><div class="flex flex-wrap items-center gap-2"><span class="rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-800">${escape_html(event.category)}</span> <span class="text-sm text-ink/55">${escape_html(formatDisplayDate(event.date))}</span></div> <h3 class="mt-4 font-display text-2xl text-ink">${escape_html(event.title)}</h3> <p class="mt-2 text-sm font-medium text-ink/60">${escape_html(event.location)} • ${escape_html(event.time)}</p> <p class="mt-4 text-sm leading-7 text-ink/72">${escape_html(event.excerpt)}</p> <a${attr("href", `/events/${event.slug}`)} class="mt-5 inline-flex items-center text-sm font-semibold text-brand-700 hover:text-brand-900">View event</a></div></article>`);
    bind_props($$props, { event });
  });
}
export {
  EventCard as E
};
