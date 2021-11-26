const board = [100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10];

class Player {
  constructor(name, color) {
    this.name = name;
    this.color = color;
    this.position = 0;
    this.cash = 1000;
  }

  move() {
    const dice = 1 + Math.floor(6 * Math.random());
    this.position = (this.position + dice) % board.length;
    this.cash += board[this.position];
    if (this.cash <= 0) {
      console.log(`Game over for ${this.name}.`);
    }
  }

  displayInfo() {
    console.log(`${this.name} is at position ${this.position} and has ${this.cash}€`);
  }
}

// Initialization of players


let player1 = new Player('Lucas', 'red');
let player2 = new Player('Juliana', 'blue');
let player3 = new Player('Thais', 'yellow');

// Turn 1

player1.move();
player2.move();
player3.move();

player1.displayInfo();
player2.displayInfo();
player3.displayInfo();

// Turn2
player1.move();
player2.move();
player3.move();

player1.displayInfo();
player2.displayInfo();
player3.displayInfo();
