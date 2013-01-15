# Livefyre CES 2013 NewsHub

The [Livefyre CES 2013 NewsHub](http://ces.livefyre.com/) curates social Content from around the web so you can keep track of all the new electronics from your favorite brands.

![CES 2013 NewsHub Screenshot](http://d.pr/i/71lK+)

[CES 2103 NewsHub](http://ces.livefyre.com/) is powered by [StreamHub-Backbone](http://gobengo.github.com/streamhub-backbone/), which binds [Livefyre StreamHub](http://www.livefyre.com/streamhub/) with [Backbone.js](http://backbonejs.org/) so you can make amazing Content experiences like feeds, media walls, and slideshows.

This NewsHub uses the following apps:

* [StreamHub-Backbone/views/FeedView](https://github.com/gobengo/streamhub-backbone/blob/master/views/FeedView.js) - Included with StreamHub-Backbone, this displays a simple feed of Content and is used in NewsHub on the Brands and Products pages
* [StreamHub-Isotope](https://github.com/gobengo/streamhub-isotope) - Uses the [jQuery Isotope](https://github.com/desandro/isotope) plugin to lay out Content for a tiled display
* [StreamHub-SlidesJS](https://github.com/gobengo/streamhub-slidesjs) - displays Content in a slideshow using [SlidesJS](http://slidesjs.com/)

## Documentation</h1>

You may be wondering how _you_ can build a NewsHub. The GitHub Page for this repository includes [annotated source code](http://livefyre.github.com/CES-2013-NewsHub/docs) that describes step-by-step the code that powers the 2013 CES NewsHub

* [Media Wall](http://livefyre.github.com/CES-2013-NewsHub/docs/News.html)
* [Brands](http://livefyre.github.com/CES-2013-NewsHub/docs/Brands.html)
* [Products](http://livefyre.github.com/CES-2013-NewsHub/docs/Products.html)
* [News](http://livefyre.github.com/CES-2013-NewsHub/docs/News.html)
	* [Engadget News](http://livefyre.github.com/CES-2013-NewsHub/docs/Media.html)
	* [Fox News News](http://livefyre.github.com/CES-2013-NewsHub/docs/Media.html)
	* [CNET News](http://livefyre.github.com/CES-2013-NewsHub/docs/Media.html)
	* [Mashable News](http://livefyre.github.com/CES-2013-NewsHub/docs/Media.html)
	* [Techland News](http://livefyre.github.com/CES-2013-NewsHub/docs/Techland.html)
	* [TechCrunch News](http://livefyre.github.com/CES-2013-NewsHub/docs/TechCrunch.html)
	* [Common to all News pages](http://livefyre.github.com/CES-2013-NewsHub/docs/newsCommon.html)
* Templates
	* [Card Template](http://livefyre.github.com/CES-2013-NewsHub/docs/Card.html)
	* [Hero Template](http://livefyre.github.com/CES-2013-NewsHub/docs/Hero.html)
* [config](http://livefyre.github.com/CES-2013-NewsHub/docs/config.html)

## Libraries used

NewsHub (and StreamHub-Backbone) stands on the shoulders of several other great open-source projects:

* [RequireJS](http://requirejs.org/) - An [AMD](http://requirejs.org/docs/whyamd.html) loader so modules can be defined in different files and loaded when needed.
* [Bower](http://twitter.github.com/bower/) - A package manager for the browser. Used to declare and load most dependencies
* [Less](http://lesscss.org/) - A better way to write CSS
* [Backbone.js](http://backbonejs.org/) - A lightweight MVC framework for browser apps
* [jQuery](http://jquery.com/) - a fast and concise JavaScript Library that simplifies HTML document traversing, event handling, animating, and Ajax interactions for rapid web development.

## Running locally

Install npm - https://npmjs.org/doc/install.html

Install [Bower](http://twitter.github.com/bower/)

    npm install bower -g

Then, from the root of this repo, get dependencies for this app

    bower install

You'll need to serve the directory over HTTP for the StreamHub JavaScript SDK to work its magic.

    python -m SimpleHTTPServer 8888
    open http://localhost:8888
