import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.BcyuM5EQ.js","_app/immutable/chunks/CZ6WYy7q.js","_app/immutable/chunks/BZjYtM9O.js","_app/immutable/chunks/2loAR-BL.js","_app/immutable/chunks/C699761v.js","_app/immutable/chunks/CtooJjkQ.js","_app/immutable/chunks/CHV1jcJe.js","_app/immutable/chunks/DY0GEcPC.js","_app/immutable/chunks/Bcno8etW.js","_app/immutable/chunks/DH8z07AK.js"];
export const stylesheets = ["_app/immutable/assets/0.cwKWATvt.css","_app/immutable/assets/Hero.BzKXVPpV.css"];
export const fonts = [];
