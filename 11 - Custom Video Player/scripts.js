// Алгоритм по видосу. Функции старался реализовывать сам.

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const controls = player.querySelector('.player__controls');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const playPause = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const fullScreenButton = player.querySelector('[data-fullscreen]');
const outside = document.querySelector('.outside');
const ranges = player.querySelectorAll('.player__slider');

const togglePlayPause = () => {
	video.paused ? video.play() : video.pause();
};
// video.addEventListener('click', (evt) => {
// 	console.log(evt.target.dataset)
// 	if (evt.target.dataset.toggle) {
// 		video.paused ? video.play() : video.pause();
// 	}
// 	// methods[evt.target.dataset.move]()
// });

function updateButton() {
	let icon = this.paused ? '►' : '||';
	console.log(icon)
	playPause.textContent = icon;
}

function skip() {
	video.currentTime += +this.dataset.skip;
}

function handleRange() {
	video[this.name] = this.value;
}

function scrub(evt) {
	const scrubTime = (evt.offsetX / progress.offsetWidth) * video.duration;
	video.currentTime = scrubTime;
}



function toggleFullScreen() {
	document.querySelector('body').classList.toggle('player--full');
	outside.classList.toggle('active')
}

video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('click', togglePlayPause);
video.addEventListener('timeupdate', handleProgress);


playPause.addEventListener('click', togglePlayPause);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRange));
ranges.forEach(range => range.addEventListener('mousemove', handleRange));

let mousedown = false;

progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', evt => mousedown && scrub(evt));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

fullScreenButton.addEventListener('click', toggleFullScreen);
outside.addEventListener('click', toggleFullScreen);



function handleProgress() {
	const percent = video.currentTime / (video.duration * .01);
	progressBar.style.flexBasis = percent + '%';
	// console.log(progressBar.style.flexBasis = percent + '%');
}


console.clear();




// let methods = {
// 	toggle() {
// 		video.paused ? video.play() : video.pause();
// 	},
// 	skip() {

// 	}
// }