let snowflakes = [];
let audioFile;
let amp;
let fft;

async function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent('week9-sketch'); // Testing linking to previous sketch, since sketch broke when I combined.

  userStartAudio(); // Audio wasn't starting, I think bc I needed this; searched issue and found on p5 library site

  // Load sound using async/await (No preload!)
  audioFile = await loadSound('winter_carol.mp3');
  audioFile.loop();

  amp = new p5.Amplitude();
  fft = new p5.FFT();
}

function draw() {
  // 1. Measure Audio Properties
  let volume = amp.getLevel();           // Amplitude (0.0 to 1.0)
  fft.analyze();
  let bass = fft.getEnergy("bass");       // Bass energy (0 to 255)
  let treble = fft.getEnergy("treble");   // High treble/chimes (0 to 255)

  // Relationship 3: Volume shifts background atmosphere
  let bgViolet = map(volume, 0, 0.5, 210, 255);
  background(140, 180, bgViolet);

  // Loop backward through array when updating/drawing objects
  for (let i = snowflakes.length - 1; i >= 0; i--) {
    snowflakes[i].update(bass);           // Relationship 1: Bass speeds up falling
    snowflakes[i].display(treble, volume); // Relationship 2: Treble stretches branches
  }
}

function mousePressed() {
  // Spawn a new audio-reactive snowflake on click
  snowflakes.push(new Snowflake(mouseX, mouseY));
}

class Snowflake {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.baseSpeed = 1;
  }

  update(bassEnergy) {
    // Bass boost accelerates falling motion
    let speedBoost = map(bassEnergy, 0, 255, 0, 4);
    this.y += this.baseSpeed + speedBoost;

    // Reset to top if it falls off the screen
    if (this.y > height + 20) {
      this.y = -20;
    }
  }

  display(trebleEnergy, vol) {
    push();
    translate(this.x, this.y);

    // Volume controls snowflake brightness
    let bright = map(vol, 0, 0.5, 200, 255);
    stroke(bright);
    strokeWeight(2);

    // High treble expands the outer snowflake branches
    let branchLength = map(trebleEnergy, 0, 255, 14, 26);

    for (let a = 0; a < 6; a++) {
      rotate(PI / 3);
      line(0, 0, 0, 20);
      line(0, 10, -5, branchLength);
      line(0, 10, 5, branchLength);
    }

    pop();
  }
}