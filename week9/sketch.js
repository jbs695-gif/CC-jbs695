let sound, amp, cnv;
let snowflakePositions = [];

async function setup() {
  cnv = createCanvas(600, 600);

  // turning mousepressed into a function to play the sound, w/ LLM guidance
  cnv.mousePressed(playSound);

  // the snowflake positions
  for (let x = 100; x < width; x += 130) {
    for (let y = 100; y < height; y += 130) {
      snowflakePositions.push([x, y]);
    }
  }

  // my attempt, w/ LLM guidance, to load the sound file
  try {
    sound = await loadSound('C:\Users\journ\OneDrive\Documents\Also Github\CC-jbs695\week9\media\let.mp3');
    amp = new p5.Amplitude();
    sound.connect(amp);
  } catch (err) {
    console.error("Could not load sound file:", err);
  }
}

function playSound() {
  userStartAudio();

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

  // adding the text at the top to help user know to click
  noStroke();
  fill(255);
  textAlign(CENTER);
  textSize(16);
  text('tap canvas to play song', width / 2, 30);
}

// this is custom snowflake fuction again
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