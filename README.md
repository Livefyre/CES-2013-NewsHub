The [Livefyre CES 2013 NewsHub](http://ces.livefyre.com/) curates social Content from around the web so you can keep track of all the new electronics from your favorite brands.

![CES 2013 NewsHub Screenshot](http://d.pr/i/71lK+)

[CES 2103 NewsHub](http://ces.livefyre.com/) is powered by [StreamHub-Backbone](http://gobengo.github.com/streamhub-backbone/), which binds [Livefyre StreamHub](http://www.livefyre.com/streamhub/) with [Backbone.js](http://backbonejs.org/) so you can make amazing Content experiences like feeds, media walls, and slideshows.

This NewsHub uses the following apps:

* [StreamHub-Backbone/views/FeedView](https://github.com/gobengo/streamhub-backbone/blob/master/views/FeedView.js) - Included with StreamHub-Backbone, this displays a simple feed of Content and is used in NewsHub on the Brands and Products pages
* [StreamHub-Isotope](https://github.com/gobengo/streamhub-isotope) - Uses the [jQuery Isotope](https://github.com/desandro/isotope) plugin to lay out Content for a tiled display
* [StreamHub-SlidesJS](https://github.com/gobengo/streamhub-slidesjs) - displays Content in a slideshow using [SlidesJS](http://slidesjs.com/)

# Libraries used

NewsHub (and StreamHub-Backbone) stands on the shoulders of several other great open-source projects:

* [RequireJS](http://requirejs.org/) - An [AMD](http://requirejs.org/docs/whyamd.html) loader so modules can be defined in different files and loaded when needed.
* [Bower](http://twitter.github.com/bower/) - A package manager for the browser. Used to declare and load most dependencies
* [Less](http://lesscss.org/) - A better way to write CSS
* [Backbone.js](http://backbonejs.org/) - A lightweight MVC framework for browser apps
* [jQuery](http://jquery.com/) - a fast and concise JavaScript Library that simplifies HTML document traversing, event handling, animating, and Ajax interactions for rapid web development.

# Running locally

Install npm - https://npmjs.org/doc/install.html

Install [Bower](http://twitter.github.com/bower/)

    npm install bower -g

Then, from the root of this repo, get dependencies for this app

    bower install

You'll need to serve the directory over HTTP for the StreamHub JavaScript SDK to work its magic.

    python -m SimpleHTTPServer 8888
    open http://localhost:8888