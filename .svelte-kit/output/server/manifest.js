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
		client: {start:"_app/immutable/entry/start.DmTIsa_q.js",app:"_app/immutable/entry/app.CB2y7K3c.js",imports:["_app/immutable/entry/start.DmTIsa_q.js","_app/immutable/chunks/BCNvi6IG.js","_app/immutable/chunks/BpCH1ukL.js","_app/immutable/chunks/BUApaBEI.js","_app/immutable/chunks/BCZRK3uz.js","_app/immutable/entry/app.CB2y7K3c.js","_app/immutable/chunks/BpCH1ukL.js","_app/immutable/chunks/BWAYkB7k.js","_app/immutable/chunks/BCZRK3uz.js","_app/immutable/chunks/DtOSLxhE.js","_app/immutable/chunks/DS1Q_eWU.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/about","/businesses","/contact","/discover","/events","/news","/events/long-eaton-makers-market","/events/family-fun-at-west-park","/businesses/long-eaton-bjj","/businesses/station-street-kitchen","/businesses/canal-side-cycles","/businesses/market-house-gifts","/businesses/erewash-wellness-studio","/businesses/long-eaton-books-co","/businesses/park-view-florist","/events/twilight-canal-walk","/events/independent-food-weekend","/events/summer-bandstand-sessions","/events/shop-small-late-night"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
