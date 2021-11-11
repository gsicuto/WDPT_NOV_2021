// Bolleans
// True and False / 1 and 0 / yes e no

console.log(1 > 0);
console.log(3 > 8);
console.log(3 > 8 || 5 < 7);  // or
console.log(3 > 8 && 5 < 7);  // and
console.log(!(3 > 8) && 5 < 7);  // not

// Undefined

// Atribuido automática para variáveis declaradas, funções sem resultado de retorno, retornam undefined

let name;

console.log(name);

function printMyName() {
  console.log('Estou dentro do console log da função --->', 'Gabriel');
  // return 'Maria';
}

console.log('Esse é o retorno da função --->', printMyName());

// Null 

// Geralmente utilizado de maneira intencional para mostrar que o valor de algo não foi definido ainda.

let age = null;

console.log(typeof age)

age = 30;
console.log(typeof age)


age = '30';
console.log(typeof age)


// Truthy and Flasy Values

// true --> true
// '0' --> true
// 'false' ---> true
// {} ---> true
// [] ----> true
// new Object() ---> true

// false ---> false
// 0 ---> false
// '' ---> false
// null --> false
// undefined --> false
// NaN ---> false

// Condicionais

if ('') {
  console.log('true');
} else {
  console.log('false');
}

// Primitives Values Immutabilility

let city = 'taubate'; // string is primitive 

console.log(city[0]);

city[0] = 'T';

console.log(city[0]);

city = 'Taubate';





