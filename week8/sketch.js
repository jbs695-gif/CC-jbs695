

//Array methods from class notes
let pos = [];

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(180, 210, 235);

// Draw each snowflake stored in the array
  for (i=0; i<pos.length; i++) {
      drawSnowflake(pos[i][0], pos[i][1], 50);
  }
  console.log(pos);
}

function mousePressed() {
  pos.push([mouseX, mouseY]);
}

function keyPressed() {
  pos.pop();
  //pos.shift();
}
// Custom function to draw a snowflake centered at (x, y), designed w/ LLM guidance
function drawSnowflake(x, y) {
  push();            // Save transformation state
  translate(x, y);   // Move origin to the snowflake position
  stroke(255);
  strokeWeight(2);

  // 6-sided symmetry (PI / 3 radians = 60 degrees)
  for (let a = 0; a < 6; a++) {
    rotate(PI / 3);
    line(0, 0, 0, 20);   // Main arm
    line(0, 10, -5, 14); // Left branch
    line(0, 10, 5, 14);  // Right branch
  }

  pop();             // Restore transformation state
}

//attempt at making a class
class Snowflake {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  draw() {
    drawSnowflake(this.x, this.y);
  }
}