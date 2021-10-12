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
	return (a.passed - a.year) - (b.bassed - b.year);
});
console.log('sortedByYearsLived: ');
console.log(sortedByYearsLived);
sortedByYearsLived.forEach(person => console.log(person.passed - person.year));
