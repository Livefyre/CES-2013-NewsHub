// # [TechCrunch](http://ces.livefyre.com/news/TechCrunch.html) News
// Display an [IsotopeView](https://github.com/gobengo/streamhub-isotope)
// to display Content produced by TechCrunch, and a FeedView
// to show off chatter about TechCrunch

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
    }], loadTechCrunchApps);

    // `fyre.conv.load` passes the sdk to this once loaded
    function loadTechCrunchApps (sdk) {
        // ## News from TechCrunch
        // Display Content produced by TechCrunch in a tiled IsotopeView
        //
        // * Tweets by @TechCrunch
        // * Tweets containing "via @TechCrunch"
        //   containing #CES, #2013CES, #CES2013, or #CESCrunch
        // * Tweets by @TechCrunch
        //   containing #CES, #2013CES, #CES2013, or #CESCrunch
        var main = new Hub({
            sdk: sdk,
            collection: {
                siteId: "320568",
                articleId: "news_techcrunch"
            },
            // Use the colorful CardTemplate for all Content
            contentViewOptions: {
                template: CardTemplate
            },
            // Use [IsotopeView](https://github.com/gobengo/streamhub-isotope)
            view: IsotopeView,
            el: document.getElementById("techcrunch-main-app")
        });

        // ## Chatter about TechCrunch
        // Display Content about TechCrunch in a FeedView
        //
        // * Tweets containing #CESCrunch
        var tweets = new Hub({
            sdk: sdk,
            collection: {
                siteId: "320568",
                articleId: "news_techcrunch_chatter"
            },
            el: document.getElementById("techcrunch-tweets")
        });
    }
});

console.log("TechCrunch loaded");
});
