// This will run on every page
console.log("Configuring requireJS");
require.config({
  baseUrl: "/lib",
  paths: {
    "CES": "../src",
    jquery: 'jquery/jquery',
    text: 'requirejs-text/text',
    backbone: 'backbone/backbone',
    underscore: 'underscore/underscore',
    mustache: 'mustache/mustache',
    isotope: 'isotope/jquery.isotope',
    slides: 'slides.jquery/slides.jquery',
    fyre: 'http://zor.livefyre.com/wjs/v3.0/javascripts/livefyre',
    fyret402: 'http://zor.t402.livefyre.com/wjs/v3.0.sdk/javascripts/livefyre'
  },
  packages: [{
    name: 'CES',
    location: "../src/"
  },{
    name: 'streamhub-backbone',
    location: 'streamhub-backbone'
  },{
    name: 'streamhub-isotope',
    location: 'streamhub-isotope'
  }],
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
    slides: {
        exports: '$'
    }
  }
});