

// global variable
let pts = [];

function setup() {
  let canvas = createCanvas(500, 500);
  canvas.parent('week5-sketch'); // do not delete - links to your index.html pages (description)
}

function draw() {
  background(255,209,220);
  fill(255, 204, 0);
  ellipse(250, 250, 100, 100);
  //attach rectangle to circle like a stem of a flower
  fill(144, 238, 144);
  rect(225, 290, 50, 200);
  
}

