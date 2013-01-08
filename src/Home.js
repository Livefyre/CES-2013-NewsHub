// This will run on the index (Home) page
require(['./config'],
function () {

require(['fyret402', 'streamhub-backbone', 'streamhub-isotope',
	     'jquery', 'mustache', 'text!../src/templates/Instagram.html'],
function (fyre, Hub, IsotopeView, $, Mustache, InstagramHtml) {
	fyre.conv.load({}, [{
		network: 'livefyre.com',
		app: 'sdk'
	}], loadHomeApps);
	function loadHomeApps (sdk) {
		var main = new Hub({
			sdk: sdk,
	        collection: {
	            siteId: "303818",
	            articleId: "77"
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