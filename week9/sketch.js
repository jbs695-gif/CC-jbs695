let pos = [];
let song;
let amp;

async function setup() {
  createCanvas(600, 600);

  try {
    // Wait for the sound file promise to settle before proceeding
    song = await loadSound("media/let_it_go.mp3");
    amp = new p5.Amplitude();
  } catch (err) {
    console.error("Error loading audio file:", err);
  }
}

function draw() {
  background(180, 210, 235);

  let vol = amp ? amp.getLevel() : 0;
  let armLength = map(vol, 0, 0.5, 15, 35);

  for (let i = 0; i < pos.length; i++) {
    drawSnowflake(pos[i], pos[i][6], armLength);
  }
}

function mousePressed() {
  userStartAudio();
  if (song && !song.isPlaying()) {
    song.loop();
  }

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