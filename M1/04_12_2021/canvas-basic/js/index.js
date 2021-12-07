const canvas = document.getElementById('canvas');

const context = canvas.getContext('2d');

// Rectangule

// context.fillStyle = 'purple';
// context.fillRect(290, 290, 30, 30);

const drawSquare = (positionX, positionY, size, color) => {
  context.fillStyle = color;
  context.fillRect(positionX, positionY, size, size);
};

// context.beginPath();

// context.moveTo(50, 50);
// context.lineTo(250, 50);
// context.stroke();

// context.moveTo(250, 50);
// context.lineTo(250, 100);
// context.stroke();

// context.closePath();

// context.beginPath();

// context.moveTo(75, 50);
// context.lineTo(100, 75);
// context.lineTo(100, 25);
// context.fillStyle = 'green';
// context.fill();

// Arcs

// arc(x, y, radius, starAngle, endAngle, anticlockwise)

// radian = (Math.PI / 180) * degrees

const degreesToRadians = degree => (Math.PI / 180) * degree;


// context.beginPath();
// context.arc(150, 170, 75, 0, degreesToRadians(360));
// context.lineWidth = 20;
// context.strokeStyle = 'green';
// context.stroke();


// context.closePath();


// context.beginPath();
// context.arc(150, 170, 35, degreesToRadians(360 + 30), degreesToRadians(360 - 30));
// context.lineTo(150, 170);
// context.fillStyle = 'red';
// context.fill();


class PacMan {
  constructor(color) {
    this.color = color;
    this.mounth = 'open';
  }

  drawOpenMounth() {
    context.beginPath();
    context.arc(150, 170, 35, degreesToRadians(360 + 30), degreesToRadians(360 - 30));
    context.lineTo(150, 170);
    context.fillStyle = this.color;
    context.fill();
  }

  drawCloseMounth() {
    context.beginPath();
    context.arc(150, 170, 35, 0, degreesToRadians(360));
    context.lineTo(150, 170);
    context.fillStyle = this.color;
    context.fill();
  }

  draw() {
    if (this.mounth === 'open') {
      this.drawOpenMounth();
      this.mounth = 'close';
    } else {
      this.drawCloseMounth();
      this.mounth = 'open';
    }
  }


}


function start () {
  const pacman = new PacMan('#36C797');
  setInterval(() => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    pacman.draw();
  }, 300);
};


//fillText strokeText


context.font = '48px serif';
context.fillText('Hello World', 10, 50);
context.strokeText('Hello World', 10, 100);







