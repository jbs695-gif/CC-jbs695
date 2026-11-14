let sound;
let amp;
let cnv;
let snowflakePositions = [];

async function setup() {
  // 1. Create a 600x600 canvas and attach the click listener
  cnv = createCanvas(600, 600);
  cnv.mousePressed(playSound);

  // 2. Pre-calculate grid positions for the snowflakes
  for (let x = 100; x < width; x += 130) {
    for (let y = 100; y < height; y += 130) {
      snowflakePositions.push([x, y]);
    }
  }

  // 3. Load sound asynchronously using p5.js v2 async/await
  try {
    sound = await loadSound('media/let_it_go.mp3');
    amp = new p5.Amplitude();
    sound.connect(amp);
 
  }
}

function playSound() {
  userStartAudio(); // Enables audio playback on user click
  if (sound && !sound.isPlaying()) {
    sound.loop();
  }
}

function draw() {
  // Soft winter blue background
  background(180, 210, 235);

  // Read amplitude volume level (0.0 to ~0.3)
  let level = amp ? amp.getLevel() : 0;

  // Map volume level directly to snowflake arm length
  let armLength = map(level, 0, 0.3, 15, 45);

  // Render each snowflake from stored array coordinates
  for (let i = 0; i < snowflakePositions.length; i++) {
    drawSnowflake(snowflakePositions[i], snowflakePositions[i][6], armLength);
  }

  // Display prompt text
  noStroke();
  fill(255);
  textAlign(CENTER);
  textSize(16);
  text('tap canvas to play song', width / 2, 30);
}

// Function to render custom 6-sided snowflake
function drawSnowflake(x, y, armLength) {
  push();
  translate(x, y);
  stroke(255);
  strokeWeight(2);

  for (let a = 0; a < 6; a++) {
    rotate(PI / 3);
    line(0, 0, 0, armLength);        // Main arm length scales with audio!
    line(0, 10, -5, 14);             // Left branch
    line(0, 10, 5, 14);              // Right branch
  }

  pop();
}