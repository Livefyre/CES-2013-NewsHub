// This will run on the Brands page
require(['./config'], function () {

require(['fyre', 'streamhub-backbone', 'jquery', 'mustache', 'text!../src/templates/Instagram.html','text!../src/templates/Twitter.html', '../src/templates/Card'],
function (fyre, Hub, $, Mustache, InstagramHtml, TwitterHtml, CardTemplate) {
    var apps = [];
    fyre.conv.load({
        network: 'labs.fyre.co'
    }, [{
        app: 'sdk'
    }], loadApp);
    function loadApp (sdk) {
        var sources = {
            rss: {
                template: function (d) {
                    return Mustache.compile(InstagramHtml)(d);
                }
            },
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
        // Samsung
        var app0 = apps.push(new Hub({
            sdk: sdk,
            collection: {
                siteId: "320568",
                articleId: "brands_samsung"
            },
            sources: sources,
            el: document.getElementById("brand-0-env")
        }));
        // Google
        var app1 = apps.push(new Hub({
            sdk: sdk,
            collection: {
                siteId: "320568",
                articleId: "brands_google"
            },
            sources: sources,
            el: document.getElementById("brand-1-env")
        }));
        // Microsoft
        var app2 = apps.push(new Hub({
            sdk: sdk,
            collection: {
                siteId: "320568",
                articleId: "brands_microsoft"
            },
            sources: sources,
            el: document.getElementById("brand-2-env")
        }));
        // Canonical
        var app3 = apps.push(new Hub({
            sdk: sdk,
            collection: {
                siteId: "320568",
                articleId: "brands_canonical"
            },
            sources: sources,
            el: document.getElementById("brand-3-env")
        }));
        // Sony
        var app4 = apps.push(new Hub({
            sdk: sdk,
            collection: {
                siteId: "320568",
                articleId: "brands_sony"
            },
            sources: sources,
            el: document.getElementById("brand-4-env")
        }));
        // Apple
        var app5 = apps.push(new Hub({
            sdk: sdk,
            collection: {
                siteId: "320568",
                articleId: "brands_apple"
            },
            sources: sources,
            el: document.getElementById("brand-5-env")
        }));
        // LG
        var app6 = apps.push(new Hub({
            sdk: sdk,
            collection: {
                siteId: "320568",
                articleId: "brands_lg"
            },
            sources: sources,
            el: document.getElementById("brand-6-env")
        }));
        // Sharp
        var app7 = apps.push(new Hub({
            sdk: sdk,
            collection: {
                siteId: "320568",
                articleId: "brands_sharp"
            },
            sources: sources,
            el: document.getElementById("brand-7-env")
        }));
        // Lenovo
        var app8 = apps.push(new Hub({
            sdk: sdk,
            collection: {
                siteId: "320568",
                articleId: "brands_lenovo"
            },
            sources: sources,
            el: document.getElementById("brand-8-env")
        }));
        // Qualcomm
        var app9 = apps.push(new Hub({
            sdk: sdk,
            collection: {
                siteId: "320568",
                articleId: "brands_qualcomm"
            },
            sources: sources,
            el: document.getElementById("brand-9-env")
        }));
        // Nvidia
        var app10 = apps.push(new Hub({
            sdk: sdk,
            collection: {
                siteId: "320568",
                articleId: "brands_nvidia"
            },
            sources: sources,
            el: document.getElementById("brand-10-env")
        }));
        // Intel
        var app11 = apps.push(new Hub({
            sdk: sdk,
            collection: {
                siteId: "320568",
                articleId: "brands_intel"
            },
            sources: sources,
            el: document.getElementById("brand-11-env")
        }));
        // Cisco
        var app12 = apps.push(new Hub({
            sdk: sdk,
            collection: {
                siteId: "320568",
                articleId: "brands_cisco"
            },
            sources: sources,
            el: document.getElementById("brand-12-env")
        }));
        // Ford
        var app13 = apps.push(new Hub({
            sdk: sdk,
            collection: {
                siteId: "320568",
                articleId: "brands_ford"
            },
            sources: sources,
            el: document.getElementById("brand-13-env")
        }));

        var col_width = 307;
        var viewport_width = $(window).width();
        $('.deck-columns').css('width', ((apps.length) * col_width) + viewport_width - 75);
    }
});

console.log("Brands loaded");
});
