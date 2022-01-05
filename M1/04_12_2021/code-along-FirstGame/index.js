class Game {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.frames = 0;
    this.obstacles = [];
    this.points = 0;
  }

  start = () => {
    this.canvas.width = 480;
    this.canvas.height = 270;
    this.context = this.canvas.getContext("2d");
    document.getElementById("game-area").appendChild(this.canvas);
    this.interval = setInterval(updateGameArea, 20);
  };

  clear = () => {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };

  stop = () => {
    clearInterval(this.interval);
  };

  score = () => {
    this.points = Math.floor(this.frames / 5);
    this.context.font = "18px serif";
    this.context.textAlign = "end";
    this.context.fillStyle = "black";
    this.context.fillText(`Score: ${this.points}`, this.canvas.width - 30, 50);
  };
}

const game = new Game();

class Component {
  constructor(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.posX = x;
    this.posY = y;
    this.speedX = 0;
    this.speedY = 0;
  }

  draw = () => {
    const ctx = game.context;
    ctx.fillStyle = this.color;
    ctx.fillRect(this.posX, this.posY, this.width, this.height);
  };

  newPos = () => {
    this.posX += this.speedX;
    this.posY += this.speedY;
  };

  left = () => {
    return this.posX;
  };
  right = () => {
    return this.posX + this.width;
  };
  top = () => {
    return this.posY;
  };
  bottom = () => {
    return this.posY + this.height;
  };

  crashWith = (obst) => {
    const freeLeft = this.left() > obst.right();
    const freeRight = this.right() < obst.left();
    const freeTop = this.top() > obst.bottom();
    const freeBottom = this.bottom() < obst.top();
    return !(freeLeft || freeRight || freeTop || freeBottom);
  }
}

class Player {
  constructor(width, height, x, y) {
    this.width = width;
    this.height = height;
    this.posX = x;
    this.posY = y;
    this.speedX = 0;
    this.speedY = 0;
  }

  draw = () => {
    const ctx = game.context;
    // ctx.fillStyle = this.color;
    // ctx.fillRect(this.posX, this.posY, this.width, this.height);
    const tails = new Image();
    tails.src =
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d7a71d57-612b-44bc-a53f-51596fc634cc/d9ids0z-2a5e14d6-e295-413a-a942-0f6dc1f1f80e.png/v1/fill/w_1154,h_692,strp/tails_flying_sprite_remake_by_deawsomeguy534_d9ids0z-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzY4IiwicGF0aCI6IlwvZlwvZDdhNzFkNTctNjEyYi00NGJjLWE1M2YtNTE1OTZmYzYzNGNjXC9kOWlkczB6LTJhNWUxNGQ2LWUyOTUtNDEzYS1hOTQyLTBmNmRjMWYxZjgwZS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.eLQ-TiHkxrG1v7oUxrUVudGHxuQKYcb1W8TjYvcpce4";
    ctx.drawImage(tails, this.posX, this.posY, this.width, this.height);
  };

  newPos = () => {
    this.posX += this.speedX;
    this.posY += this.speedY;
  };

  left = () => {
    return this.posX;
  };
  right = () => {
    return this.posX + this.width;
  };
  top = () => {
    return this.posY;
  };
  bottom = () => {
    return this.posY + this.height;
  };

  crashWith(obst) {
    const freeLeft = this.left() > obst.right();
    const freeRight = this.right() < obst.left();
    const freeTop = this.top() > obst.bottom();
    const freeBottom = this.bottom() < obst.top();
    return !(freeLeft || freeRight || freeTop || freeBottom);
  }
}
const player = new Player(120, 100, 0, game.canvas.height / 2);

function updateGameArea() {
  game.clear();
  player.newPos();
  player.draw();
  updateObstacles();
  game.score();
  checkGameOver();
}

function createObstacle() {
  const posX = game.canvas.width;
  const canvasHeight = game.canvas.height;
  const minHeight = 20;
  const maxHeight = 180;
  const height = Math.floor(
    Math.random() * (maxHeight - minHeight + 1) + minHeight
  );
  const minGap = 50;
  const maxGap = 70;
  const gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
  game.obstacles.push(new Component(10, height, "green", posX, 0));
  game.obstacles.push(
    new Component(10, canvasHeight - height - gap, "green", posX, height + gap)
  );
}

function updateObstacles() {
  game.frames += 1;
  if (game.frames % 120 === 0) {
    createObstacle();
  }
  for (let obstacle of game.obstacles) {
    obstacle.posX -= 1;
    obstacle.draw();
  }
}

function checkGameOver() {
  const crashed = game.obstacles.some((obstacle) => {
    return player.crashWith(obstacle);
  });
  if (crashed) {
    game.stop();
  }
}

game.start();

window.addEventListener("load", () => {
  document.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowLeft":
        player.speedX -= 1;
        break;
      case "ArrowRight":
        player.speedX += 1;
        break;
      case "ArrowUp":
        player.speedY -= 1;
        break;
      case "ArrowDown":
        player.speedY += 1;
    }
  });

  document.addEventListener("keyup", (e) => {
    player.speedX = 0;
    player.speedY = 0;
  });
});