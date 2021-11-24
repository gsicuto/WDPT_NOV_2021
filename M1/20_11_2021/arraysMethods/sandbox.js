// Array Methods

// forEach
const numbers = [1, 2, 3, 4, 5, 6];

// for (let i = 0; i < numbers.length; i += 1) {
//   numbers[i] = numbers[i] * 2
// }

const resultForEach = numbers.forEach((number, index, array) => console.log(number, index, array)); // não altera o Array Original e não devolve nenhum resultado

console.log(resultForEach); // undefined

// map

const resultMap = numbers.map(number => number * 3);

console.log(resultMap); // retorna um novo array
console.log(numbers);

const names = ['gabrIel', 'anA', 'caRloS', 'VeroNica', 'claudio', 'vitoria', 'vitorio'];

// const capitalize = (string) => {
//  return string[0].toUpperCase() + string.slice(1).toLowerCase()
// }

// const capitalizedNames = names.map(capitalize);

const capitalizedNames = names.map(name => name[0].toUpperCase() + name.slice(1).toLowerCase());


console.log(capitalizedNames);
console.log(names);


// filter

const evenNumbers = numbers.filter(number => number % 2 === 0);

const namesWithMoreThan6Letters = capitalizedNames.filter(name => name.length >= 6);

const evenNumbersGreatterThan10 = resultMap.filter(number => {
  if(number > 10 && number % 2 === 0){
    return true
  }
  return false
})

console.log(evenNumbers);

console.log(namesWithMoreThan6Letters);

console.log(evenNumbersGreatterThan10);


//Reduce

let numbersTotal = 0;

for (let i = 0; i < numbers.length; i += 1) {
  numbersTotal += numbers[i];
}
console.log(numbersTotal);

const sumByReduce = numbers.reduce((accumulador, number) => accumulador + number, 0);

const concatedNames = names.reduce((accumulador, name) => accumulador + name, '');



console.log(sumByReduce);
console.log(concatedNames);


const people = [
  { name: 'Candice', age: 25 },
  { name: 'Tammy', age: 30 },
  { name: 'Allen', age: 49 },
  { name: 'Nettie', age: 21 },
  { name: 'Stuart', age: 17 },
];

const agesAverage = people.reduce((sum, person) => person.age + sum, 0) / people.length;

// const agesAverage = people.reduce((sum, person) => {
//   console.log(sum);
//   return person.age + sum;
// }, 0) / people.length;

console.log(agesAverage);


const product = {
  name: 'AmazonBasics Apple Certified Lightning to USB Cable',
  price: 7.99,
  manufacturer: 'Amazon',
  reviews: [
    { user: 'Pavel Nedved', comments: 'It was really useful, strongly recommended', rate: 4 },
    { user: 'Alvaro Trezeguet', comments: 'It lasted 2 days', rate: 1 },
    { user: 'David Recoba', comments: 'Awesome', rate: 5 },
    { user: 'Jose Romero', comments: 'Good value for money', rate: 4 },
    { user: 'Antonio Cano', comments: 'It broked really fast', rate: 2 },
  ]
};

const ratesAverage = product.reviews.reduce((acc, review) => acc + review.rate, 0) / product.reviews.length;

console.log(ratesAverage);

// Sort - inPlace

const randomNumbers = [10, 2, 198, 23, 13, 18, 65, 2000, 1200];

randomNumbers.sort(); // Ordena pela tabela ASC (string)

console.log(randomNumbers); // não vai ordenar corretamente numeros

// randomNumbers.sort((a, b) => {
//   if (a < b) return -1;
//   if (a > b) return 1;
//   if (a === b) return 0;
// });

randomNumbers.sort((a, b) => a - b);

// randomNumbers.sort((a, b) => {
//   console.log(a, b, a - b);
//   return a - b;
// });

console.log(randomNumbers);

capitalizedNames.sort();
console.log(capitalizedNames);

names.sort((a, b) => a.localeCompare(b));

console.log(names);

// Reverse inPLace

const arr = ['one', 'two', 'three'];

arr.reverse();

console.log(arr);
