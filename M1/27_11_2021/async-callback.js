// SetTimeOut

let counter = 0;

const callbackFunction = () => {
  console.log(counter);

  let timeOutId = setTimeout(callbackFunction, 1000);

  counter += 1;

  if (counter > 10) {
    clearTimeout(timeOutId);
    console.log('fim da contagem');
  }
}

// const timeOutId = setTimeout(callbackFunction, 1000);

// clearTimeout(timeOutId);

// setInterval 
let i  = 0
const intervalId = setInterval(() => {
  console.log(i);
  i += 1;
  if (i > 10) {
    clearInterval(intervalId);
  }
}, 1000) ;
