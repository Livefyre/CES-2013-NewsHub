// This will run on the index (Home) page
require(['./config'],
function () {

require(['fyre', 'streamhub-backbone', 'streamhub-isotope',
	     'jquery', 'mustache', '../src/templates/Card', 'CES/views/SlideshowView', 'CES/templates/Hero', '../src/news/newsCommon'],
function (fyre, Hub, IsotopeView, $, Mustache, CardTemplate, SlideshowView, HeroTemplate, newsCommon) {
	fyre.conv.load({
		network: 'labs.fyre.co'
	}, [{
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
	            siteId: "320568",
	            articleId: "home_news"
	        },
	        contentViewOptions: {
	        	template: CardTemplate
	        },
	        view: IsotopeView,
	        viewOptions: {
	        	isotope: {
	        		masonry: {
	        			columnWidth: 200
	        		}
	        	}
	        },
	        el: document.getElementById("home-main-app")
		})
		var tweets = new Hub({
			sdk: sdk,
	        collection: {
	            siteId: "320568",
	            articleId: "home_fromthefloor"
	        },
	        el: document.getElementById("home-tweets")
		})
	}
});

console.log("Home loaded");
});