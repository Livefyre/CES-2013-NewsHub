// # Card Template
// A colorful, juicy card of bold Content
// ![Card Screenshot](http://d.pr/i/IvOJ+)

// Dependencies
define([
    'mustache',
    'jquery',
    'text!CES/templates/Home/Content.html',
    'text!CES/templates/Home/Image.html'],
function (Mustache, $, ContentHtml, ImageHtml) {
    // Mustache.compile the Mustache templates into functions
    var ContentTemplate = Mustache.compile(ContentHtml),
        ImageTemplate = Mustache.compile(ImageHtml);

    // Cards will display as one of these colors
    var classNames = ['blue', 'turquoise', 'green', 'yellow'],
        colorIndex = 0;
    
    // ## Card Template function
    // Accept JSON data from Content().toJSON()
    // and return rendered HTML
    var Card = function (data) {
        // If there are attachments on the Content, use a
        // template that shows off the image as a background
        // and masks the bodyHtml Content on top
        if (data.attachments && data.attachments.length>0) {
            console.log("There are attachments in this card. You better see an image");
            return ImageTemplate(data);
        } else {
            // Otherwise just use a colorful background with
            // bold bodyHtml
            var $el = $(ContentTemplate(data));
            // Use a different color for the background each time
            $el.addClass(classNames[colorIndex++%classNames.length]);
            return outerHtml($el);
        }
    };

    // Returns the full HTML representation of an $element
    function outerHtml ($el) {
        return $("<p>").append($el.eq(0).clone()).html();
    }

    return Card;
});