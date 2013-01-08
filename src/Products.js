// This will run on the Products page
require(['./config'], function () {

require(['fyre', 'streamhub-backbone', 'jquery', 'mustache', 'text!../src/templates/Instagram.html'],
function (fyre, Hub, $, Mustache, InstagramHtml) {
    var apps = [];
	fyre.conv.load({}, [{
		network: 'livefyre.com',
		app: 'sdk'
	}], loadApp);
	function loadApp (sdk) {
        var sources = {
            rss: {
                template: function (d) {
                    return Mustache.compile(InstagramHtml)(d);
                }
            }
        }
        // Televisions
		var app0 = apps.push(new Hub({
            sdk: sdk,
            collection: {
                siteId: "303818",
                articleId: "51"
            },
            sources: sources,
            el: document.getElementById("product-0-env")
	    }));
        // Smartphones
	    var app1 = apps.push(new Hub({
            sdk: sdk,
            collection: {
				siteId: "303818",
                articleId: "60"
            },
            sources: sources,
            el: document.getElementById("product-1-env")
	    }));
        // Tablets
	    var app2 = apps.push(new Hub({
            sdk: sdk,
            collection: {
                siteId: "303818",
                articleId: "56"
            },
            sources: sources,
            el: document.getElementById("product-2-env")
        }));
        // Computers
        var app3 = apps.push(new Hub({
            sdk: sdk,
            collection: {
                siteId: "303818",
                articleId: "29"
            },
            sources: sources,
            el: document.getElementById("product-3-env")
        }));
        // Audio
        var app4 = apps.push(new Hub({
            sdk: sdk,
            collection: {
                siteId: "303818",
                articleId: "8"
            },
            sources: sources,
            el: document.getElementById("product-4-env")
        }));
        // Gaming
        var app5 = apps.push(new Hub({
            sdk: sdk,
            collection: {
                siteId: "303818",
                articleId: "49"
            },
            sources: sources,
            el: document.getElementById("product-5-env")
        }));
        // Gadgets
        var app6 = apps.push(new Hub({
            sdk: sdk,
            collection: {
                siteId: "303818",
                articleId: "58"
            },
            sources: sources,
            el: document.getElementById("product-6-env")
        }));
        // Digital Health
        var app7 = apps.push(new Hub({
            sdk: sdk,
            collection: {
                siteId: "303818",
                articleId: "69"
            },
            sources: sources,
            el: document.getElementById("product-7-env")
        }));
        // Home Electronics
        var app8 = apps.push(new Hub({
            sdk: sdk,
            collection: {
                siteId: "303818",
                articleId: "73"
            },
            sources: sources,
            el: document.getElementById("product-8-env")
        }));
        var col_width = 307;
        var viewport_width = $(window).width();
        $('.deck-columns').css('width', ((apps.length-1) * col_width) + viewport_width - 75);
	}
});

console.log("Products loaded");
});
