// This will run on the Products page
require(['./config'], function () {

require(['fyre', 'streamhub-backbone', 'jquery', 'mustache', 'text!../src/templates/Instagram.html','text!../src/templates/Twitter.html'],
function (fyre, Hub, $, Mustache, InstagramHtml, TwitterHtml) {
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
                template: function (d) {
                    return Mustache.compile(TwitterHtml)(d);
                }
            }
        }
        // Televisions
		var app0 = apps.push(new Hub({
            sdk: sdk,
            collection: {
                siteId: "320568",
                articleId: "products_televisions"
            },
            sources: sources,
            el: document.getElementById("product-0-env")
	    }));
        // Smartphones
	    var app1 = apps.push(new Hub({
            sdk: sdk,
            collection: {
				siteId: "320568",
                articleId: "products_smartphones"
            },
            sources: sources,
            el: document.getElementById("product-1-env")
	    }));
        // Tablets
	    var app2 = apps.push(new Hub({
            sdk: sdk,
            collection: {
                siteId: "320568",
                articleId: "products_tablets"
            },
            sources: sources,
            el: document.getElementById("product-2-env")
        }));
        // Computers
        var app3 = apps.push(new Hub({
            sdk: sdk,
            collection: {
                siteId: "320568",
                articleId: "products_computers"
            },
            sources: sources,
            el: document.getElementById("product-3-env")
        }));
        // Audio
        var app4 = apps.push(new Hub({
            sdk: sdk,
            collection: {
                siteId: "320568",
                articleId: "products_audio"
            },
            sources: sources,
            el: document.getElementById("product-4-env")
        }));
        // Gaming
        var app5 = apps.push(new Hub({
            sdk: sdk,
            collection: {
                siteId: "320568",
                articleId: "products_gaming"
            },
            sources: sources,
            el: document.getElementById("product-5-env")
        }));
        // Gadgets
        var app6 = apps.push(new Hub({
            sdk: sdk,
            collection: {
                siteId: "320568",
                articleId: "products_gadgets"
            },
            sources: sources,
            el: document.getElementById("product-6-env")
        }));
        // Digital Health
        var app7 = apps.push(new Hub({
            sdk: sdk,
            collection: {
                siteId: "320568",
                articleId: "products_digital_health"
            },
            sources: sources,
            el: document.getElementById("product-7-env")
        }));
        // Home Electronics
        var app8 = apps.push(new Hub({
            sdk: sdk,
            collection: {
                siteId: "320568",
                articleId: "products_home_electronics"
            },
            sources: sources,
            el: document.getElementById("product-8-env")
        }));
        var col_width = 307;
        var viewport_width = $(window).width();
        $('.deck-columns').css('width', ((apps.length) * col_width) + viewport_width - 75);
	}
});

console.log("Products loaded");
});
