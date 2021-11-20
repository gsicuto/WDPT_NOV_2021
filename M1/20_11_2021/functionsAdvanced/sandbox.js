// Declarative Functions sofrem de hoisting

let result = calcSum(1, 2);

function calcSum (num1, num2) {
  return num1 + num2;
};

// console.log(result);

// function declaration (statement)

// function nomeDaFunção (argumentos){
//   return resultado
// }

// Function Expression


const calcSum2 = function (num1, num2) {
  return num1 + num2
}

result = calcSum2(2, 2);

// console.log(result);

// CallBack

function eatDinner(callBack) {
  setTimeout(function () {
    // console.log('Estou jantando');
    callBack();
  }, 1000);
}

function eatDessert() {
  // console.log('Comendo a sobremesa');
}


eatDinner(eatDessert);

// eatDinner(function () { console.log('Lavar a Louça')});


// 

function doSomethingWithMyName(name, anonFunc) {
  anonFunc(name);
}

doSomethingWithMyName('Rafael', function (str) {
  // console.log(str.split(''));
});

doSomethingWithMyName('mauricio', function (str){
  // console.log(str[0].toUpperCase() + str.slice(1))
});

// Set Timeout

setTimeout(function () {
  // console.log('Fui Executada depois de 2 s')
},2000)


function notifyUser () {
  // console.log('Eu serei executada dentro do Set Timeout')
}

setTimeout(notifyUser, 3000);


// Expression Function

const greeting = function (name) {
  // console.log(`Hello, ${name}`);
}

greeting('Adalberto');

// => Arrow Function Statement

const greeting2 = name => `Hello, ${name}`;

const capitalize = (name, age) => {
  let capitalized = name.toUpperCase();
  return capitalized;
};

const calcSum3 = (num1, num2) => num1 + num2;

const returnObject = () => ({ name: 'Gabriel', age: 30 }); // se o retorno for um objeto


const returnObject2 = () => { return { name: 'Gabriel', age: 30 } }; // se o retorno for um objeto

returnObject();

result = greeting2('Marcio');

result = capitalize('Luana', 33);

result = calcSum3(1, 3);
// console.log(result);

// keyword this , scope

// const person = {
//   name: 'Patricia',
//   age: 18,
//   getOlder: () => {
//     setInterval(() => {
//       // console.log(this)
//       this.age += 1;
//       console.log(this.age);
//     }, 1000);
//   },
// };

// person.getOlder();

// Arguments Object

function printSomenthing() {
  // for (let i = 0; i < arguments.length ; i += 1){
  //   console.log(arguments[i])
  // }
  let args = Array.from(arguments);

  args.forEach(element => console.log(element)); // HighOrder Function
}

printSomenthing('olá', 1, 'Marcio', { name: 'Matilde' }, ['cat', 'mouse']);

const sumAllNumber= function ()  {
  console.log(arguments)
}

sumAllNumber(1, 2, 3, 4);
