// This will run on the Brands page
require(['./config'], function () {

require(['fyre', 'streamhub-backbone'], function (fyre, Hub) {
	var HUB_NETWORK = 'largetail-0.fyre.co';
	fyre.conv.load({
		network: HUB_NETWORK
	}, [{
		app: 'sdk',
	}], loadApp);
	function loadApp (sdk) {
		var app0 = new Hub({
            sdk: sdk,
            collection: {
                siteId: "303772",
                articleId: "prod0"
            },
            view: {
                defaultAvatarUrl: 'http://placehold.it/48&text=avatar',
            },
            el: document.getElementById("brand-0-env")
	    });
	    var app1 = new Hub({
            sdk: sdk,
            collection: {
				siteId: "303772",
                articleId: "tutorial0"
            },
            view: {
                defaultAvatarUrl: 'http://placehold.it/48&text=avatar',
            },
            el: document.getElementById("brand-1-env")
	    });
	}
});

console.log("Brands loaded");
});