// Tipos JavaScript

// Primitivos:

/*
number,
string,
boolean,
null,
undefined,
symbol
*/

// Numbers

const age = 30; // Inteiro
const price = 12.99; // ponto flutuante (float)

// NaN - Not A Number
// Infinity - Infinito

// Number expressions:

console.log(2 + 2); // 4
console.log(4 - 1); // 3
console.log(4 / 2); // 2
console.log(4 * 2); // 8
console.log(5 % 2); // 1 o resto da divisão
console.log(2 ** 2); // 4 Exponeciação

// Assignment Operators

let num = 30;

num += 1; // age = age + 1 ... age++
num -= 1; // age = age - 1
num *= 2; //  age = age * 2
//...

// Expressions

const result = 8 / 5 * 2; // P > E > MD > AS rules

console.log(result);


// String

let space = ' ';
let space1 = " ";
let space3 = ` `; // template literal

let name = 'Matilde';

let greeting = 'Hello, ' + name; // concateno Strings

let greeting2 = `Hello, ${name}`;

console.log(greeting);
console.log(greeting2);

let fruits = `
1-banana
2-maça
3-pera
`;


console.log(fruits);


let fruits2 = '1-banana\n2-maça\n3-pera';

console.log(fruits2);

let authorEscape = "O Autor é o \"Mario vargas Llosa\".";

let author = "O Autor é o 'Mario vargas Llosa'.";

console.log(author);
console.log(author.length); //tamanho de uma string
console.log(author.indexOf('o')); //indice da posição de uma substring
console.log(author[13]);












