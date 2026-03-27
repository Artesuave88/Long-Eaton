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
		client: {start:"_app/immutable/entry/start.BLNvKnDw.js",app:"_app/immutable/entry/app.wg8u4wtE.js",imports:["_app/immutable/entry/start.BLNvKnDw.js","_app/immutable/chunks/BYIochOE.js","_app/immutable/chunks/BZjYtM9O.js","_app/immutable/chunks/BUApaBEI.js","_app/immutable/chunks/CVoNdbWc.js","_app/immutable/entry/app.wg8u4wtE.js","_app/immutable/chunks/BZjYtM9O.js","_app/immutable/chunks/CZ6WYy7q.js","_app/immutable/chunks/CVoNdbWc.js","_app/immutable/chunks/DH8z07AK.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/about","/businesses","/contact","/discover","/events","/news","/events/long-eaton-carnival","/events/long-eaton-makers-market","/events/family-fun-at-west-park","/businesses/long-eaton-bjj","/events/twilight-canal-walk","/events/independent-food-weekend","/events/summer-bandstand-sessions","/events/shop-small-late-night"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
