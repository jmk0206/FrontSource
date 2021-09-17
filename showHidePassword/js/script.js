const password = document.getElementById('password');
const eyesOn = document.getElementById('eyesOn');
const eyesOff = document.getElementById('eyesOff');

function showHide() {
	if(password.type === 'password') {
		password.setAttribute('type', 'text');
		eyesOn.classList.add('off');
		eyesOff.classList.remove('off');
		
	} else {
			password.setAttribute('type', 'password');
			eyesOn.classList.remove('off');
			eyesOff.classList.add('off');
	}
}