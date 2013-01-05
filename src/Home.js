// This will run on the index (Home) page
require(['./config'],
function (CES, $) {

//Do something
require(['jquery'], function ($) {
$('h1').html('Go StreamHub!')
})

console.log("Home loaded");
});