// This will run on the Brands page
require(['./config'], function () {

require(['fyret402', 'streamhub-backbone', 'jquery', 'mustache', 'text!../src/templates/Instagram.html'],
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
        // Samsung
		var app0 = apps.push(new Hub({
            sdk: sdk,
            collection: {
                siteId: "303818",
                articleId: "51"
            },
            sources: sources,
            el: document.getElementById("brand-0-env")
	    }));
        // Google
	    var app1 = apps.push(new Hub({
            sdk: sdk,
            collection: {
				siteId: "303818",
                articleId: "60"
            },
            sources: sources,
            el: document.getElementById("brand-1-env")
	    }));
        // Microsoft
	    var app2 = apps.push(new Hub({
            sdk: sdk,
            collection: {
                siteId: "303818",
                articleId: "56"
            },
            sources: sources,
            el: document.getElementById("brand-2-env")
        }));
        // Canonical
        var app3 = apps.push(new Hub({
            sdk: sdk,
            collection: {
                siteId: "303818",
                articleId: "29"
            },
            sources: sources,
            el: document.getElementById("brand-3-env")
        }));
        // Sony
        var app4 = apps.push(new Hub({
            sdk: sdk,
            collection: {
                siteId: "303818",
                articleId: "8"
            },
            sources: sources,
            el: document.getElementById("brand-4-env")
        }));
        // Apple
        var app5 = apps.push(new Hub({
            sdk: sdk,
            collection: {
                siteId: "303818",
                articleId: "49"
            },
            sources: sources,
            el: document.getElementById("brand-5-env")
        }));
        // LG
        var app6 = apps.push(new Hub({
            sdk: sdk,
            collection: {
                siteId: "303818",
                articleId: "58"
            },
            sources: sources,
            el: document.getElementById("brand-6-env")
        }));
        var col_width = 307;
        var viewport_width = $(window).width();
        $('.deck-columns').css('width', ((apps.length-1) * col_width) + viewport_width - 75);
	}
});

console.log("Brands loaded");
});
