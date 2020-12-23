const myHeading = document.querySelector('h3');
myHeading.textContent = "THIS TEXT CAN BE FADED BY A CLICK OF A BUTTON";
var val = 1.0;
function fadeFunction() {
	
	document.getElementById("js-heading").style.opacity = val;
	if(val <= 0) {
	val = 0;
	}else{
	val = val/2;
	}
}

function unfadeFunction() {
	document.getElementById("js-heading").style.opacity = val;
	if(val >= 1) {
	val = 1.0;
	}else{
	val = val*2;
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
ctx1.arc(150, 150, 25, 0, Math.PI * 2, true);
ctx1.fillStyle = "#000000";
ctx1.fill();
ctx1.stroke();

ctx2.beginPath();
ctx2.arc(250, 300, 25, 0, Math.PI * 2, true);
ctx2.fillStyle = "#ff00ff";
ctx2.fill();
ctx2.stroke();

ctx3.beginPath();
ctx3.arc(450, 200, 25, 0, Math.PI * 2, true);
ctx3.fillStyle = "#ffaaff";
ctx3.fill();
ctx3.stroke();

ctx4.beginPath();
ctx4.arc(100, 375, 25, 0, Math.PI * 2, true);
ctx4.fillStyle = "#3300aa";
ctx4.fill();
ctx4.stroke();

ctx5.beginPath();
ctx5.arc(275, 400, 25, 0, Math.PI * 2, true);
ctx5.fillStyle = "#c2aabc";
ctx5.fill();
ctx5.stroke();
