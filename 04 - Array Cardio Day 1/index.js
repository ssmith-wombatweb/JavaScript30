// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  {
    first: 'Albert',
    last: 'Einstein',
    year: 1879,
    passed: 1955,
  },
  {
    first: 'Isaac',
    last: 'Newton',
    year: 1643,
    passed: 1727,
  },
  {
    first: 'Galileo',
    last: 'Galilei',
    year: 1564,
    passed: 1642,
  },
  {
    first: 'Marie',
    last: 'Curie',
    year: 1867,
    passed: 1934,
  },
  {
    first: 'Johannes',
    last: 'Kepler',
    year: 1571,
    passed: 1630,
  },
  {
    first: 'Nicolaus',
    last: 'Copernicus',
    year: 1473,
    passed: 1543,
  },
  {
    first: 'Max',
    last: 'Planck',
    year: 1858,
    passed: 1947,
  },
  {
    first: 'Katherine',
    last: 'Blodgett',
    year: 1898,
    passed: 1979,
  },
  {
    first: 'Ada',
    last: 'Lovelace',
    year: 1815,
    passed: 1852,
  },
  {
    first: 'Sarah E.',
    last: 'Goode',
    year: 1855,
    passed: 1905,
  },
  {
    first: 'Lise',
    last: 'Meitner',
    year: 1878,
    passed: 1968,
  },
  {
    first: 'Hanna',
    last: 'Hammarström',
    year: 1829,
    passed: 1909,
  },
];

const people = ['Blake, William', 'Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

const sixteenthCenturyInventors = inventors.filter(({ year }) =>
  year >= 1500 && year < 1600);
console.log('INVENTORS FROM THE SIXTEENTH CENTURY');
console.table(sixteenthCenturyInventors);

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
const inventorNames = inventors.map(({ first, last }) => `${first} ${last}`);
console.log('NAMES OF THE INVENTORS');
console.table(inventorNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const inventorByBirthYear = inventors.sort((a, b) => a.year - b.year);
console.log('INVENTORS SORTED BY BIRTH YEAR');
console.table(inventorByBirthYear);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
const totalInventorAge = inventors.reduce((total, inventor) =>
  (inventor.passed - inventor.year) + total, 0);
console.log('TOTAL AGES OF THE INVENTORS');
console.log(totalInventorAge);

// 5. Sort the inventors by years lived
const inventorByAge = inventors.sort((a, b) =>
  (a.passed - a.year) - (b.passed - b.year));
console.log('INVENTORS BY AGE');
console.table(inventorByAge);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// Done in the console on the page.
// const category = document.querySelector('.mw-category');
// const links = [...category.querySelectorAll('a')];

// const de = links
//   .map(link => link.textContent)
//   .filter(streetName => streetName.includes('de'));

// 7. sort Exercise
// Sort the people alphabetically by last name
const peopleByLastName = people.sort();
console.log('PEOPLE SORTED BY LAST NAME');
console.table(peopleByLastName);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

const instancesOfData = data.reduce((obj, item) => {
  const updatedObj = obj;
  if (!updatedObj[item]) {
    updatedObj[item] = 0;
  }
  updatedObj[item] += 1;
  return updatedObj;
}, {});

console.log('NUMBER OF EACH DATA ITEM');
console.table(instancesOfData);
