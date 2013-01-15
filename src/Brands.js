// # Brands page
// Display a FeedView for each of a handful of brands
// launching products at CES.

// Load ./config so that requirejs knows about all the dependencies
require(['./config'], function () {

// Load dependencies 
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
    
    // `fyre.conv.loader` passes the sdk to this once loaded
    function loadApps (sdk) {
        // The Brands page uses a different template for Content
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

        // ### Samsung
        // * Tweets by @samsungtweets, @samsungsupport, @samsungmobileus
        //   that also mention #samsungces, #2013ces, #ces, or #ces2013
        // * Tweets mentioning @samsungtweets, @samsungsupport, @samsungmobileus
        //   that also mention #samsungces, #2013ces, #ces, or #ces2013
        //   and are from near CES
        // * Tweets containing "I'm at Samsung CES 2013"
        //   that are from near CES
        var app0 = apps.push(new Hub({
            sdk: sdk,
            collection: {
                siteId: "320568",
                articleId: "brands_samsung"
            },
            sources: sources,
            el: document.getElementById("brand-0-env")
        }));
        // ### Google
        // * Tweets containing "google" and "ces"
        //   that are from near CES
        // * Tweets containing "google"
        //   and #ces, #ces2013, #2013ces
        // * Tweets containing #2013ces and "google"
        // * Tweets containing "android" and "css"
        //   that are from near CES
        var app1 = apps.push(new Hub({
            sdk: sdk,
            collection: {
                siteId: "320568",
                articleId: "brands_google"
            },
            sources: sources,
            el: document.getElementById("brand-1-env")
        }));
        // ### Microsoft
        // You get the drift of the Content strategy by now... :)
        var app2 = apps.push(new Hub({
            sdk: sdk,
            collection: {
                siteId: "320568",
                articleId: "brands_microsoft"
            },
            sources: sources,
            el: document.getElementById("brand-2-env")
        }));
        // ### Canonical
        var app3 = apps.push(new Hub({
            sdk: sdk,
            collection: {
                siteId: "320568",
                articleId: "brands_canonical"
            },
            sources: sources,
            el: document.getElementById("brand-3-env")
        }));
        // ### Sony
        var app4 = apps.push(new Hub({
            sdk: sdk,
            collection: {
                siteId: "320568",
                articleId: "brands_sony"
            },
            sources: sources,
            el: document.getElementById("brand-4-env")
        }));
        // ### Apple
        var app5 = apps.push(new Hub({
            sdk: sdk,
            collection: {
                siteId: "320568",
                articleId: "brands_apple"
            },
            sources: sources,
            el: document.getElementById("brand-5-env")
        }));
        // ### LG
        var app6 = apps.push(new Hub({
            sdk: sdk,
            collection: {
                siteId: "320568",
                articleId: "brands_lg"
            },
            sources: sources,
            el: document.getElementById("brand-6-env")
        }));
        // ### Sharp
        var app7 = apps.push(new Hub({
            sdk: sdk,
            collection: {
                siteId: "320568",
                articleId: "brands_sharp"
            },
            sources: sources,
            el: document.getElementById("brand-7-env")
        }));
        // ### Lenovo
        var app8 = apps.push(new Hub({
            sdk: sdk,
            collection: {
                siteId: "320568",
                articleId: "brands_lenovo"
            },
            sources: sources,
            el: document.getElementById("brand-8-env")
        }));
        // ### Qualcomm
        var app9 = apps.push(new Hub({
            sdk: sdk,
            collection: {
                siteId: "320568",
                articleId: "brands_qualcomm"
            },
            sources: sources,
            el: document.getElementById("brand-9-env")
        }));
        // ### Nvidia
        var app10 = apps.push(new Hub({
            sdk: sdk,
            collection: {
                siteId: "320568",
                articleId: "brands_nvidia"
            },
            sources: sources,
            el: document.getElementById("brand-10-env")
        }));
        // ### Intel
        var app11 = apps.push(new Hub({
            sdk: sdk,
            collection: {
                siteId: "320568",
                articleId: "brands_intel"
            },
            sources: sources,
            el: document.getElementById("brand-11-env")
        }));
        // ### Cisco
        var app12 = apps.push(new Hub({
            sdk: sdk,
            collection: {
                siteId: "320568",
                articleId: "brands_cisco"
            },
            sources: sources,
            el: document.getElementById("brand-12-env")
        }));
        // ### Ford
        var app13 = apps.push(new Hub({
            sdk: sdk,
            collection: {
                siteId: "320568",
                articleId: "brands_ford"
            },
            sources: sources,
            el: document.getElementById("brand-13-env")
        }));

        // Explicitly set the width on the container of the
        // FeedViews. It's hard to style it so it resizes dynamically
        var col_width = 307;
        var viewport_width = $(window).width();
        $('.deck-columns').css('width', ((apps.length) * col_width) + viewport_width - 75);
    }
});

console.log("Brands loaded");
});
