import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.AQir3NDz.js","_app/immutable/chunks/Dcf3bkLG.js","_app/immutable/chunks/Cmn9UCS_.js","_app/immutable/chunks/B7ol3XSe.js","_app/immutable/chunks/BeA7vNj3.js","_app/immutable/chunks/Bn9mbcRk.js","_app/immutable/chunks/CV8NvbTj.js","_app/immutable/chunks/H6K2Fb33.js","_app/immutable/chunks/Bcno8etW.js","_app/immutable/chunks/DfTdZtgz.js"];
export const stylesheets = ["_app/immutable/assets/0.BvOoEadM.css","_app/immutable/assets/HeroSlide.ByHWCA-X.css"];
export const fonts = [];
