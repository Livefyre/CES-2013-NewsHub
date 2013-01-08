// This will run on the Media page
require(['./config'], function () {

require(['fyret402', 'streamhub-backbone', 'streamhub-isotope',
	     'jquery', 'mustache', 'text!../src/templates/Instagram.html'],
function (fyre, Hub, IsotopeView, $, Mustache, InstagramHtml) {
	fyre.conv.load({}, [{
		network: 'livefyre.com',
		app: 'sdk'
	}], loadMediaWall);
	function loadMediaWall (sdk) {
		var wall = new Hub({
			sdk: sdk,
	        collection: {
	            siteId: "303818",
	            articleId: "69"
	        },
	        el: document.getElementById("media-wall-0"),
	        view: IsotopeView,
			sources: {
	            rss: {
	                template: function (d) {
	                    return Mustache.compile(InstagramHtml)(d);
	                }
	            }
	        }
		})
	}
});

console.log("Media loaded");
});