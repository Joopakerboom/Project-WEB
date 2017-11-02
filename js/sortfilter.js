/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var section = document.querySelector('form.sortfilter'); 
var button = document.getElementById("sortfilterbutton");
var closeButton = document.getElementById("closebutton");

var reveal = function () {
	section.classList.toggle('sortfilteractive');
};

button.addEventListener('click', reveal);
closeButton.addEventListener('click', reveal);
