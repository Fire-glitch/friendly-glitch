var left=0;
function sliderLeft(){
	var polosa = document.getElementById('polosa');
	left=left-128;
	polosa.style.left = left+'px';
}
document.getElementById('slider-left').onclick = sliderLeft();

