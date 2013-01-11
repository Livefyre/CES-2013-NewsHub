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
		});
	}
});

focusMediaEveryNSeconds(3);

/*
 * Focuses a hub item on the media wall every n seconds
 */
function focusMediaEveryNSeconds (frequencyInSeconds) {
    window.setInterval(function() { 
        var $hubItems = $('.hub-item', $('#media-wall-0'));
        var $focusItem = $hubItems.eq(getRandomInt(0, 10));
        var focusedClassName = 'focused-hub-item';
        $('.'+focusedClassName).removeClass(focusedClassName);
        $focusItem.addClass(focusedClassName);
    }, frequencyInSeconds * 1000);
};

/*
 * Returns a random integer between min and max
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("Media loaded");
});
