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
