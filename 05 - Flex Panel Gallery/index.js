// коллекция инпутов сразу преобр в массив
const inputsArr = [...document.querySelectorAll('input')];

// обновление css переменных в зависимости от типа инпута
const updateStyles = evt => {
	const sizing = evt.target.dataset.sizing || '';
	
	if (evt.target.name === 'spacing') {
		document.documentElement.style.setProperty('--spacing', evt.target.value + sizing);
	} else if (evt.target.name === 'blur') {
		document.documentElement.style.setProperty('--blur', evt.target.value + sizing);
	} else if (evt.target.name === 'base') {
		document.documentElement.style.setProperty('--base-color', evt.target.value);
	} 
}

// добавление обработчиков на изменение ползунков
// mousemove и touchmove для отзывчивости на перемещение ползунков,
// а не только на конечное изменение
inputsArr.forEach($input => {
	$input.addEventListener('change', updateStyles);
	$input.addEventListener('mousemove', updateStyles);
	$input.addEventListener('touchmove', updateStyles);
});






