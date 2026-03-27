export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["carboot.jpg","carnival-2.webp","carnival-3.webp","carnival.webp","duchess-theatre.webp","favicon.png","favicon.svg","le-logo.png","lebjj-logo.png"]),
	mimeTypes: {".jpg":"image/jpeg",".webp":"image/webp",".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.CTmKTs7M.js",app:"_app/immutable/entry/app.DToMF3T6.js",imports:["_app/immutable/entry/start.CTmKTs7M.js","_app/immutable/chunks/BFozC_JH.js","_app/immutable/chunks/Cmn9UCS_.js","_app/immutable/chunks/BUApaBEI.js","_app/immutable/chunks/D-JH9fzP.js","_app/immutable/entry/app.DToMF3T6.js","_app/immutable/chunks/Cmn9UCS_.js","_app/immutable/chunks/Dcf3bkLG.js","_app/immutable/chunks/D-JH9fzP.js","_app/immutable/chunks/DfTdZtgz.js","_app/immutable/chunks/CcknfRIY.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/about","/businesses","/contact","/discover","/events","/news","/events/duchess-theatre-agatha-christie-s-a-murder-is-announced","/events/duchess-theatre-i-want-it-all-a-night-of-queen","/events/duchess-theatre-what-a-knight","/businesses/duchess-theatre-chatsworth-arts-centre","/businesses/long-eaton-bjj","/events/duchess-theatre-the-drowsy-chaperone","/events/duchess-theatre-ktco-the-cher-show","/events/long-eaton-carnival-car-boot-sale-12-april-2026","/events/duchess-theatre-the-pirates-of-penzance","/events/duchess-theatre-the-roses-of-eyam","/events/duchess-theatre-and-then-there-were-none","/events/duchess-theatre-the-shawshank-redemption","/events/duchess-theatre-all-revved-up","/events/duchess-theatre-elton-the-voice-the-look-the-show","/events/long-eaton-carnival-car-boot-sale-17-may-2026","/events/duchess-theatre-anything-goes","/events/long-eaton-carnival","/events/long-eaton-carnival-car-boot-sale-21-june-2026","/events/long-eaton-carnival-car-boot-sale-19-july-2026","/events/long-eaton-carnival-car-boot-sale-16-august-2026","/events/long-eaton-carnival-car-boot-sale-20-september-2026","/events/long-eaton-carnival-car-boot-sale-october-2026-tbc"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
