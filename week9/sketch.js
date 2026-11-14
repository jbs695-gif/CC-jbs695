let pos = [];
let song;
let amp;

async function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent('week8-sketch'); // Links to your index.html container

  // Enable audio playback for modern browsers
  userStartAudio();

  //Brought in mp3 file to media folder, the way we bring in images
  song = await loadSound("media/let_it_go.mp3");
  song.loop();

  // Create an amplitude object to track volume
  amp = new p5.Amplitude();
}

function draw() {
  background(180, 210, 235);

  // Measure current audio volume level (0.0 to 1.0)
  let vol = amp.getLevel();

  // Map volume to dynamic snowflake arm length
  let armLength = map(vol, 0, 0.5, 15, 35);

  // Draw each snowflake from your position array
  for (let i = 0; i < pos.length; i++) {
    drawSnowflake(pos[i][0], pos[i][1], armLength);
  }
}

function mousePressed() {
  pos.push([mouseX, mouseY]);
}

function keyPressed() {
  pos.pop();
}

// Custom function modified slightly to accept dynamic arm length
function drawSnowflake(x, y, armLength) {
  push();
  translate(x, y);
  stroke(255);
  strokeWeight(2);

  // 6-sided symmetry
  for (let a = 0; a < 6; a++) {
    rotate(PI / 3);
    line(0, 0, 0, armLength);        // Main arm grows with volume!
    line(0, 10, -5, 14);             // Left branch
    line(0, 10, 5, 14);              // Right branch
  }

  pop();
}