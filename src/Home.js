// This will run on the index (Home) page
require(['./config'],
function () {

//Do something
require(['jquery'], function ($) {
	$('h1').html('Go StreamHub!')
})

console.log("Home loaded");
});