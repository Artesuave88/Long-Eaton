import { b as escape_html, a as attr, c as bind_props } from "./index.js";
import { f as formatEventDate } from "./format.js";
import { I as ImagePlaceholder } from "./ImagePlaceholder.js";
function EventCard($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let event = $$props["event"];
    $$renderer2.push(`<article class="surface-card surface-card-hover overflow-hidden">`);
    ImagePlaceholder($$renderer2, {
      label: event.image?.label ?? event.imageLabel,
      style: event.image?.style ?? event.imageStyle,
      className: "h-48 w-full rounded-none"
    });
    $$renderer2.push(`<!----> <div class="p-5"><div class="flex flex-wrap items-center gap-2"><span class="chip">${escape_html(event.category)}</span> <span class="text-sm text-brand-muted">${escape_html(formatEventDate(event))}</span></div> <h3 class="mt-4 text-[1.45rem] leading-tight text-brand-text">${escape_html(event.title)}</h3> <p class="mt-2 text-sm font-medium text-brand-muted">${escape_html(event.location)} • ${escape_html(event.time)}</p> `);
    if (event.tags?.length) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<p class="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-muted">${escape_html(event.tags.slice(0, 2).join(" • "))}</p>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> <p class="body-copy-sm mt-4">${escape_html(event.excerpt)}</p> <a${attr("href", `/events/${event.slug}`)} class="link-subtle mt-5">See details</a></div></article>`);
    bind_props($$props, { event });
  });
}
export {
  EventCard as E
};
