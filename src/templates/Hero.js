define([
'mustache', 'jquery', 'text!CES/templates/Hero.html'], function (
Mustache, $, HeroHtml) {
	var	HeroTemplate = Mustache.compile(HeroHtml);

	var classNames = ['blue', 'turquoise', 'green', 'yellow'],
		colorIndex = 0;
	
	var Hero = function (data) {
		var bodyHtml = data.bodyHtml,
			$bodyHtml = $('<div>'+bodyHtml+'</div>'),
			heroData = _getHeroDataFromHtml($bodyHtml);
		data.heroContext = heroData;
		return HeroTemplate(data);
	}

	function _getHeroDataFromHtml ($bodyHtml) {
		var $paragraphs = $bodyHtml.find('> p');
		if ($paragraphs.length===1) {
			console.log("Getting hero data from one paragraph (anchors)")
			return _getHeroDataFromAnchors($bodyHtml);
		} else {
			console.log("Getting Hero data from paragraphs");
			return _getHeroDataFromParagraphs($bodyHtml)
		}
	}

	function _getHeroDataFromParagraphs ($bodyHtml) {
		var url = $bodyHtml.find('p:first-child').text().trim(),
			image = $bodyHtml.find('p:nth-child(2) a').attr('href').trim(),
			source = $bodyHtml.find('p:nth-child(3)').text().trim(),
			headline = $bodyHtml.find('p:nth-child(4)').text().trim(),
			snippet = $bodyHtml.find('p:nth-child(5)').text().trim();
			hc = {
				url: url,
				image: image,
				source: source,
				headline: headline,
				snippet: snippet
			};
		return hc;
	}
	/*
	 * Hero data is hidden in something like
	 * "<p><a href="http://mashable.com/2013/01/08/panasonic-20-inch-tablet/" target="_blank" rel="nofollow">http://mashable.com/2013/01/08/panasonic-20-inch-tablet/</a><br><br><a href="http://rack.2.mshcdn.com/media/ZgkyMDEzLzAxLzA4LzU0L0lNR18wNzI0MS5jMjRkZi5qcGcKcAl0aHVtYgk5NTB4NTM0IwplCWpwZw/4ddc4a9f/582/IMG_07241.jpg" target="_blank" rel="nofollow">http://rack.2.mshcdn.com/media/ZgkyMDEzLzAxLzA4LzU0L0lNR18wNzI0MS5jMjRkZi5qcGcKcAl0aHVtYgk5NTB4NTM0IwplCWpwZw/4ddc4a9f/582/IMG_07241.jpg</a><br><br>Mashable<br><br>Panasonic Reveals Enormous 20-Inch 4K Tablet<br><br>At a keynote speech Tuesday morning at CES 2013, Panasonic showed off the world's first 20-inch 4K tablet.</p>"
	 */
	function _getHeroDataFromAnchors ($bodyHtml) {
		var $anchors = $bodyHtml.find('a'),
			urlAnchor = $anchors.get(0),
			imageAnchor = $anchors.get(1),
			texts = _($bodyHtml.find('p').html().split('<br>')).compact(),
			textsLen = texts.length;
			data = {};
		data.url = urlAnchor && urlAnchor.href;
		data.image = imageAnchor && imageAnchor.href;
		data.source = texts[textsLen-3];
		data.headline = texts[textsLen-2];
		data.snippet = texts[textsLen-1];
		return data;
	}

	function outerHtml ($el) {
    	return $("<p>").append($el.eq(0).clone()).html();
	};

	return Hero;
})
