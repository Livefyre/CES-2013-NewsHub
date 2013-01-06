// This will run on the Media page
require(['./config'], function () {

require(['fyre', 'streamhub-backbone', 'jquery', 'mustache', 'text!../src/templates/Instagram.html'],
function (fyre, Hub, $, Mustache, InstagramHtml) {
	fyre.conv.load({}, [{
		network: 'livefyre.com',
		app: 'sdk'
	}], loadMediaWall);
	function loadMediaWall (sdk) {
		var wall = new Hub({
			sdk: sdk,
	        collection: {
	            siteId: "303818",
	            articleId: "51"
	        },
	        el: document.getElementById("media-wall-0"),
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