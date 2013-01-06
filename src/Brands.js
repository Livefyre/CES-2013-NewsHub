// This will run on the Brands page
require(['./config'], function () {

require(['fyre', 'streamhub-backbone', 'jquery'], function (fyre, Hub, $) {
    var apps = [];
	fyre.conv.load({}, [{
		network: 'livefyre.com',
		app: 'sdk'
	}], loadApp);
	function loadApp (sdk) {
		var app0 = apps.push(new Hub({
            sdk: sdk,
            collection: {
                siteId: "303818",
                articleId: "51"
            },
            el: document.getElementById("brand-0-env")
	    }));
	    var app1 = apps.push(new Hub({
            sdk: sdk,
            collection: {
				siteId: "303818",
                articleId: "2"
            },
            el: document.getElementById("brand-1-env")
	    }));
	    var app2 = apps.push(new Hub({
            sdk: sdk,
            collection: {
                siteId: "303818",
                articleId: "26"
            },
            el: document.getElementById("brand-2-env")
        }));
        var app3 = apps.push(new Hub({
            sdk: sdk,
            collection: {
                siteId: "303818",
                articleId: "29"
            },
            el: document.getElementById("brand-3-env")
        }));
        var app4 = apps.push(new Hub({
            sdk: sdk,
            collection: {
                siteId: "303818",
                articleId: "8"
            },
            el: document.getElementById("brand-4-env")
        }));
        $('.deck-columns').css('width', apps.length*307);
	}
});

console.log("Brands loaded");
});