//получить стрелки
//вычислить текущее время
//от этого установить положение стрелок
//каждую секунду обновлять время и положение стрелок
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const secondHand = document.querySelector('.second-hand');

const setHandsPosition = () => {
	const date = new Date();

	const seconds = date.getSeconds();
	const minutes = date.getMinutes() + 0;
	const hours = date.getHours();


	secondHand.style.transform = `rotate(${(360 / 60) * seconds + 90}deg)`;
	minHand.style.transform = `rotate(${((360 / 60) * minutes + 90)}deg)`;
	hourHand.style.transform = `rotate(${(360 / 12) * hours + 90 + (360 / 12 / 60) * minutes}deg)`;
}

setHandsPosition();
setInterval(setHandsPosition, 1000);
