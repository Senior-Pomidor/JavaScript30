// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

const filteredByYear = inventors.filter(person => {
	return (1500 <= person.year) && (person.year <= 1600);
});
console.log('filteredByYear: ');
console.log(filteredByYear);


// Array.prototype.map()
// 2. Give us an array of the inventors first and last names

const names = inventors.map(inventor => inventor.first + ' ' + inventor.last);
console.log('names: ' + names);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

const sortedByBirthDate = inventors.sort((a, b) => {
	return b.year - a.year;
});
console.log('sortedByBirthDate: ', sortedByBirthDate);


// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?

const together = inventors.reduce((summYears, inventor) => {
	return summYears += (inventor.passed - inventor.year);
}, 0);
console.log('together: ' + together);


// 5. Sort the inventors by years lived
const sortedByYearsLived = inventors.sort((a, b) => {
	return (a.passed - a.year) - (b.passed - b.year);
});
console.log('sortedByYearsLived: ');
console.log(sortedByYearsLived);
sortedByYearsLived.forEach(person => console.log(person.passed - person.year));


// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const category = document.querySelector('.mw-category');
// const links = [...category.querySelectorAll('a')];

// const containDe = linksText.filter(link => link.text.toLowerCase().includes('de'));



// 7. sort Exercise
// Sort the people alphabetically by last name
const sortedAlphabetically = people.sort((a, b) => {
	const aLast = a.split(', ')[0];
	const bLast = b.split(', ')[0];

		if (aLast < bLast) {
			return -1;
		}
		if (aLast > bLast) {
			return 1;
		}
		return 0;
});
sortedAlphabetically.forEach(person => console.log(person));

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

const sumInstances = data.reduce((sum, item) => {
	if (!sum[item]) {
		sum[item] = 1;
	} else {
		sum[item]++;
	}
	return sum;
}, {});
console.group('sumInstances: ', sumInstances);
