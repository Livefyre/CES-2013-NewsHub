// This will run on the index (Home) page
require(['./config'],
function () {

require(['fyret402', 'streamhub-backbone', 'streamhub-isotope',
	     'jquery', 'mustache', 'text!../src/templates/Home/Instagram.html',
	     'text!../src/templates/Home/Content.html'],
function (fyre, Hub, IsotopeView, $, Mustache, InstagramHtml, HomeContentHtml) {
	fyre.conv.load({}, [{
		network: 'livefyre.com',
		app: 'sdk'
	}], loadHomeApps);
	function loadHomeApps (sdk) {
		var main = new Hub({
			sdk: sdk,
	        collection: {
	            siteId: "303818",
	            articleId: "51"
	        },
	        contentViewOptions: {
	        	template: Mustache.compile(HomeContentHtml)
	        },
	        sources: {
	            rss: {
	                template: function (d) {
	                    return Mustache.compile(InstagramHtml)(d);
	                }
	            }
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