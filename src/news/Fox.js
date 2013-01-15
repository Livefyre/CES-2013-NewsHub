// # [Fox News](http://ces.livefyre.com/news/Fox.html) News
// Display an [IsotopeView](https://github.com/gobengo/streamhub-isotope)
// to display Content produced by Fox News, and a FeedView
// to show off chatter about Fox News

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
function (fyre, Hub, IsotopeView, $, Mustache, CardTemplate) {
    // ## Load the StreamHub JavaScript SDK
    // Get StreamHub JS SDKs from Livefyre's lib.
    // All CES 2013 NewsHub Collections are in the `labs.fyre.co` Network
    fyre.conv.load({
        network: 'labs.fyre.co'
    }, [{
        app: 'sdk'
    }], loadFoxApps);

    // `fyre.conv.load` passes the sdk to this once loaded
    function loadFoxApps (sdk) {
        // ## News from Fox News
        // Display Content produced by Fox News in a tiled IsotopeView
        //
        // * Tweets by @claytonmorris, @foxnewslive
        //   that contain #2013ces or #ces
        // * Tweets containing "fox news" and "CES"
        // * Tweets by @foxnews that contain "CES"
        // * Tweets containing #2013ces, #ces, or #ces2013
        //   by @foxnews
        var main = new Hub({
            sdk: sdk,
            collection: {
                siteId: "320568",
                articleId: "news_fox_news"
            },
            // Use the colorful CardTemplate for all Content
            contentViewOptions: {
                template: CardTemplate
            },
            // Use [IsotopeView](https://github.com/gobengo/streamhub-isotope)
            view: IsotopeView,
            el: document.getElementById("fox-main-app")
        });

        // ## Chatter about Fox News
        // Display Content about Fox News in a FeedView
        //
        // * Tweets containing "Fox News" and "CES"
        // * Tweets mentioning @foxnews that contain "CES"
        // * Tweets by @foxnews containing #2013ces
        // * Tweets mentioning @foxnews
        //   containing #2013ces or #ces
        // * Tweets by @foxnews containing "ces"
        var tweets = new Hub({
            sdk: sdk,
            collection: {
                siteId: "320568",
                articleId: "news_fox_news_chatter"
            },
            el: document.getElementById("fox-tweets")
        });
    }
});

console.log("Fox loaded");
});