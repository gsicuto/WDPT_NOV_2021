// Scope

// Global


const globalVariable = 'Estou no escopo Global';

function sayHelloFromLocalScope () {
  const hello = 'Hello from functional/local scope';
  console.log(hello);
  function innerFunction() {
    console.log(globalVariable);
  }
  innerFunction();
}

// sayHelloFromLocalScope();

for (let i = 0; i <= 30; i += 1){
   const innerForVariable = 'variavel dentro do for'
  // console.log(`interação ${i}`);
}

// console.log(i);

// Shadowing - Declarar variaveis com mesmo nome em escopos diferentes

let name = 'Gabriel';

if (true) {
  // const name = 'Marcio';
  console.log('inside if statement', name);
  if(true) {
    console.log(name)
  }
}

console.log('out side if statement', name);

// Hoisting


console.log(hoistingVariable);

var hoistingVariable = 'Teste';


