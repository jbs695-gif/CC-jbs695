

let centerColors = [];

function setup() {
  let canvas = createCanvas(500, 500);
  canvas.parent('week5-sketch'); // do not delete - links to your index.html pages (description)
  
  // Array of custom colors (flowery)
  centerColors = [
    color(255, 204, 0),   // Warm yellow
    color(255, 100, 0),   // Sunburnt orange
    color(255, 105, 180), // Pink
    color(138, 43, 226)   // Purple
  ];
}


function draw() {
  background(255,209,220);

  // Pick an array index based on the minute
  let colorIndex = minute() % centerColors.length;
  fill(centerColors[colorIndex]);
  ellipse(250, 250, 100, 100);
  //attach rectangle to circle like a stem of a flower
  fill(144, 238, 144);
  rect(225, 290, 50, 200);
}

