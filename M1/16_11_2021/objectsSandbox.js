// Objects

let firstObject = {
  key1: "value",
  key2: 'value',
  key3: 'value',
};

// constructor

let secondObject = new Object();

// console.log(typeof secondObject);


let registration = {
  name: 'Gabriel',
  age: 30,
  address: 'Rua 2, número 3',
  phone: '1199999999',
  email: 'gabriel.sicuto@ironhack.com',
  state: 'SP',
  zipCode: '0000-000',
  'name of pet': 'Matilde',
}

console.log(registration.age);

console.log(registration.name.length);

console.log(registration['name of pet']);

let keyValue = 'name';

console.log(registration[keyValue]);

// 

function getAtributeOfRegistration (key) {
  return registration[key];
}

console.log(getAtributeOfRegistration('address'));

// Add Properties on Objects

registration.lastName = 'Sicuto';

registration['city'] = 'São Paulo'

console.log(registration);

// Change Properties on Objects

registration.age = 31;

console.log(registration);

// Operator in

console.log( 'name' in registration);

console.log( 'toString' in registration);

console.log( registration.hasOwnProperty('toString'));

console.log(registration.toString());


// eslint-disable-next-line no-restricted-syntax
for (let key in registration) {
  if (registration[key] === 'Gabriel') {
    console.log(key);
    console.log(registration[key]);
  }
}

console.log(Object.keys(registration)) // listar todas as chaves de um objeto

console.log(Object.values(registration)) // listar todas os valores de um objeto


const person = {
  name: 'Maria',
  age: 40,
}

person.name = 'Ricardo';
person.phone = '01199999999';

// person = {
//   name:'Ricardo'
// }

console.log(person)

// remover atributos:

delete person.phone

console.log(person);

const person2 = {
  name: registration.name,
  age: registration.age,
}

console.log(person2)

console.log(secondObject)

secondObject.key1 = 'value'

console.log(secondObject)