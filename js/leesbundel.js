/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/


var section = document.querySelector('div.bundelinhoud'); 
var button = document.getElementById("leesbundelbutton");
var closeButton = document.getElementById("closebutton");

var reveal = function () {
	section.classList.toggle('bundelinhoudactive');
};

button.addEventListener('click', reveal);
closeButton.addEventListener('click', reveal);
