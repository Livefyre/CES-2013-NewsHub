// # [Media](http://ces.livefyre.com)
// Display:
//
// * an [IsotopeView](https://github.com/gobengo/streamhub-isotope) of
//   Instagram photos from CES

// Load dependencies
require([
    // This Collection lives on the UAt environment, so we'll
    // load a different Livefyre JS lib
    'fyret402',
    'streamhub-backbone',
    'streamhub-isotope',
    'jquery',
    'mustache',
    'text!../src/templates/Instagram.html'],
function (fyre, Hub, IsotopeView, $, Mustache, InstagramHtml) {
    // ## Load the StreamHub JavaScript SDK
    // Get StreamHub JS SDKs from Livefyre's lib.
    // The Media Collection lives in the Livefyre.com Network
    fyre.conv.load({}, [{
        network: 'livefyre.com',
        app: 'sdk'
    }], loadMediaWall);

    // `fyre.conv.load` passes the sdk to this once loaded
    function loadMediaWall (sdk) {
        // ## Media Wall
        // Display a tiled window into CES using an IsotopeView
        //
        // * Instagram photos with #2013ces, #ces2013, #cesvegas,
        //   #instacube, #ces
        var wall = new Hub({
            sdk: sdk,
            collection: {
                siteId: "303818",
                articleId: "69"
            },
            el: document.getElementById("media-wall-0"),
            // Use an IsotopeView
            view: IsotopeView,
            sources: {
                // Use an image-centric InstagramHtml Mustache
                // template for Instagraph photo Content
                rss: {
                    template: function (d) {
                        return Mustache.compile(InstagramHtml)(d);
                    }
                }
            }
        });
    }
});

// Every 3 seconds, focus on a particular photo above
// the fold to create pleasant motion
focusMediaEveryNSeconds(3);

// To invoke motion, we can .focus a photo, which will cause
// its caption to slide up for a bit, then down
/*
 * Focuses a hub item on the media wall every n seconds
 */
function focusMediaEveryNSeconds (frequencyInSeconds) {
    window.setInterval(function() { 
        var $hubItems = $('.hub-item', $('#media-wall-0'));
        // Choose a photo with a non-uniform distribution.
        // Wouldn't want to be too predictable
        var $focusItem = $hubItems.eq(getRandomInt(0, 10));
        var focusedClassName = 'focused-hub-item';
        $('.'+focusedClassName).removeClass(focusedClassName);
        $focusItem.addClass(focusedClassName);
    }, frequencyInSeconds * 1000);
}

/*
 * Returns a random integer between min and max
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("Media loaded");
});
