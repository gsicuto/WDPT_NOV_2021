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

// Statements

// Condicional
// if...else

if (true) {
  // execução se condição for verdadeira
}else if(true) {
  // execução se a primeira condição for falsa e segunda verdadeira
}else {
  // execução se nenuma condição for verdadeira
}

// switch
let expression = 1;

switch (expression) {
  case 1:
    // Execução caso minha expressão seja = a este case
  break;
  case 2:
    // Execução caso minha expressão seja = a este case
  break;
  case 3:
    // Execução caso minha expressão seja = a este case
  break;
  default:
    // Execução caso a expressão não cumpra com nenhum dos cases
}

// Operador ternario

// ?

// /*condição*/ ? /*resultado verdadeiro*/ : /*resultado se falso*/

'Gabriel' ? console.log('true') : console.log('false');


'' && console.log('true');

// Loops and Iterations 

// while
let i = 9;// inicializador

while(i <= 10){ // condição
  console.log(i);
  i += 1  // expressão final
}

// do while

let j = 0;

do {
  console.log(j);
  j += 1;
} while (j <= 10);

// for

// for (inicializador; condição; expressão final)

for (let k = 9; k <= 10; k += 1){
  console.log(k)
};

let word = 'proparoxitona';

for (let y = word.length; y >= 0; y -= 1){
  console.log(word[y]);
};

// for of

// = -> atribuição
// == -> comparação sem tipagem

for(let letter of word){
  if(letter === 'x' ){
    continue;
  }
  console.log(letter.toUpperCase());
}

// break continue

