// This will run on the Brands page
require(['./config'], function () {

require(['fyre', 'streamhub-backbone'], function (fyre, Hub) {
	fyre.conv.load({}, [{
		network: 'livefyre.com',
		app: 'sdk'
	}], loadApp);
	function loadApp (sdk) {
		var app0 = new Hub({
            sdk: sdk,
            collection: {
                siteId: "303818",
                articleId: "11"
            },
            el: document.getElementById("brand-0-env")
	    });
	    var app1 = new Hub({
            sdk: sdk,
            collection: {
				siteId: "303818",
                articleId: "2"
            },
            el: document.getElementById("brand-1-env")
	    });
	    var app2 = new Hub({
            sdk: sdk,
            collection: {
                siteId: "303818",
                articleId: "26"
            },
            el: document.getElementById("brand-2-env")
        });
        var app3 = new Hub({
            sdk: sdk,
            collection: {
                siteId: "303818",
                articleId: "29"
            },
            el: document.getElementById("brand-3-env")
        });
        var app4 = new Hub({
            sdk: sdk,
            collection: {
                siteId: "303818",
                articleId: "8"
            },
            el: document.getElementById("brand-4-env")
        });
	}
});

console.log("Brands loaded");
});