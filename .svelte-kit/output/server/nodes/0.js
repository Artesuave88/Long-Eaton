import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.Bt4wjx7m.js","_app/immutable/chunks/BWAYkB7k.js","_app/immutable/chunks/BpCH1ukL.js","_app/immutable/chunks/YmiVeDmP.js","_app/immutable/chunks/gC57OlVI.js","_app/immutable/chunks/DrJMRwvb.js","_app/immutable/chunks/6tQA4oi_.js","_app/immutable/chunks/D-R5Q6N0.js","_app/immutable/chunks/Be72b-sv.js","_app/immutable/chunks/DtOSLxhE.js","_app/immutable/chunks/DS1Q_eWU.js"];
export const stylesheets = ["_app/immutable/assets/0.3VAOqU61.css"];
export const fonts = [];
