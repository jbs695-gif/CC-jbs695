let sound, amp, cnv;
let snowflakePositions = [];

async function setup() {
  cnv = createCanvas(600, 600);

  // Attach mouse press directly to the canvas
  cnv.mousePressed(playSound);

  // Generate snowflake positions
  for (let x = 100; x < width; x += 130) {
    for (let y = 100; y < height; y += 130) {
      snowflakePositions.push([x, y]);
    }
  }

  // Relative path without a leading slash (p5.js v2 async/await pattern)
  try {
    sound = await loadSound('media/let_it_go.mp3');
    amp = new p5.Amplitude();
    sound.connect(amp);
  } catch (err) {
    console.error("Could not load sound file:", err);
  }
}

function playSound() {
  // 1. Unlock browser audio context on tap
  userStartAudio();

  // 2. Start playback if loaded and not already playing
  if (sound && !sound.isPlaying()) {
    sound.loop();
  }
}

function draw() {
  background(180, 210, 235);

  let level = amp ? amp.getLevel() : 0;
  let armLength = map(level, 0, 0.3, 15, 45);

  for (let i = 0; i < snowflakePositions.length; i++) {
    drawSnowflake(snowflakePositions[i][0], snowflakePositions[i][1], armLength);
  }

  // Cue text
  noStroke();
  fill(255);
  textAlign(CENTER);
  textSize(16);
  text('tap canvas to play song', width / 2, 30);
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