export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.svg","lebjj-logo.png"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.CmpclPGc.js",app:"_app/immutable/entry/app.CXSYuzBd.js",imports:["_app/immutable/entry/start.CmpclPGc.js","_app/immutable/chunks/DeY_0ulB.js","_app/immutable/chunks/BZjYtM9O.js","_app/immutable/chunks/BUApaBEI.js","_app/immutable/chunks/CVoNdbWc.js","_app/immutable/entry/app.CXSYuzBd.js","_app/immutable/chunks/BZjYtM9O.js","_app/immutable/chunks/CZ6WYy7q.js","_app/immutable/chunks/CVoNdbWc.js","_app/immutable/chunks/DH8z07AK.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/about","/businesses","/contact","/discover","/events","/news","/events/long-eaton-carnival-car-boot-sale-12-april-2026","/events/long-eaton-carnival","/businesses/long-eaton-bjj","/events/long-eaton-carnival-car-boot-sale-17-may-2026","/events/long-eaton-carnival-car-boot-sale-21-june-2026","/events/long-eaton-carnival-car-boot-sale-19-july-2026","/events/long-eaton-carnival-car-boot-sale-16-august-2026","/events/long-eaton-carnival-car-boot-sale-20-september-2026","/events/long-eaton-carnival-car-boot-sale-october-2026-tbc"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
