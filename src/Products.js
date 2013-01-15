// # [Products](http://ces.livefyre.com/Products.html) page
// Display a FeedView for each of a handful of product
// categories for the exciting things at CES

// Load ./config so that requirejs knows about all the dependencies
require(['./config'], function () {

require([
    'fyre',
    'streamhub-backbone',
    'jquery',
    'mustache',
    'text!../src/templates/Instagram.html',
    'text!../src/templates/Twitter.html',
    '../src/templates/Card'],
function (fyre, Hub, $, Mustache, InstagramHtml, TwitterHtml, CardTemplate) {
    // Put the apps in an Array so we can count them later
    var apps = [];

    // ## Load the StreamHub JavaScript SDK
    // Get StreamHub JS SDKs from Livefyre's lib.
    // All CES 2013 NewsHub Collections are in the `labs.fyre.co` Network
    fyre.conv.load({
        network: 'labs.fyre.co'
    }, [{
        app: 'sdk'
    }], loadApps);

    // `fyre.conv.load` passes the sdk to this once loaded
    function loadApps (sdk) {
        // The Products page uses a different template for Content
        // depending on the Content source
        var sources = {
            // RSS Items will be from Instagram, so use a template
            // that shows off the Media attached to Content
            rss: {
                template: function (d) {
                    return Mustache.compile(InstagramHtml)(d);
                }
            },
            // Tweets can get monotonous by themselves,
            // so use the CardTemplate for 1/4th of them.
            // Since templates are just functions that accept JSON
            // and return strings, it's easy to chain them together
            twitter: {
                template: (function () {
                    var i=0;
                    return function (d) {
                        i++;
                        if (i%4===0) {
                            return CardTemplate(d);
                        }
                        return Mustache.compile(TwitterHtml)(d);
                    };
                }())
            }
        };

        // ## Render the FeedViews
        // The `Hub` constructor provided with StreamHub-Backbone
        // takes care of slurping up data from the `sdk` and sending
        // it into a View. The default View is FeedView, so we don't
        // need to specify it.

        // ### Televisions
        // * Tweets containing "CES" and ("Television", "televisions",
        //   "TV", "TVs", "roku", "Comcast", "releases TV", "Google TV",
        //   "TV remote", "Dish", "LG TV", "Westinghouse")
        // * Tweets containing "television" and #2013ces
        //   from near CES
        var app0 = apps.push(new Hub({
            sdk: sdk,
            collection: {
                siteId: "320568",
                articleId: "products_televisions"
            },
            sources: sources,
            el: document.getElementById("product-0-env")
        }));
        // ### Smartphones
        // * Tweets containing "smartphone" and "CES"
        //   from near CES
        // * Tweets containing "CES" and ("smartphone", "xperia z",
        //   "xperia", "galaxy", "sony phone", "gorilla glass", "cell phone",
        //   "corning", "new smartphone")
        var app1 = apps.push(new Hub({
            sdk: sdk,
            collection: {
                siteId: "320568",
                articleId: "products_smartphones"
            },
            sources: sources,
            el: document.getElementById("product-1-env")
        }));
        // ### Tablets
        // You get the drift of the Content strategy by now... :)
        var app2 = apps.push(new Hub({
            sdk: sdk,
            collection: {
                siteId: "320568",
                articleId: "products_tablets"
            },
            sources: sources,
            el: document.getElementById("product-2-env")
        }));
        // ### Computers
        var app3 = apps.push(new Hub({
            sdk: sdk,
            collection: {
                siteId: "320568",
                articleId: "products_computers"
            },
            sources: sources,
            el: document.getElementById("product-3-env")
        }));
        // ### Audio
        var app4 = apps.push(new Hub({
            sdk: sdk,
            collection: {
                siteId: "320568",
                articleId: "products_audio"
            },
            sources: sources,
            el: document.getElementById("product-4-env")
        }));
        // ### Gaming
        var app5 = apps.push(new Hub({
            sdk: sdk,
            collection: {
                siteId: "320568",
                articleId: "products_gaming"
            },
            sources: sources,
            el: document.getElementById("product-5-env")
        }));
        // ### Gadgets
        var app6 = apps.push(new Hub({
            sdk: sdk,
            collection: {
                siteId: "320568",
                articleId: "products_gadgets"
            },
            sources: sources,
            el: document.getElementById("product-6-env")
        }));
        // ### Digital Health
        var app7 = apps.push(new Hub({
            sdk: sdk,
            collection: {
                siteId: "320568",
                articleId: "products_digital_health"
            },
            sources: sources,
            el: document.getElementById("product-7-env")
        }));

        // Explicitly set the width on the container of the
        // FeedViews. It's hard to style it so it resizes dynamically
        var col_width = 307;
        var viewport_width = $(window).width();
        $('.deck-columns').css('width', ((apps.length) * col_width) + viewport_width - 75);
    }
});

console.log("Products loaded");
});
