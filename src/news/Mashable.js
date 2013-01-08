// This will run on the index (Mashable) page
require(['../config'],
function () {

require(['fyret402', 'streamhub-backbone', 'streamhub-isotope',
	     'jquery', 'mustache', '../src/templates/Card', 'CES/views/SlideshowView'],
function (fyre, Hub, IsotopeView, $, Mustache, CardTemplate, SlideshowView) {
	fyre.conv.load({}, [{
		network: 'livefyre.com',
		app: 'sdk'
	}], loadHomeApps);
	function loadHomeApps (sdk) {
		var hero = new Hub({
			sdk: sdk,
			collection: {
				siteId: "303818",
				articleId: "29"
			},
			el: document.getElementById('hero'),
			view: SlideshowView
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
	        el: document.getElementById("mashable-main-app")
		})
		var tweets = new Hub({
			sdk: sdk,
	        collection: {
	            siteId: "303818",
	            articleId: "42"
	        },
	        el: document.getElementById("mashable-tweets")
		})
	}
});

console.log("Mashable loaded");
});