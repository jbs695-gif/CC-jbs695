let pos = [];
let song;
let amp;

async function setup() {
  
  createCanvas(600, 600);

  // 2. Load audio asynchronously (p5.js v2 pattern)
  song = await loadSound('media/let_it_go.mp3');

  // 3. Create amplitude analyzer to track volume
  amp = new p5.Amplitude();
}

function draw() {
  background(180, 210, 235);

  // 4. Measure current volume level (0.0 to 1.0)
  let vol = amp.getLevel();

  // Map audio volume to dynamic snowflake arm length
  let armLength = map(vol, 0, 0.5, 15, 35);

  // 5. Draw each snowflake saved in your array
  for (let i = 0; i < pos.length; i++) {
    drawSnowflake(pos[i], pos[i][7], armLength);
  }
}

function mousePressed() {
  // Unlock browser audio context & start song on first click
  userStartAudio();
  if (song && !song.isPlaying()) {
    song.loop();
  }

  // Add click position to array
  pos.push([mouseX, mouseY]);
}

function keyPressed() {
  // Remove last snowflake
  pos.pop();
}

// Custom function to draw a snowflake with dynamic arm length
function drawSnowflake(x, y, armLength) {
  push();
  translate(x, y);
  stroke(255);
  strokeWeight(2);

  // 6-sided symmetry
  for (let a = 0; a < 6; a++) {
    rotate(PI / 3);
    line(0, 0, 0, armLength);        // Main arm grows with music volume!
    line(0, 10, -5, 14);             // Left branch
    line(0, 10, 5, 14);              // Right branch
  }

  pop();
}