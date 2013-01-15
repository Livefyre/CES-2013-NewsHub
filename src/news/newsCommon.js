// # JavaScript common to all News subpages

// load dependencies
require(['jquery', 'underscore'], function ($, _) {
	// Whenever a .card is clicked on, find a good link in it
	// to send a user to, then send them there in a new window
	$('#main-section').on('click', '.card', function (e) {
		var links = $(this).find('a[href]'),
			withoutHashtags = _(links).filter(_notHashtag);
		if (withoutHashtags.length > 0) links = withoutHashtags;
		if (links.length > 0) {
			var $link = $(links[0]);
			window.open($link.attr('href'), '_blank');
		}
		function _notHashtag (link) {
			if (link.text.substring(0,1)=='#') return false;
			return true;
		}
	});
});
