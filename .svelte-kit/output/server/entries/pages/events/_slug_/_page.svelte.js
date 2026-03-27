import { h as head, b as escape_html, e as ensure_array_like, c as bind_props, a as attr } from "../../../../chunks/index.js";
import { I as ImagePlaceholder } from "../../../../chunks/ImagePlaceholder.js";
import { f as formatEventDate, a as formatDisplayDate } from "../../../../chunks/format.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let data = $$props["data"];
    const formatRelatedDate = (date, dateLabel) => date ? formatDisplayDate(date) : dateLabel ?? "";
    const isCarnival = data.event.slug === "long-eaton-carnival";
    const hasVisitDetails = Boolean(data.event.priceSummary) || Boolean(data.event.locationNote) || Boolean(data.event.fundraisingNote);
    head("1pckhrw", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(data.event.title)} | Love Long Eaton</title>`);
      });
      $$renderer3.push(`<meta name="description"${attr("content", data.event.excerpt)}/> <meta property="og:title"${attr("content", `${data.event.title} | Love Long Eaton`)}/> <meta property="og:description"${attr("content", data.event.excerpt)}/>`);
    });
    $$renderer2.push(`<article class="section-surface"><div class="container-shell section-space"><a href="/events" class="button-subtle">Back to events</a> <div class="mt-6 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start"><div><p class="eyebrow">${escape_html(data.event.category)}</p> <h1 class="mt-3 text-brand-text">${escape_html(data.event.title)}</h1> `);
    if (data.event.strapline) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<p class="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-muted">${escape_html(data.event.strapline)}</p>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> <p class="mt-5 max-w-2xl text-lg leading-8 text-brand-muted">${escape_html(data.event.excerpt)}</p> <div class="surface-card mt-8 grid gap-4 p-6 sm:grid-cols-2 lg:grid-cols-4"><div><p class="eyebrow">Date</p> <p class="mt-2 text-base font-semibold text-brand-text">${escape_html(formatEventDate(data.event))}</p></div> <div><p class="eyebrow">Start</p> <p class="mt-2 text-base font-semibold text-brand-text">${escape_html(data.event.startTime ?? data.event.time)}</p></div> <div><p class="eyebrow">Location</p> <p class="mt-2 text-base font-semibold text-brand-text">${escape_html(data.event.location)}</p></div> `);
    if (data.event.price) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div><p class="eyebrow">Entry</p> <p class="mt-2 text-base font-semibold text-brand-text">${escape_html(data.event.price)}</p></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div> <div class="mt-8"><h2 class="text-2xl text-brand-text">About this event</h2> <div class="mt-4 space-y-5 text-base leading-8 text-brand-muted"><!--[-->`);
    const each_array = ensure_array_like(data.event.description);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let paragraph = each_array[$$index];
      $$renderer2.push(`<p>${escape_html(paragraph)}</p>`);
    }
    $$renderer2.push(`<!--]--></div></div> <div class="surface-card mt-8 p-6"><h2 class="text-2xl text-brand-text">Timing details</h2> <div class="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"><div class="inset-panel p-4"><p class="eyebrow">Starts</p> <p class="mt-2 text-base font-semibold text-brand-text">${escape_html(data.event.startTime ?? data.event.time)}</p></div> `);
    if (data.event.time !== data.event.startTime) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="inset-panel p-4"><p class="eyebrow">At a glance</p> <p class="mt-2 text-base font-semibold text-brand-text">${escape_html(data.event.time)}</p></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (data.event.endTime || data.event.approximateReturnTime) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="inset-panel p-4"><p class="eyebrow">${escape_html(data.event.approximateReturnTime ? "Approximate return" : "Ends")}</p> <p class="mt-2 text-base font-semibold text-brand-text">${escape_html(data.event.approximateReturnTime ?? data.event.endTime)}</p></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div></div> `);
    if (data.event.sellerInfo?.length || data.event.buyerInfo?.length) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="mt-8 grid gap-6 lg:grid-cols-2">`);
      if (data.event.sellerInfo?.length) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<div class="surface-card p-6"><h2 class="text-2xl text-brand-text">Sellers</h2> <ul class="mt-4 space-y-3 text-base leading-7 text-brand-muted"><!--[-->`);
        const each_array_1 = ensure_array_like(data.event.sellerInfo);
        for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
          let item = each_array_1[$$index_1];
          $$renderer2.push(`<li>${escape_html(item)}</li>`);
        }
        $$renderer2.push(`<!--]--></ul></div>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--> `);
      if (data.event.buyerInfo?.length) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<div class="surface-card p-6"><h2 class="text-2xl text-brand-text">Buyers</h2> <ul class="mt-4 space-y-3 text-base leading-7 text-brand-muted"><!--[-->`);
        const each_array_2 = ensure_array_like(data.event.buyerInfo);
        for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
          let item = each_array_2[$$index_2];
          $$renderer2.push(`<li>${escape_html(item)}</li>`);
        }
        $$renderer2.push(`<!--]--></ul></div>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (hasVisitDetails) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="surface-card mt-8 p-6"><h2 class="text-2xl text-brand-text">What to know</h2> <div class="mt-5 grid gap-4 sm:grid-cols-2">`);
      if (data.event.priceSummary) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<div class="inset-panel p-4"><p class="eyebrow">Pricing</p> <p class="mt-2 text-base leading-7 text-brand-muted">${escape_html(data.event.priceSummary)}</p></div>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--> `);
      if (data.event.locationNote) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<div class="inset-panel p-4"><p class="eyebrow">Location note</p> <p class="mt-2 text-base leading-7 text-brand-muted">${escape_html(data.event.locationNote)}</p></div>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--> `);
      if (data.event.fundraisingNote) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<div class="inset-panel p-4 sm:col-span-2"><p class="eyebrow">Fundraising</p> <p class="mt-2 text-base leading-7 text-brand-muted">${escape_html(data.event.fundraisingNote)}</p></div>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></div></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (data.event.organiser) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="surface-card mt-8 p-6"><h2 class="text-2xl text-brand-text">Organiser</h2> <p class="mt-4 text-base leading-8 text-brand-muted">${escape_html(data.event.organiser)} `);
      if (data.event.volunteerRun) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`. The event is run entirely by volunteers.`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></p></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (data.event.relatedDates?.length) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="surface-card mt-8 p-6"><h2 class="text-2xl text-brand-text">Related dates</h2> <p class="body-copy-sm mt-4">Useful extra dates connected with this event.</p> <div class="mt-5 grid gap-3 sm:grid-cols-2"><!--[-->`);
      const each_array_3 = ensure_array_like(data.event.relatedDates);
      for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
        let item = each_array_3[$$index_3];
        $$renderer2.push(`<div class="inset-panel p-4"><p class="eyebrow">${escape_html(item.title)}</p> <p class="mt-2 text-base font-semibold text-brand-text">${escape_html(formatRelatedDate(item.date, item.dateLabel))}</p> `);
        if (item.note) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<p class="mt-1 text-sm text-brand-muted">${escape_html(item.note)}</p>`);
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
      const each_array_4 = ensure_array_like(data.event.tags);
      for (let $$index_4 = 0, $$length = each_array_4.length; $$index_4 < $$length; $$index_4++) {
        let tag = each_array_4[$$index_4];
        $$renderer2.push(`<span class="chip">${escape_html(tag)}</span>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div> <div class="space-y-6">`);
    ImagePlaceholder($$renderer2, {
      label: data.event.image?.label ?? data.event.imageLabel,
      style: data.event.image?.style ?? data.event.imageStyle,
      className: "h-[24rem] w-full"
    });
    $$renderer2.push(`<!----> <div class="surface-card p-6"><h2 class="text-2xl text-brand-text">Planning your visit</h2> <p class="body-copy-sm mt-4">`);
    if (isCarnival) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`For the carnival, the day starts with the road parade before the main site activity continues on West Park. The main site is free to enter.`);
    } else if (data.event.category === "Markets") {
      $$renderer2.push("<!--[1-->");
      $$renderer2.push(`West Park car boots are simple to plan for: sellers arrive from 7am, buyers from 8am, and all proceeds support the Carnival fund.`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`Pair this event with a stop at a local cafe, a browse through the town centre or a walk through one of Long Eaton’s green spaces.`);
    }
    $$renderer2.push(`<!--]--></p> <div class="mt-5 flex flex-wrap gap-3"><a href="/businesses" class="button-primary">Find a local business</a> <a href="/contact" class="button-secondary">Send an event</a></div></div></div></div></div></article>`);
    bind_props($$props, { data });
  });
}
export {
  _page as default
};
