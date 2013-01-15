// # Config
// Tell requirejs where to find dependency packages

require.config({
  // libs live in /lib
  baseUrl: "/lib",
  // Deps will be referred to by the value on the left
  // and can be found at the value on the right
  paths: {
    "CES": "../src",
    jquery: 'jquery/jquery',
    text: 'requirejs-text/text',
    backbone: 'backbone/backbone',
    underscore: 'underscore/underscore',
    mustache: 'mustache/mustache',
    isotope: 'isotope/jquery.isotope',
    slidesjs: 'Slides/source/slides.jquery',
    // Include the StreamHub JavaScript SDKs in here
    fyre: 'http://zor.livefyre.com/wjs/v3.0/javascripts/livefyre',
    // including one from the UAT environment
    fyret402: 'http://zor.t402.livefyre.com/wjs/v3.0.sdk/javascripts/livefyre'
  },
  // Packages are multi-file modules. When loaded, they will
  // execute {location}/main.js
  packages: [{
    name: 'CES',
    location: "../src/"
  },{
    name: 'streamhub-backbone',
    location: 'streamhub-backbone'
  },{
    name: 'streamhub-isotope',
    location: 'streamhub-isotope'
  },{
    name: 'streamhub-slidesjs',
    location: 'streamhub-slidesjs'
  }],
  // For modules that don't use AMD, this tells RequireJS
  // what globals they expose
  shim: {
    backbone: {
        deps: ['underscore', 'jquery'],
        exports: 'Backbone'
    },
    underscore: {
        exports: '_'
    },
    isotope: {
        deps: ['jquery']
    },
    fyre: {
        exports: 'fyre'
    },
    fyret402: {
        exports: 'fyre'
    },
    slidesjs: {
        exports: '$'
    }
  }
});