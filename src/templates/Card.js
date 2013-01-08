define([
'mustache', 'jquery', 'text!CES/templates/Home/Content.html', 'text!CES/templates/Home/Instagram.html'], function (
Mustache, $, ContentHtml, InstagramHtml) {
	var	ContentTemplate = Mustache.compile(ContentHtml),
		InstagramTemplate = Mustache.compile(InstagramHtml);

	var classNames = ['blue', 'turquoise', 'green', 'yellow'],
		colorIndex = 0;
	
	var Card = function (data) {
		var $el = $(ContentTemplate(data));
		// Rainbow colors
		$el.addClass(classNames[colorIndex++%classNames.length]);
		return outerHtml($el);
	}

	function outerHtml ($el) {
    	return $("<p>").append($el.eq(0).clone()).html();
	};

	return Card;
})