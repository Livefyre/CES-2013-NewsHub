// This will run on the Brands page
require(['./config'], function () {

require(['fyre', 'streamhub-backbone', 'jquery'], function (fyre, Hub, $) {
    var apps = [];
	fyre.conv.load({}, [{
		network: 'livefyre.com',
		app: 'sdk'
	}], loadApp);
	function loadApp (sdk) {
        // Samsung
		var app0 = apps.push(new Hub({
            sdk: sdk,
            collection: {
                siteId: "303818",
                articleId: "51"
            },
            el: document.getElementById("brand-0-env")
	    }));
        // Apple
	    var app1 = apps.push(new Hub({
            sdk: sdk,
            collection: {
				siteId: "303818",
                articleId: "49"
            },
            el: document.getElementById("brand-1-env")
	    }));
        // Microsoft
	    var app2 = apps.push(new Hub({
            sdk: sdk,
            collection: {
                siteId: "303818",
                articleId: "56"
            },
            el: document.getElementById("brand-2-env")
        }));
        // Canonical
        var app3 = apps.push(new Hub({
            sdk: sdk,
            collection: {
                siteId: "303818",
                articleId: "29"
            },
            el: document.getElementById("brand-3-env")
        }));
        // Sony
        var app4 = apps.push(new Hub({
            sdk: sdk,
            collection: {
                siteId: "303818",
                articleId: "8"
            },
            el: document.getElementById("brand-4-env")
        }));
        // Google
        var app5 = apps.push(new Hub({
            sdk: sdk,
            collection: {
                siteId: "303818",
                articleId: "60"
            },
            el: document.getElementById("brand-5-env")
        }));
        // LG
        var app6 = apps.push(new Hub({
            sdk: sdk,
            collection: {
                siteId: "303818",
                articleId: "58"
            },
            el: document.getElementById("brand-6-env")
        }));
        $('.deck-columns').css('width', apps.length*307);
	}
});

console.log("Brands loaded");
});