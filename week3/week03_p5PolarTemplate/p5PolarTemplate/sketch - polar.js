// p5Polar Template
// https://github.com/liz-peng/p5.Polar
// https://liz-peng.github.io/p5.Polar/
// Review the index.html for the <script></script> 

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES); // Use degrees to make rotation easy to think about [6]
  noLoop();
}

function draw() {
  background(240);
  fill(200, 162, 200); // Lilac fill!
  stroke(100, 50, 120);
  strokeWeight(2);

  let xSpacing = 60;
  let ySpacing = 110;

  // Outer loop moves across the X-axis
  for (let x = 50; x < width; x += xSpacing) {
    
    // Map the current X position to an angle between 0 and 360 degrees
    let angle = map(x, 50, width, 0, 360); // [1, 2]

    // Inner loop moves down the Y-axis
    for (let y = 60; y < height; y += ySpacing) {
      push();          // Save current canvas state [5, 7]
      translate(x, y); // Move origin to current grid spot [8, 9]
      rotate(angle);   // Rotate around the local origin [3, 4]

      beginShape();
        vertex(0, -50);
        vertex(25, 0);
        vertex(0, 50);
        vertex(-25, 0);
      endShape(CLOSE);

      pop();           // Restore canvas state [5, 7]
    }
  }
function draw() { 
  setCenter(width/2, height/2);
  background(220);
  stroke('#666');
  noFill();
  polarEllipses(30, 40+sin(frameCount/10)*20, 80, 80);
}

}
