// Objects

const person = {
  name: 'Gabriel',
  age1: 30,
  favoriteMovie: 'The Lobster',
  adress: {
    street: 'Rua Marconia',
    number: 500,
    phones: {
      cel: '11111111111',
      work: '99999999999',
    },
  },
};

// ES5
// let name = person.name;
// let age = person.age;
// let favoriteMovie = person.favoriteMovie;

// ES6

const {
  name,
  age1,
  favoriteMovie: movie,
  country = 'Brasil',
  adress: { street, number },
} = person;

const { 
  adress: {
    phones: {
      cel: celNumber,
    },
  },
} = person;

console.log(`Hello, ${street}`);
console.log(celNumber);


const callMyName = (object) => {
  let { name } = object;
  console.log(name);
}

callMyName(person);

// Arrays

const cities = ['Recife', 'Itupeva', 'Sorocaba', 'Campinas'];

const [, secondCity, , city] = cities;

console.log(secondCity, city);


const exampleFunc = () => {
  return [num => num + 2, 102];
};

const [sum, value] = exampleFunc();

console.log(sum(value));

const campuses = [['Spain', 'Madrid'], ['Brasil', 'São Paulo'], ['Guatemala', 'Antigua']];

const [,, [, campusCity]] = campuses;

console.log(campusCity);


// Spread Operator ...

const reptiles = ['snake', 'lizard', 'alligator', ['Gabriel']];
const mammals = ['puppy', ' kitten', 'bunny'];

const animals = [...reptiles, ...mammals];

const reptiles2 = [...reptiles]; // shallow copy

console.log(animals)

animals[0] = 'cobrinha';

animals[3][0] = 'Marcio';

console.log(reptiles);


function add(...nums) {
  console.log(nums);
  return nums.reduce((acc, num) => acc += num, 0);
}

console.log(add(1, 2, 3, 4, 5, 6));

const customer = {
  name: {
    firstName: 'ivan',
    lastName: 'zoro',
  },
  age: 32,
  preferences: [
    {
      tech: ['cameras', 'smartwatches'],
      books: ['science fiction', 'coding'],
    },
  ],
};

const customer2 = { ...customer };

console.log(customer2);

const {
  name: { firstName, lastName },
  age,
  preferences: [
    { tech, books },
  ],
} = customer;

console.log(firstName, lastName, age, tech, books);