factory = document.querySelector('.factory');
navbar = document.querySelector('.navbar');
navlist = document.querySelector('.nav-list');
rightnav = document.querySelector('.rightnav');


factory.addEventListener('click', ()=>{
	rightnav.classList.toggle('v-class-resp');
	navlist.classList.toggle('v-class-resp');
	navbar.classList.toggle('h-nav-resp');
});
document.addEventListener("DOMContentLoaded", function() {
	const navbar = document.querySelector('.navbar');
	window.addEventListener('scroll', function() {
		if (window.scrollY > 500) { 
			navbar.classList.add('scrolled');
		} else {
			navbar.classList.remove('scrolled');
		}
	});
});