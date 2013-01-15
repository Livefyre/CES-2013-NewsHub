// # [Engadget](http://ces.livefyre.com/news/Engadget.html) News
// Display an [IsotopeView](https://github.com/gobengo/streamhub-isotope)
// to display Content produced by Engadget, and a FeedView
// to show off chatter about Engadget

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
    }], loadEngadgetApps);

    // `fyre.conv.load` passes the sdk to this once loaded
    function loadEngadgetApps (sdk) {
        // ## News from Engadget
        // Display Content produced by Engadget in a tiled IsotopeView
        //
        // * Tweets by @engadget
        //   that contain "CES"
        // * Tweets by @engadget
        //   containing #CES, #2013CES, or #CES2013
        var main = new Hub({
            sdk: sdk,
            collection: {
                siteId: "320568",
                articleId: "news_engadget"
            },
            // Use the colorful CardTemplate for all Content
            contentViewOptions: {
                template: CardTemplate
            },
            // Use [IsotopeView](https://github.com/gobengo/streamhub-isotope)
            view: IsotopeView,
            el: document.getElementById("engadget-main-app")
        });

        // ## Chatter about Engadget
        // Display Content about Engadget in a FeedView
        //
        // * Tweets mentioning @engadget
        //   and containing #2013ces, #ces, #ces2013
        // * Tweets mentioning @engadget and containing "ces"
        var tweets = new Hub({
            sdk: sdk,
            collection: {
                siteId: "320568",
                articleId: "news_engadget_chatter"
            },
            el: document.getElementById("engadget-tweets")
        });
    }
});

console.log("Engadget loaded");
});