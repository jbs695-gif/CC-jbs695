let sound, amp, cnv;
let snowflakePositions = [];

async function setup() {
  // 1. Create canvas and attach mouse click listener directly to it
  cnv = createCanvas(600, 600);
  cnv.mousePressed(playSound);

  textAlign(CENTER);
  fill(255);

  // 2. Pre-populate a grid of snowflake positions
  for (let x = 100; x < width; x += 130) {
    for (let y = 100; y < height; y += 130) {
      snowflakePositions.push([x, y]);
    }
  }

  // 3. Load local audio file asynchronously (p5.js v2 async/await pattern)
  sound = await loadSound('media/let_it_go.mp3');
  amp = new p5.Amplitude();
  sound.connect(amp);
}

function playSound() {
  userStartAudio(); // Ensures audio context is enabled
  if (sound && !sound.isPlaying()) {
    sound.loop();
  }
}

function draw() {
  // 4. Soft icy winter background
  background(180, 210, 235);

  // Measure amplitude volume level
  let level = amp.getLevel();

  // Map audio level (0.0 to 0.3) to snowflake branch size (15 to 45)
  let armLength = map(level, 0, 0.3, 15, 45);

  // Draw snowflakes across the canvas pulsating to the volume!
  for (let i = 0; i < snowflakePositions.length; i++) {
    drawSnowflake(snowflakePositions[i][0], snowflakePositions[i][1], armLength);
  }

  // On-screen tap prompt
  noStroke();
  fill(255);
  textSize(16);
  text('tap canvas to play song', width / 2, 30);
}

// Custom function to draw a snowflake with dynamic arm length
function drawSnowflake(x, y, armLength) {
  push();
  translate(x, y);
  stroke(255);
  strokeWeight(2);

  for (let a = 0; a < 6; a++) {
    rotate(PI / 3);
    line(0, 0, 0, armLength);        // Arm grows with amplitude!
    line(0, 10, -5, 14);             // Left branch
    line(0, 10, 5, 14);              // Right branch
  }

  pop();
}