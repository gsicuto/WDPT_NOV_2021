// Promises -

// Criando uma Promise

const isSweet = food => new Promise((resolve, reject) => {
  if (food === 'Brigadeiro') {
    setTimeout(resolve, 1000, 'É Doce');
  } else {
    reject('Não é doce');
  }
});

// .then .catch;


// const test = isSweet('Brigadiro').then((result) => {
//   console.log(result);
// }).catch(err => console.log(err));

// console.log(test);

// async / await functions

async function async1() {} // async function

const async2 = async () => {
  try {
    const result = await isSweet('Brigadiro');
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// async2();


const pedirPizza = (bairro) => {
  const falling = [false, false, true, true];
  const caiu = falling[Math.floor(Math.random() * falling.length)];
  return new Promise((resolve, reject) => {
    if (bairro !== 'Perdizes') {
      reject('Não entregamos no seu bairro');
    }
    setTimeout(() => {
      if (caiu) {
        reject('O motoboy caiu');
      } else {
        resolve('Sua pizza chegou');
      }
    }, 2000);
  });
};

// console.log(pedirPizza('Perdizes'))

pedirPizza('Perdizes').then((result) => {
  console.log(result);
}).catch(error => console.log(error));

// async await

const async3 = async () => {
  try {
    const result = await pedirPizza('Perdizes');
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

async3();

const p1 = pedirPizza('Perdizes');
const p2 = Promise.resolve(3);
const p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'qualquer coisa');
});
const p4 = isSweet('Brigadeiro');


Promise.all([p1, p2, p3, p4]).then(results => console.log(results)).catch(error => console.log(error));