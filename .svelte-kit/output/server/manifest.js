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
		client: {start:"_app/immutable/entry/start.D2zQLZyF.js",app:"_app/immutable/entry/app.Do71v41V.js",imports:["_app/immutable/entry/start.D2zQLZyF.js","_app/immutable/chunks/Zydugszb.js","_app/immutable/chunks/BpCH1ukL.js","_app/immutable/chunks/BUApaBEI.js","_app/immutable/chunks/BCZRK3uz.js","_app/immutable/entry/app.Do71v41V.js","_app/immutable/chunks/BpCH1ukL.js","_app/immutable/chunks/BWAYkB7k.js","_app/immutable/chunks/BCZRK3uz.js","_app/immutable/chunks/DtOSLxhE.js","_app/immutable/chunks/DS1Q_eWU.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/about","/businesses","/contact","/discover","/events","/news","/events/long-eaton-makers-market","/events/family-fun-at-west-park","/businesses/station-street-kitchen","/businesses/canal-side-cycles","/businesses/long-eaton-books-co","/businesses/the-curated-corner","/businesses/erewash-wellness-studio","/businesses/park-view-florist","/businesses/long-eaton-bjj","/events/twilight-canal-walk","/events/independent-food-weekend","/events/summer-bandstand-sessions","/events/shop-small-late-night"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
