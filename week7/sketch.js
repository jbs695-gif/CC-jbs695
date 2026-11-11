let centerColors = [];
let pMap; // Stores the mapper instance
let pg;   // The offscreen graphics buffer

function setup() {
  let canvas = createCanvas(500, 500);
  canvas.parent('week5-sketch'); // links to your index.html container

  // 1. Initialize p5mapper and assign a 500x500 quad map to pg
  pMap = createMapper();
  pg = pMap.createQuadMap(500, 500);

  // 2. Array of custom colors (flowery)
  centerColors = [
    color(255, 204, 0),   // Warm yellow
    color(255, 100, 0),   // Sunburnt orange
    color(255, 105, 180), // Pink
    color(138, 43, 226)   // Purple
  ];
}

function draw() {
  // Clear the main background
  background(0);

  // 3. Draw everything to the offscreen buffer using "pg."
  pg.background(255, 209, 220);

  // Pick an array index based on the minute
  let colorIndex = minute() % centerColors.length;

  pg.fill(centerColors[colorIndex]);
  pg.ellipse(250, 250, 100, 100);

  // Attach rectangle stem to circle
  pg.fill(144, 238, 144);
  pg.rect(225, 290, 50, 200);

  // 4. Render the mapped surfaces to the canvas
  pMap.draw();
}
