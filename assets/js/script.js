var slideItem = 0;
window.onload = function () {
	setInterval(passarSlide, 3500);

	var slidewidth = document.getElementById('slideshow').offsetWidth;
	var objs = document.getElementsByClassName('slide');
	for (var i = 0; i < objs.length; i++) {
		objs[i].style.width = slidewidth + 'px';
	}
};
function passarSlide() {
	var slidewidth = document.getElementById('slideshow').offsetWidth;

	if (slideItem >= 3) {
		slideItem = 0;
	} else {
		slideItem++;
	}

	document.getElementsByClassName('slideshowarea')[0].style.marginLeft = '-' + slidewidth * slideItem + 'px';
}
function mudarSlide(pos) {
	slideItem = pos;
	var slidewidth = document.getElementById('slideshow').offsetWidth;
	document.getElementsByClassName('slideshowarea')[0].style.marginLeft = '-' + slidewidth * slideItem + 'px';

	document.getElementsByClassName('bolinha')[0].style.background = 'red'; //Procurar um jeito de mudar de cor a bolinha assim que o banner trocar automatico e com o clique
}

function toggleMenu() {
	var menu = document.getElementById('menu');

	if (menu.style.display == 'none' || menu.style.display == '') {
		menu.style.display = 'block';
	} else {
		menu.style.display = 'none';
	}
}
