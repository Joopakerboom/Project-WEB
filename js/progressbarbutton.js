/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

// VERANDERING VAN BUTTON

var section = document.querySelector('.bookmark');
var bookmarkActivate = document.getElementById("bookmarkactivate");

var check = function () {
	section.classList.toggle('bookmarkcheck');
};

bookmarkActivate.addEventListener('click', check);