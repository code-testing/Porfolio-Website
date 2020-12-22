const myHeading = document.querySelector('h3');
myHeading.textContent = "THIS IS MY JAVASCRIPT TITLE";
myHeading.fadeIn('slow');

/*


function fadeIn(myHeading, display){

	myHeading.opacity = 0;
	myHeading.style.display = display || "block";
	(function fade() {
		var val = parseFloat(myHeading.style.opacity);
		if (!(val +=.1) >= 1)) {
			myHeading.style.opacity = val;
			requestAnimationFrame(fade);
		}
	}
};
*/
