const people = [
  "Mau, ddsa",
  "Mau, ddsb",
  "Mau, ddsc",
  "Mau, ddsd",
  "Mau, ddsf",
  "Mau, ddsg",
  "Mau, ddsh",
  "Mau, ddsi",
  "Mau, ddsj",
  "Mau, ddsk",
  "Mau, ddsl",
  "Mau, ddsm",
  "Mau, ddsn",
  "Mau, ddso",
  "Mau, ddsp",
  "Mau, ddsq",
  "Mau, ddsr",
  "Mau, ddss",
  "Mau, ddst",
];

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Johannes", last: "Kepler", year: 1867, passed: 1934 },
  { first: "Nicolaus", last: "Copernicus", year: 1571, passed: 1630 },
  { first: "Max", last: "", year: 1473, passed: 1543 },
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500s
const inventorsFromThe1500 = inventors.filter((inventor) => {
  if (inventor.year >= 1500 && inventor.year < 1600) {
    return true;
  }
});
console.table(inventorsFromThe1500);

//Array.prototype.map
// 2. Give us an array of the inventory first and last names

const allNames = inventors.map((inventor) => {
  inventor.first + "" + inventor.last;
});
console.log(allNames);

//Array.prototype.sort
// 3. Sort the inventors by birthdate, oldest to youngest
const elderlyInventors = inventors.sort(function (a, b) {
  if (a.year > b.year) {
    return 1;
  } else {
    return -1;
  }
});
const ordered = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));
console.log(ordered);

// Array.prototype.reduce
// 4 how many years did all the invetors luve?
const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed + inventor.year);
}, 0);
console.log(totalYears);

// 5. Sort the inventirs by years lived
const oldest = inventors.sort(function (a, b) {
  const lastGuy = a.passed - a.year;
  const newGuy = b.passed - b.year;
  return lastGuy > newGuy ? 1 : -1;
});

console.table(oldest);

//6. Creat a list of boulevards in paris that contain 'de' anywhere in the name
// https://es.wikipedia.org/wiki/Categor%C3%ADa:Bulevares_de_Par%C3%ADs

// const categories = document.querySelector(".mw-category");
// const links = Array.from(categories.querySelectorAll("a"));
// const de = links
//   .map((link) => link.textContent)
//   .filter((streetName) => streetName.includes("de"));

//7. sort exercise
// Sort the people alphabetically by the last name

const alphabeticallyPeople = people.sort((last, next) => {
  const [lastOne, firtsOne] = last.split(", ");
  const [lastTwo, firtsTwo] = next.split(", ");
  return lastOne > lastTwo ? 1 : -1;
});

console.log(alphabeticallyPeople);

//8. Reduce exercise
// Sum up the instances of each of these
const fruits = [
  "bananas",
  "apple",
  "orange",
  "strawberry",
  "grapefruit",
  "berry",
  "platano",
  "tangerine",
  "grapefruit",
  "berry",
  "platano",
  "tangerine",
];

const X = fruits.reduce(function (obj, item) {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});

console.log(X);
