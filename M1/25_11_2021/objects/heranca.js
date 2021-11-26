class Animal {
  constructor(name, mainColor, sound) {
    this.name = name;
    this.mainColor = mainColor;
    this.sound = sound;
  }

  scream(intensity) {
    console.log(`${this.sound} ${'!'.repeat(intensity)}`);
  }
}

class BemTeVi extends Animal {
  constructor(name, mainColor, sound, speedOfFlight) {
    super(name, mainColor, sound);
    this.speedOfFlight = speedOfFlight;
  }
}

const marcio = new BemTeVi('marcio', 'blue', 'Bem te vi', '100km/h');

marcio.scream(10);

class AnglerFish extends Animal {
  constructor(name, luminosityDiameter) {
    super(name, 'gray', 'Glub Glub');
    this.luminosityDiameter = luminosityDiameter;
  }

  scream() {
    console.log(`${this.sound}, 💜💜💜💜💜`);
  }
}

const luzinha = new AnglerFish('Luzinha', '10m');

luzinha.scream();
