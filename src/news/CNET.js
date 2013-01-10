// This will run on the index (CNET) page
require(['../config'],
function () {

require(['fyre', 'streamhub-backbone', 'streamhub-isotope',
	     'jquery', 'mustache', '../src/templates/Card', '../src/news/newsCommon'],
function (fyre, Hub, IsotopeView, $, Mustache, CardTemplate) {
	fyre.conv.load({
		network: 'labs.fyre.co'
	}, [{
		app: 'sdk'
	}], loadHomeApps);
	function loadHomeApps (sdk) {
		var main = new Hub({
			sdk: sdk,
	        collection: {
	            siteId: "320568",
	            articleId: "news_cnet"
	        },
	        contentViewOptions: {
	        	template: CardTemplate
	        },
	        view: IsotopeView,
	        el: document.getElementById("cnet-main-app")
		})
		var tweets = new Hub({
			sdk: sdk,
	        collection: {
	            siteId: "320568",
	            articleId: "news_cnet_chatter"
	        },
	        el: document.getElementById("cnet-tweets")
		})
	}
});

console.log("CNET loaded");
});
