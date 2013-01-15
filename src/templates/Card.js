define([
'mustache', 'jquery', 'text!CES/templates/Home/Content.html', 'text!CES/templates/Home/Image.html'], function (
Mustache, $, ContentHtml, ImageHtml) {
    var ContentTemplate = Mustache.compile(ContentHtml),
        ImageTemplate = Mustache.compile(ImageHtml);

    var classNames = ['blue', 'turquoise', 'green', 'yellow'],
        colorIndex = 0;
    
    var Card = function (data) {
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
        }
    };

    function outerHtml ($el) {
        return $("<p>").append($el.eq(0).clone()).html();
    }

    return Card;
});