/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/* 1. selecteer elementen met document.querySelector */
var section = document.querySelector('div.dancer'); // first section element
var button = document.getElementById("kak");

var dance = function () {
  /* 3. toggle een class op een element, dit triggert een CSS Transition (zie CSS: section.dance) */
	section.classList.toggle('dancing');
};

/* 2. voeg een event toe aan een element */
button.addEventListener('click', dance);
