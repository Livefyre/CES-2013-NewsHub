// # [Techland](http://ces.livefyre.com/news/Techland.html) News
// Display an [IsotopeView](https://github.com/gobengo/streamhub-isotope)
// to display Content produced by Techland, and a FeedView
// to show off chatter about Techland

// Load ../config so that requirejs knows about all the dependencies
require(['../config'], function () {

// Load dependencies
require([
    'fyre',
    'streamhub-backbone',
    'streamhub-isotope',
    'jquery',
    'mustache',
    '../src/templates/Card',
    '../src/news/newsCommon'],
function (fyre, Hub, IsotopeView, $, Mustache, CardTemplate) {
    // ## Load the StreamHub JavaScript SDK
    // Get StreamHub JS SDKs from Livefyre's lib.
    // All CES 2013 NewsHub Collections are in the `labs.fyre.co` Network
    fyre.conv.load({
        network: 'labs.fyre.co'
    }, [{
        app: 'sdk'
    }], loadTechlandApps);

    // `fyre.conv.load` passes the sdk to this once loaded
    function loadTechlandApps (sdk) {
        // ## News from Techland
        // Display Content produced by Techland in a tiled IsotopeView
        //
        // * Tweets containing "via @techland" or "by @techland",
        // * Tweets by @techland including #ces, #ces2013, or #2013ces
        // * Tweets containing "techland" and "CES"
        // * Tweets by @daamoth, @harrymccracken, @time, or @techland
        // * Tweets by @techland, @time, or @harrymccracken
        //   that contain "CES", "CES 2013", or "Las Vegas"
        var main = new Hub({
            sdk: sdk,
            collection: {
                siteId: "320568",
                articleId: "news_time_techland"
            },
            contentViewOptions: {
                template: CardTemplate
            },
            view: IsotopeView,
            el: document.getElementById("techland-main-app")
        });
        
        // ## Chatter about Techland
        // Display Content about Techland in a FeedView
        //
        // * Tweets by @Time
        //   and containing #2013ces, #ces, #ces2013
        // * Tweets mentioning @Techland or @harrymccracken
        var tweets = new Hub({
            sdk: sdk,
            collection: {
                siteId: "320568",
                articleId: "news_time_techland_chatter"
            },
            el: document.getElementById("techland-tweets")
        });
    }
});

console.log("Techland loaded");
});