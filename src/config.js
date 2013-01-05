// This will run on every page
console.log("Configuring requireJS");
require.config({
  baseUrl: "lib",
  paths: {
    "CES": "../src/ces",
    jquery: 'jquery/jquery',
    text: 'requirejs-text/text'
  },
  packages: [{
    name: 'CES',
    location: 'src'
  }],
  shim: {
    'backbone': {
        deps: ['underscore', 'jquery'],
        exports: 'Backbone'
    },
    'underscore': {
        exports: '_'
    }
  }
});