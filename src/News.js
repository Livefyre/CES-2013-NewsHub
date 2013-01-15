// # [News](http://ces.livefyre.com/News.html)
// Display:
//
// * a Hero [SlideshowView](https://github.com/gobengo/streamhub-slidesjs)
//   of editorially curated Content by Livefyre
// * an [IsotopeView](https://github.com/gobengo/streamhub-isotope) of
//   aggregated news
// * a FeedView of chatter from CES

// Load ../config so that requirejs knows about all the dependencies
require(['./config'], function () {

// Load dependencies
require([
    'fyre',
    'streamhub-backbone',
    'streamhub-isotope',
    'jquery',
    'mustache',
    '../src/templates/Card',
    'streamhub-slidesjs',
    'CES/templates/Hero',
    '../src/news/newsCommon'],
function (fyre, Hub, IsotopeView, $, Mustache, CardTemplate, SlideshowView, HeroTemplate, newsCommon) {
    // ## Load the StreamHub JavaScript SDK
    // Get StreamHub JS SDKs from Livefyre's lib.
    // All CES 2013 NewsHub Collections are in the `labs.fyre.co` Network
    fyre.conv.load({
        network: 'labs.fyre.co'
    }, [{
        app: 'sdk'
    }], loadNewsApps);

    // `fyre.conv.load` passes the sdk to this once loaded
    function loadNewsApps (sdk) {
        // ## Hero - Editorially curated Content from Livefyre
        // Display a slideshow of the best news in a SlideshowView
        var hero = new Hub({
            sdk: sdk,
            collection: {
                siteId: "320568",
                articleId: "home_editorial"
            },
            el: document.getElementById('hero'),
            // Use a SlideshowView
            view: SlideshowView,
            // Use the special HeroTemplate for Heroes
            contentViewOptions: {
                template: HeroTemplate
            }
        });

        // ## Aggregated News
        // Display News from many sources in an IsotopeView
        //
        // * Tweets by @techland, @mashable, @foxnews, @engadget,
        //   @cnet, @allthingsd, or @techcrunch
        //   that contain #ces, #ces2013, or #2013ces
        var main = new Hub({
            sdk: sdk,
            collection: {
                siteId: "320568",
                articleId: "home_news"
            },
            // Use the colorful CardTemplate for Content
            contentViewOptions: {
                template: CardTemplate
            },
            // Use a tiled IsotopeView
            view: IsotopeView,
            // Pass specific options to the view
            viewOptions: {
                // IsotopeView allows passing Isotope options
                isotope: {
                    masonry: {
                        // Set the columnWidth to meet the layout.
                        // This helps isotope do the right thing.
                        columnWidth: 213
                    }
                }
            },
            el: document.getElementById("home-main-app")
        });

        // ## Aggregated Chatter
        // Display chatter from all sorts of people
        //
        // * Tweets by  @mikeisaac, @rogerwcheng, @film\_girl,
        //   @harrymccracken, @briantong, @lturrentine, @mollywood,
        //   @jbruin, @benparr, @lanceulanoff, @reckless, @calllewis,
        //   @ryan, @johnbiggs, @joemfbrown, @danawollman, @pkafka,
        //   @bheater, @jimkerstetter, @falconejp, @tim_stevens,
        //   @daamoth, @danackerman, @alexia, @petepachal, @emily,
        //   @waltmossberg, or @karaswisher
        // * Tweets by @reckless, @calilewis, @ryan, @briantong,
        //   @johnbiggs, @joemfbrown, @danawollman, @pkafka,
        //   @nickbilton, or @nickcicero
        var tweets = new Hub({
            sdk: sdk,
            collection: {
                siteId: "320568",
                articleId: "home_fromthefloor"
            },
            el: document.getElementById("home-tweets")
        });
    }
});

console.log("News loaded");
});