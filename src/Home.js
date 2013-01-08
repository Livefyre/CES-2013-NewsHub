// This will run on the index (Home) page
require(['./config'],
function () {

require(['fyret402', 'streamhub-backbone', 'streamhub-isotope',
	     'jquery', 'mustache', '../src/templates/Card', 'CES/views/SlideshowView', 'CES/templates/Hero', '../src/news/newsCommon'],
function (fyre, Hub, IsotopeView, $, Mustache, CardTemplate, SlideshowView, HeroTemplate, newsCommon) {
	fyre.conv.load({}, [{
		network: 'livefyre.com',
		app: 'sdk'
	}], loadHomeApps);
	function loadHomeApps (sdk) {
		var hero = new Hub({
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
		});
		var main = new Hub({
			sdk: sdk,
	        collection: {
	            siteId: "303818",
	            articleId: "51"
	        },
	        contentViewOptions: {
	        	template: CardTemplate
	        },
	        view: IsotopeView,
	        el: document.getElementById("home-main-app")
		})
		var tweets = new Hub({
			sdk: sdk,
	        collection: {
	            siteId: "303818",
	            articleId: "42"
	        },
	        el: document.getElementById("home-tweets")
		})
	}
});

console.log("Home loaded");
});