// 1. GLOBAL VARIABLES (Declared at the very top)
let circleColor; 
let x = 200;
let y = 200;

// 2. SETUP (Runs once at the start) [1]
function setup() {
  createCanvas(400, 400); [5]
  circleColor = color(100, 150, 255); // Setting initial color
}

// 3. DRAW LOOP (Runs repeatedly top-to-bottom) [2, 6]
function draw() {
  background(34, 139, 34); // FIRST: Paint the canvas background [3]
  
  fill(circleColor);       // SECOND: Pick your circle color [4]
  circle(x, y, 80);        // THIRD: Draw the circle on top [7]

 }

function mousePressed() {
  // 1. Pick a new random RGB color on click
  circleColor = color(random(255), random(255), random(255));

  // 2. Nudge the position slightly
  x += random(-10, 10);
  y += random(-10, 10);
 

 



  



 



}
