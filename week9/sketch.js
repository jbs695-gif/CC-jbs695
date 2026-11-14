let pos = [];
let song;
let amp;

async function setup() {
  createCanvas(600, 600);

  // 1. Generate 12 snowflake positions automatically on startup
  for (let i = 0; i < 12; i++) {
    pos.push([random(50, width - 50), random(50, height - 50)]);
  }

  // 2. Load sound asynchronously (p5.js v2 pattern)
  try {
    song = await loadSound('media/let_it_go.mp3');
    song.loop();
    amp = new p5.Amplitude();
  } catch (err) {
    console.error("Audio failed to load:", err);
  }
}

function draw() {
  // Icy blue background
  background(180, 210, 235);

  // 3. Measure current volume level (0.0 to 1.0)
  let vol = amp ? amp.getLevel() : 0;

  // Map audio volume to dynamic snowflake arm length
  let armLength = map(vol, 0, 0.5, 15, 40);

  // 4. Draw each snowflake from our pre-generated array
  for (let i = 0; i < pos.length; i++) {
    drawSnowflake(pos[i][0], pos[i][1], armLength);
  }
}

// Custom function to draw a snowflake with dynamic arm length
function drawSnowflake(x, y, armLength) {
  push();
  translate(x, y);
  stroke(255);
  strokeWeight(2);

  for (let a = 0; a < 6; a++) {
    rotate(PI / 3);
    line(0, 0, 0, armLength);        // Main arm grows with music volume!
    line(0, 10, -5, 14);             // Left branch
    line(0, 10, 5, 14);              // Right branch
  }

  pop();
}