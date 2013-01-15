// # [Mashable](http://ces.livefyre.com/news/Mashable.html) News
// Display an [IsotopeView](https://github.com/gobengo/streamhub-isotope)
// to display Content produced by Mashable, and a FeedView
// to show off chatter about Mashable

// Load ./config so that requirejs knows about all the dependencies
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
function (fyre, Hub, IsotopeView, $, Mustache, CardTemplate, SlideshowView, HeroTemplate) {
    // ## Load the StreamHub JavaScript SDK
    // Get StreamHub JS SDKs from Livefyre's lib.
    // All CES 2013 NewsHub Collections are in the `labs.fyre.co` Network
    fyre.conv.load({
        network: 'labs.fyre.co'
    }, [{
        app: 'sdk'
    }], loadMashableApps);

    // `fyre.conv.load` passes the sdk to this once loaded
    function loadMashableApps (sdk) {
        // ## News from Mashable
        // Display Content produced by Mashable in a tiled IsotopeView
        //
        // * Tweets by @Mashable that contain #ces or #2013ces
        // * Tweets by @Mashable containing "ces"
        var main = new Hub({
            sdk: sdk,
            collection: {
                siteId: "320568",
                articleId: "news_mashable"
            },
            // Use the colorful CardTemplate for all Content
            contentViewOptions: {
                template: CardTemplate
            },
            // Use [IsotopeView](https://github.com/gobengo/streamhub-isotope)
            view: IsotopeView,
            el: document.getElementById("mashable-main-app")
        });

        // ## Chatter about Mashable
        // Display Content about Mashable in a FeedView
        //
        // * Tweets mentioning @Mashable
        //   and containing #2013ces or #ces2013
        // * Tweets mentioning @Mashable and containing "ces"
        var tweets = new Hub({
            sdk: sdk,
            collection: {
                siteId: "320568",
                articleId: "news_mashable_chatter"
            },
            el: document.getElementById("mashable-tweets")
        });
    }
});

console.log("Mashable loaded");
});