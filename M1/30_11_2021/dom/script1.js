const generateRandomColor = () => `#${Math.floor(Math.random() * 1677215).toString(16)}`;

const changeBackgroundColor = () => {
  const newColor = generateRandomColor();
  const backgroundElement = document.getElementById('color-overlay');
  backgroundElement.style.backgroundColor = newColor;
};

// function changeText () {

// }

const changeText = () => {
  const textElement = document.getElementById('text-bg');
  if (textElement.innerText === 'RAVE') {
    textElement.innerText = 'OR';
  } else if (textElement.innerText === 'OR') {
    textElement.innerText = 'DIE';
  } else if (textElement.innerText === 'DIE') {
    textElement.innerText = 'RAVE';
  }
};

// let intervalId = setInterval(() => {
//   changeBackgroundColor();
//   changeText();
// }, 1000);
const button = document.getElementById('stop');

button.onclick = () => {
  clearInterval(intervalId);
};

const changeBackgroundItens = () => {
  let itens = document.getElementsByClassName('item');
  let itensArray = [...itens];
  itensArray.forEach((item, index) => {
    if (index % 2 === 0) {
      item.style.backgroundColor = generateRandomColor();
    }
  });
};

const createDiv = () => {
  let divElement = document.createElement('div');
  divElement.innerText = 'Sou a nova Div!';
  divElement.setAttribute('class', 'new-div');
  document.body.appendChild(divElement);
}

const createDiv2 = () => {
  let div = `
  <div class="new-div">
    <div>
      <p>Usando Inner HTML</p>
    </div>
  </div>`;

  document.body.innerHTML += div;
};



