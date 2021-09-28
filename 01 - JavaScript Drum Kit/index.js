const removePlayingClass = evt => {
	evt.target.classList.remove('playing');
	evt.target.removeEventListener('transitionend', removePlayingClass);
};

const playSound = evt => {
	const key = document.querySelector(`div[data-key="${evt.keyCode}"]`);
	const audio = document.querySelector(`audio[data-key="${evt.keyCode}"]`);

	if (!key || !audio) {
		return;
	}

	key.classList.add('playing');
	key.addEventListener('transitionend', removePlayingClass);
	audio.currentTime = 0;
	audio.play();
};



document.addEventListener('keydown', playSound);