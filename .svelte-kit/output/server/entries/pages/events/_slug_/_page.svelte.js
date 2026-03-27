import { h as head, b as escape_html, e as ensure_array_like, a as attr, c as bind_props } from "../../../../chunks/index.js";
import { I as ImagePlaceholder } from "../../../../chunks/ImagePlaceholder.js";
import { f as formatDisplayDate } from "../../../../chunks/format.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let data = $$props["data"];
    const formatRelatedDate = (date, dateLabel) => date ? formatDisplayDate(date) : dateLabel ?? "";
    const isCarnival = data.event.slug === "long-eaton-carnival";
    head("1pckhrw", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(data.event.title)} | Love Long Eaton</title>`);
      });
      $$renderer3.push(`<meta name="description"${attr("content", data.event.excerpt)}/> <meta property="og:title"${attr("content", `${data.event.title} | Love Long Eaton`)}/> <meta property="og:description"${attr("content", data.event.excerpt)}/>`);
    });
    $$renderer2.push(`<article class="container-shell section-space"><a href="/events" class="button-subtle">Back to events</a> <div class="mt-6 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start"><div><p class="eyebrow">${escape_html(data.event.category)}</p> <h1 class="mt-3 text-4xl text-ink sm:text-5xl">${escape_html(data.event.title)}</h1> `);
    if (data.event.strapline) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<p class="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-ink/48">${escape_html(data.event.strapline)}</p>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> <p class="mt-5 max-w-2xl text-lg leading-8 text-ink/72">${escape_html(data.event.excerpt)}</p> <div class="surface-card mt-8 grid gap-4 p-6 sm:grid-cols-2 lg:grid-cols-4"><div><p class="eyebrow">Date</p> <p class="mt-2 text-base font-semibold text-ink">${escape_html(formatDisplayDate(data.event.date))}</p></div> <div><p class="eyebrow">Start</p> <p class="mt-2 text-base font-semibold text-ink">${escape_html(data.event.startTime ?? data.event.time)}</p></div> <div><p class="eyebrow">Location</p> <p class="mt-2 text-base font-semibold text-ink">${escape_html(data.event.location)}</p></div> `);
    if (data.event.price) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div><p class="eyebrow">Entry</p> <p class="mt-2 text-base font-semibold text-ink">${escape_html(data.event.price)}</p></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div> <div class="mt-8"><h2 class="text-2xl text-ink">About this event</h2> <div class="mt-4 space-y-5 text-base leading-8 text-ink/75"><!--[-->`);
    const each_array = ensure_array_like(data.event.description);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let paragraph = each_array[$$index];
      $$renderer2.push(`<p>${escape_html(paragraph)}</p>`);
    }
    $$renderer2.push(`<!--]--></div></div> <div class="surface-card mt-8 p-6"><h2 class="text-2xl text-ink">Timing details</h2> <div class="mt-5 grid gap-4 sm:grid-cols-2"><div class="inset-panel p-4"><p class="eyebrow">Starts</p> <p class="mt-2 text-base font-semibold text-ink">${escape_html(data.event.startTime ?? data.event.time)}</p></div> `);
    if (data.event.endTime || data.event.approximateReturnTime) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="inset-panel p-4"><p class="eyebrow">${escape_html(data.event.approximateReturnTime ? "Approximate return" : "Ends")}</p> <p class="mt-2 text-base font-semibold text-ink">${escape_html(data.event.approximateReturnTime ?? data.event.endTime)}</p></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div></div> `);
    if (data.event.volunteerRun) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="surface-card mt-8 p-6"><h2 class="text-2xl text-ink">Organiser</h2> <p class="mt-4 text-base leading-8 text-ink/75">${escape_html(data.event.organiser)}. The event is run entirely by volunteers.</p></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (data.event.relatedDates?.length) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="surface-card mt-8 p-6"><h2 class="text-2xl text-ink">Related dates</h2> <p class="body-copy-sm mt-4">Car boot dates listed alongside the carnival.</p> <div class="mt-5 grid gap-3 sm:grid-cols-2"><!--[-->`);
      const each_array_1 = ensure_array_like(data.event.relatedDates);
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let item = each_array_1[$$index_1];
        $$renderer2.push(`<div class="inset-panel p-4"><p class="eyebrow">${escape_html(item.title)}</p> <p class="mt-2 text-base font-semibold text-ink">${escape_html(formatRelatedDate(item.date, item.dateLabel))}</p> `);
        if (item.note) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<p class="mt-1 text-sm text-ink/60">${escape_html(item.note)}</p>`);
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]--></div>`);
      }
      $$renderer2.push(`<!--]--></div></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (data.event.tags?.length) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="mt-8 flex flex-wrap gap-2"><!--[-->`);
      const each_array_2 = ensure_array_like(data.event.tags);
      for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
        let tag = each_array_2[$$index_2];
        $$renderer2.push(`<span class="chip">${escape_html(tag)}</span>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (data.event.sourceName) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<p class="mt-8 text-sm text-ink/55">Source: ${escape_html(data.event.sourceName)} `);
      if (data.event.sourceUrl) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<a${attr("href", data.event.sourceUrl)} target="_blank" rel="noreferrer" class="font-semibold text-brand-700 hover:text-brand-900">Visit source</a>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></p>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div> <div class="space-y-6">`);
    ImagePlaceholder($$renderer2, {
      label: data.event.image?.label ?? data.event.imageLabel,
      style: data.event.image?.style ?? data.event.imageStyle,
      className: "h-[24rem] w-full"
    });
    $$renderer2.push(`<!----> <div class="surface-card p-6"><h2 class="text-2xl text-ink">Planning your visit</h2> <p class="body-copy-sm mt-4">`);
    if (isCarnival) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`For the carnival, the day starts with the road parade before the main site activity continues on West Park. The main site is free to enter.`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`Pair this event with a stop at a local cafe, a browse through the town centre or a walk through one of Long Eaton’s green spaces.`);
    }
    $$renderer2.push(`<!--]--></p> <div class="mt-5 flex flex-wrap gap-3"><a href="/businesses" class="button-primary">Find a local business</a> <a href="/discover" class="button-secondary">Discover the town</a></div></div></div></div></article>`);
    bind_props($$props, { data });
  });
}
export {
  _page as default
};
