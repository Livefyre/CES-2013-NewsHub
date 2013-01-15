// # Hero Template
// The Hero was editorially curated by the Livefyre Marketing team
// Content was submitted via Comment widget in a fancy HTML structure
// such that metadata could be parsed out to populate the Hero parts:
//
// * URL of link
// * Image URL for background image
// * Source of the article
// * Headline to display on Hero
// * snippet of text to preview
//
// ![Hero Screenshot](http://d.pr/i/NmMD+)

// Dependencies
define([
    'mustache',
    'jquery',
    'text!CES/templates/Hero.html'],
function (Mustache, $, HeroHtml) {
    // Mustache.compile the Mustache template into functions
    var HeroTemplate = Mustache.compile(HeroHtml);
    
    // ## Hero Template function
    // Accept JSON data from Content().toJSON()
    // and return rendered HTML
    var Hero = function (data) {
        var bodyHtml = data.bodyHtml,
            $bodyHtml = $('<div>'+bodyHtml+'</div>'),
            // Delegate to this fancy logic to parse out the special
            // hero data
            heroData = _getHeroDataFromHtml($bodyHtml);
        data.heroContext = heroData;
        return HeroTemplate(data);
    };

    // Determine the right way to parse out the data,
    // then parse it
    function _getHeroDataFromHtml ($bodyHtml) {
        var $paragraphs = $bodyHtml.find('> p');
        // Sometimes the HTML will be one big paragraph
        // with some anchors for the URLs
        if ($paragraphs.length===1) {
            console.log("Getting hero data from one paragraph (anchors)");
            return _getHeroDataFromAnchors($bodyHtml);
        } else {
            // Otherwise it will be one paragraph per field of
            // metadata
            console.log("Getting Hero data from paragraphs");
            return _getHeroDataFromParagraphs($bodyHtml);
        }
    }

    // Pluck out the right paragraphs by position
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

    // Parse out the metadata from one paragraph
    /*
     * Hero data is hidden in something like
     * "<p><a href="http://mashable.com/2013/01/08/panasonic-20-inch-tablet/" target="_blank" rel="nofollow">http://mashable.com/2013/01/08/panasonic-20-inch-tablet/</a><br><br><a href="http://rack.2.mshcdn.com/media/ZgkyMDEzLzAxLzA4LzU0L0lNR18wNzI0MS5jMjRkZi5qcGcKcAl0aHVtYgk5NTB4NTM0IwplCWpwZw/4ddc4a9f/582/IMG_07241.jpg" target="_blank" rel="nofollow">http://rack.2.mshcdn.com/media/ZgkyMDEzLzAxLzA4LzU0L0lNR18wNzI0MS5jMjRkZi5qcGcKcAl0aHVtYgk5NTB4NTM0IwplCWpwZw/4ddc4a9f/582/IMG_07241.jpg</a><br><br>Mashable<br><br>Panasonic Reveals Enormous 20-Inch 4K Tablet<br><br>At a keynote speech Tuesday morning at CES 2013, Panasonic showed off the world's first 20-inch 4K tablet.</p>"
     */
    function _getHeroDataFromAnchors ($bodyHtml) {
        // The URLs will be in anchor tags
        var $anchors = $bodyHtml.find('a'),
            urlAnchor = $anchors.get(0),
            imageAnchor = $anchors.get(1),
            // The rest of the text is all separated by brs
            texts = _($bodyHtml.find('p').html().split('<br>')).compact(),
            textsLen = texts.length;
            data = {};
        data.url = urlAnchor && urlAnchor.href;
        data.image = imageAnchor && imageAnchor.href;
        // `source` is third to last line
        data.source = texts[textsLen-3];
        // `headline` is second to last line
        data.headline = texts[textsLen-2];
        // `snippet` is last line
        data.snippet = texts[textsLen-1];
        return data;
    }

    return Hero;
});
