// This will run on the index (Home) page
require(['./config'],
function () {

require(['fyre', 'streamhub-backbone', 'streamhub-isotope',
	     'jquery', 'mustache', 'text!../src/templates/Instagram.html'],
function (fyre, Hub, IsotopeView, $, Mustache, InstagramHtml) {
	fyre.conv.load({}, [{
		network: 'livefyre.com',
		app: 'sdk'
	}], loadHomeApps);
	function loadHomeApps (sdk) {
		var wall = new Hub({
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