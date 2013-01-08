// This will run on the index (Mashable) page
require(['../config'],
function () {

require(['fyre', 'streamhub-backbone', 'streamhub-isotope',
	     'jquery', 'mustache', '../src/templates/Card', '../src/news/newsCommon'],
function (fyre, Hub, IsotopeView, $, Mustache, CardTemplate, SlideshowView, HeroTemplate) {
	fyre.conv.load({
		network: 'labs.fyre.co'
	}, [{
		app: 'sdk'
	}], loadHomeApps);
	function loadHomeApps (sdk) {
		/*var hero = new Hub({
			sdk: sdk,
			collection: {
				siteId: "320568",
				articleId: "home_editorial"
			},
			el: document.getElementById('hero'),
			view: SlideshowView,
			contentViewOptions: {
				template: HeroTemplate
			}
		});*/
		var main = new Hub({
			sdk: sdk,
	        collection: {
	            siteId: "320568",
	            articleId: "news_mashable"
	        },
	        contentViewOptions: {
	        	template: CardTemplate
	        },
	        view: IsotopeView,
	        el: document.getElementById("mashable-main-app")
		})
		var tweets = new Hub({
			sdk: sdk,
	        collection: {
	            siteId: "320568",
	            articleId: "news_mashable_chatter"
	        },
	        el: document.getElementById("mashable-tweets")
		})
	}
});

console.log("Mashable loaded");
});