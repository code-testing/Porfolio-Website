
const myHeading = document.querySelector('h3');
myHeading.textContent = "THIS TEXT CAN BE FADED BY A CLICK OF A BUTTON";
var val = 1.0;
function fadeFunction() {

	document.getElementById("js-heading").style.opacity = val;
	if (val <= 0) {
		val = 0;
	} else {
		val = val / 2;
	}
}

function unfadeFunction() {
	document.getElementById("js-heading").style.opacity = val;
	if (val >= 1) {
		val = 1.0;
	} else {
		val = val * 2;
	}
}

//Canvas practice
var canvas = document.getElementById("prac-canvas");
canvas.width = 500;
canvas.height = 500;
var ctx1 = canvas.getContext("2d");
var ctx2 = canvas.getContext("2d");
var ctx3 = canvas.getContext("2d");
var ctx4 = canvas.getContext("2d");
var ctx5 = canvas.getContext("2d");
ctx1.beginPath();
ctx1.arc(randX(), randY(), 25, 0, Math.PI * 2, true);
ctx1.fillStyle = "#000000";
ctx1.fill();
ctx1.stroke();

ctx2.beginPath();
ctx2.arc(randX(), randY(), 25, 0, Math.PI * 2, true);
ctx2.fillStyle = "#ff00ff";
ctx2.fill();
ctx2.stroke();

ctx3.beginPath();
ctx3.arc(randX(), randY(), 25, 0, Math.PI * 2, true);
ctx3.fillStyle = "#ffaaff";
ctx3.fill();
ctx3.stroke();

ctx4.beginPath();
ctx4.arc(randX(), randY(), 25, 0, Math.PI * 2, true);
ctx4.fillStyle = "#3300aa";
ctx4.fill();
ctx4.stroke();

ctx5.beginPath();
ctx5.arc(randX(), randY(), 25, 0, Math.PI * 2, true);
ctx5.fillStyle = "#c2aabc";
ctx5.fill();
ctx5.stroke();

//intro text fade in
var opacity = 0;
var IntervalID = 0;
window.onload = textFadeIn;

function textFadeIn() {
	setInterval(showText, 200);
}

function showText() {

	var introText1 = document.getElementById("intro-text1");
	var introText2 = document.getElementById("intro-text2");
	var introText3 = document.getElementById("intro-text3");
	var introText4 = document.getElementById("intro-text4");
	if (opacity < 1) {
		opacity = opacity + 0.1;
		introText1.style.opacity = opacity;

		introText2.style.opacity = opacity;

		introText3.style.opacity = opacity;

		introText4.style.opacity = opacity;
	} else {
		clearInterval(IntervalID);
	}
}


//************random X, Y coordinate generator
function randX() {

	var randNumX = Math.random() * 400 + 100;

	return randNumX;
}

function randY() {

	var randNumY = Math.random() * 400 + 100;

	return randNumY;
}
