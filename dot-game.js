var countdown = 2000;
var canvas1 = document.getElementById("dot-game");
canvas1.width = 500;
canvas1.height = 500;
var ctx = canvas1.getContext("2d");


ctx.beginPath();
ctx.arc(randX(), randY(), 25, 0, Math.PI * 2, true);
ctx.fillStyle = "#555555";
ctx.fill();
ctx.stroke();


function drawDot(countdown) {
	ctx.clearRect(0, 0, 500, 500);
	ctx.beginPath();
	ctx.arc(randX(), randY(), 25, 0, Math.PI * 2, true);
	ctx.fillStyle = "#555555";
	ctx.fill();
	ctx.stroke();
	countdown = countdown - 200;
}

window.clearInterval();
window.setInterval(drawDot, countdown);

//************random X, Y coordinate generator
function randX() {

	var randNumX = Math.random() * 400 + 100;

	return randNumX;
}

function randY() {

	var randNumY = Math.random() * 400 + 100;
	return randNumY;
}