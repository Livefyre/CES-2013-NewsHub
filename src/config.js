// This will run on every page
console.log("Configuring requireJS");
require.config({
  baseUrl: "lib",
  paths: {
    "CES": "../src/ces",
    jquery: 'jquery/jquery',
    text: 'requirejs-text/text',
    backbone: 'backbone/backbone',
    underscore: 'underscore/underscore',
    mustache: 'mustache/mustache',
    fyre: 'streamhub-backbone/test/fixtures/fyre.conv.sdk'
    //fyre: 'http://zor.t402.livefyre.com/wjs/v3.0.sdk/javascripts/livefyre'
  },
  packages: [{
    name: 'streamhub-backbone',
    location: 'streamhub-backbone'
  }],
  shim: {
    'backbone': {
        deps: ['underscore', 'jquery'],
        exports: 'Backbone'
    },
    'underscore': {
        exports: '_'
    },
    'fyre': {
        exports: 'fyre'
    }
  }
});