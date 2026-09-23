// p5Polar Template
// https://github.com/liz-peng/p5.Polar
// https://liz-peng.github.io/p5.Polar/
// Review the index.html for the <script></script> 

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES); // Sets angle mode to degrees [4]
  // Note: noLoop() is removed so draw() can animate! [1, 3]
}

function draw() {
  background(240);
  stroke(100, 50, 120);
  strokeWeight(2);
  noFill(); // Leaves shapes hollow [5]

  let xSpacing = 80;
  let ySpacing = 80;

  // Calculate a pulsing size using sin() and frameCount [6-8]
  let pulse = 25 + sin(frameCount * 3) * 15; 

  for (let x = 60; x < width; x += xSpacing) {
    for (let y = 60; y < height; y += ySpacing) {
      push(); // Save canvas state [9]
      
      // Tell p5.Polar where this shape's center is
      setCenter(x, y); 
      
      // Draw 4-sided polar squares/diamonds that pulse over time
      polarSquares(4, pulse, pulse);
      
      pop(); // Restore canvas state [9]
    }
  }

}
