/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var audio1 = document.getElementById('sound1');
var audio2 = document.getElementById('sound2');
var button1 = document.getElementById('buttontheme1');
var button2 = document.getElementById('buttontheme2');

function playSound1(){
if (audio1.paused !== true){
    audio1.pause();
    audio2.play();
    }
else{
    audio2.play();
    }
}
function playSound2(){
if (audio2.paused !== true){
    audio2.pause();
    audio1.play();
    }
else{
    audio1.play();
    }
}

button1.addEventListener('click', playSound1);
button2.addEventListener('click', playSound2);