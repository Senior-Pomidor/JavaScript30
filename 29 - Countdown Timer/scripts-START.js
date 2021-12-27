// сам, подсмотрел разделение на отдельные функции отрисовки времени и таймера

const $controls = [...document.querySelectorAll('[data-time]')];
const $displayTimer = document.querySelector('.display__time-left');
const $entTime = document.querySelector('.display__end-time');
const $customForm = document.querySelector('#custom');
let counter = null;

console.log($controls)

const showEndTime = (seconds) => {
	// отображение конца отсчёта
	let timestamp = Date.now() + seconds * 1000;
	let endDate = new Date(timestamp);

	$entTime.textContent = `Be back at ${endDate.getHours()}:${endDate.getMinutes()}:${endDate.getSeconds()}`;
}

const showLeftTime = (seconds) => {
	// отображение оставшегося время
		let mins = Math.floor(seconds / 60);
		let secondsLeft = seconds % 60;
		$displayTimer.textContent = `${mins}:${secondsLeft}`;
}

const timer = (seconds) => {
	clearInterval(counter)
	// отсчитывает время и каждую секунду обновляет вывод

	showLeftTime(seconds)
	showEndTime(seconds)

	counter = setInterval(() => {
		showLeftTime(seconds - 1)
		seconds--
		if (seconds < 0) {
			showLeftTime(0)
			clearInterval(counter)
		}
	}, 1000)
}

const startTimer = (evt) => {
	let seconds = parseInt(evt.target.dataset.time);
	timer(seconds)
}

$controls.forEach(control => control.addEventListener('click', startTimer))
$customForm.addEventListener('submit', evt => {
	evt.preventDefault();
	let seconds = parseFloat(evt.target.minutes.value) * 60;

	if (seconds) { 
		timer(seconds);
	}
	evt.target.minutes.value = ''
})

// АЛГОРИТМ
// нажатие кнопки
// получить время для таймера
// стартануть таймер
// вывести таймер
// вывести время завершения
