define([
'mustache', 'jquery', 'text!CES/templates/Hero.html'], function (
Mustache, $, HeroHtml) {
	var	HeroTemplate = Mustache.compile(HeroHtml);
	console.log("Built HeroTemplate", HeroTemplate)

	var classNames = ['blue', 'turquoise', 'green', 'yellow'],
		colorIndex = 0;
	
	var Hero = function (data) {
		var bodyHtml = data.bodyHtml,
			$bodyHtml = $('<div>'+bodyHtml+'</div>')
		var url = $bodyHtml.find('p:first-child').text(),
			image = $bodyHtml.find('p:nth-child(2) a').attr('href'),
			source = $bodyHtml.find('p:nth-child(3)').text()
			headline = $bodyHtml.find('p:nth-child(4)').text(),
			snippet = $bodyHtml.find('p:nth-child(5)').text()
			hc = {
				url: url,
				image: image,
				source: source,
				headline: headline,
				snippet: snippet
			};
		data.heroContext = hc;
		console.log("HeroTemplate", HeroHtml, HeroTemplate, data);
		return HeroTemplate(data);
		/*
		if (data.attachments && data.attachments.length>0) {
			// Use Image template
			console.log("There are attachments in this card. You better see an image");
			return ImageTemplate(data);
		} else {
			// Use colorful card
			var $el = $(ContentTemplate(data));
			// Rainbow colors
			$el.addClass(classNames[colorIndex++%classNames.length]);
			return outerHtml($el);
		}*/
	}

	function outerHtml ($el) {
    	return $("<p>").append($el.eq(0).clone()).html();
	};

	return Hero;
})