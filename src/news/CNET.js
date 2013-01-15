// # [CNET](http://ces.livefyre.com/news/CNET.html) News
// Display an [IsotopeView](https://github.com/gobengo/streamhub-isotope)
// to display Content produced by CNET, and a FeedView
// to show off chatter about CNET

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
    }], loadCnetApps);

    // `fyre.conv.load` passes the sdk to this once loaded
    function loadCnetApps (sdk) {
        // ## News from CNET
        // Display Content produced by CNET in a tiled IsotopeView
        //
        // * Tweets by @cnet or @cnetnews
        //   that contain "CES"
        // * Tweets by @cnet or @cnetnews
        //   containing #CES, #2013CES, or #CES2013
        var main = new Hub({
            sdk: sdk,
            collection: {
                siteId: "320568",
                articleId: "news_cnet"
            },
            // Use the colorful CardTemplate for all Content
            contentViewOptions: {
                template: CardTemplate
            },
            // Use [IsotopeView](https://github.com/gobengo/streamhub-isotope)
            view: IsotopeView,
            el: document.getElementById("cnet-main-app")
        });
        // ## Chatter about CNET
        // Display Content about CNET in a FeedView
        //
        // * Tweets mentioning @cnetnews and containing "CES"
        // * Tweets mentioning @cnet, @cnettv, @cnetnews
        //   and containing #2013ces
        // * Tweets containing "CES" and ("CNET" or "CNET booth")
        var tweets = new Hub({
            sdk: sdk,
            collection: {
                siteId: "320568",
                articleId: "news_cnet_chatter"
            },
            el: document.getElementById("cnet-tweets")
        });
    }
});

console.log("CNET loaded");
});
