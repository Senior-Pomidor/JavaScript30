const spacingInput = document.querySelector('#spacing');


spacing.addEventListener('change', evt => {
	const sizing = evt.target.dataset.sizing;
	document.documentElement.style.setProperty('--spacing', evt.target.value + sizing);
})