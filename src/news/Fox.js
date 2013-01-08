// This will run on the index (Fox) page
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
	            articleId: "news_fox_news"
	        },
	        contentViewOptions: {
	        	template: CardTemplate
	        },
	        view: IsotopeView,
	        el: document.getElementById("fox-main-app")
		})
		var tweets = new Hub({
			sdk: sdk,
	        collection: {
	            siteId: "320568",
	            articleId: "news_fox_news_chatter"
	        },
	        el: document.getElementById("fox-tweets")
		})
	}
});

console.log("Fox loaded");
});