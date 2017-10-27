/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

//UUR ELEMENT 1

var numberOne = document.getElementById("hour1");
var buttonUpOne = document.getElementById("up1");
var buttonDownOne = document.getElementById("down1");


function optellenHourOne() {
    numberOne.stepUp();
}

function aftellenHourOne() {
    numberOne.stepDown();
}


buttonUpOne.addEventListener('click', optellenHourOne);
buttonDownOne.addEventListener('click', aftellenHourOne);

//UUR ELEMENT 2

var numberTwo = document.getElementById("hour2");
var buttonUpTwo = document.getElementById("up2");
var buttonDownTwo = document.getElementById("down2");


function optellenHourTwo() {
    numberTwo.stepUp();
}

function aftellenHourTwo() {
    numberTwo.stepDown();
}


buttonUpTwo.addEventListener('click', optellenHourTwo);
buttonDownTwo.addEventListener('click', aftellenHourTwo);

//MINUTE ELEMENT 1

var numberThree = document.getElementById("minute1");
var buttonUpThree = document.getElementById("up3");
var buttonDownThree = document.getElementById("down3");


function optellenMinuteOne() {
    numberThree.stepUp();
}

function aftellenMinuteOne() {
    numberThree.stepDown();
}


buttonUpThree.addEventListener('click', optellenMinuteOne);
buttonDownThree.addEventListener('click', aftellenMinuteOne);

//MINUTE ELEMENT 1

var numberFour = document.getElementById("minute2");
var buttonUpFour = document.getElementById("up4");
var buttonDownFour = document.getElementById("down4");


function optellenMinuteTwo() {
    numberFour.stepUp();
}

function aftellenMinuteTwo() {
    numberFour.stepDown();
}


buttonUpFour.addEventListener('click', optellenMinuteTwo);
buttonDownFour.addEventListener('click', aftellenMinuteTwo);

// AM/ PM PICKER

var textArray=['pm', 'am'];
var buttonAm = document.getElementById("AM");
var buttonPm = document.getElementById("PM");
var timeSection = document.getElementById("inputtime");

function AmToPm() {
    var value = textArray.shift();
    textArray.push(value);
    document.getElementById("amorpm").innerHTML=value;
    timeSection.classList.toggle('pmmode');
}

buttonAm.addEventListener('click', AmToPm);
buttonPm.addEventListener('click', AmToPm);
