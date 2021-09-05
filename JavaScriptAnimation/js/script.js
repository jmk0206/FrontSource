<<<<<<< HEAD
// add active class on click
const dot = document.querySelector('.dot');
const sec = document.querySelector('.sec');
dot.onclick = function() {
	dot.classList.toggle('active');
	sec.classList.toggle('active');
}


document.addEventListener("mousemove", function(e) {
	const dot = document.querySelector('.dot');
	dot.style.left = e.pageX + 'px';
	dot.style.top = e.pageY + 'px';
=======
// add active class on click
const dot = document.querySelector('.dot');
const sec = document.querySelector('.sec');
dot.onclick = function() {
	dot.classList.toggle('active');
	sec.classList.toggle('active');
}


document.addEventListener("mousemove", function(e) {
	const dot = document.querySelector('.dot');
	dot.style.left = e.pageX + 'px';
	dot.style.top = e.pageY + 'px';
>>>>>>> a8eb8e1ce44de9c9c243bb945ce9c5a2a1a36edc
})