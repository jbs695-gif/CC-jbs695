let pos = [];
let song;
let amp;

async function setup() {
  createCanvas(600, 600);

  // Load sound asynchronously (p5.js v2 pattern)
  song = await loadSound('carol/let_it_go.mp3');
  amp = new p5.Amplitude();
}

function draw() {
  background(180, 210, 235);

  let vol = amp.getLevel();
  let armLength = map(vol, 0, 0.5, 15, 35);

  // Loop through stored snowflake positions
  for (let i = 0; i < pos.length; i++) {
    // FIX: Access index [0] for X and index [1] for Y!
    drawSnowflake(pos[i][0], pos[i][1], armLength);
  }
}

function mousePressed() {
  // Unlock audio and start song on first click
  userStartAudio();
  if (song && !song.isPlaying()) {
    song.loop();
  }

  // Add click coordinates [x, y] to pos array
  pos.push([mouseX, mouseY]);
}

function keyPressed() {
  pos.pop();
}

function drawSnowflake(x, y, armLength) {
  push();
  translate(x, y);
  stroke(255);
  strokeWeight(2);

  for (let a = 0; a < 6; a++) {
    rotate(PI / 3);
    line(0, 0, 0, armLength);
    line(0, 10, -5, 14);
    line(0, 10, 5, 14);
  }

  pop();
}