// p5.plotSvg + p5.Polar Template

p5.disableFriendlyErrors = true; 
let bDoExportSvg = false; 
// if using randomness, experiment w/ myRandomSeed to see different versions (or iterations) of your sketch
let myRandomSeed = 12345; 
let regenerateButton, exportSvgButton; 

// canvas size
const DPI = 70; // dots per inch
const PAGE_W = 8.5*DPI; 
const PAGE_H = 11*DPI;

//------------------------------------------------------------
function setup() {
  createCanvas(PAGE_W, PAGE_H);
  UI();
  noFill();
  // Set the SVG group by stroke color to `true`, so that strokes 
  // of the same color are grouped together in the SVG file. 
  setSvgGroupByStrokeColor(true); 
}

function draw(){
  clear();
  randomSeed(myRandomSeed); 
  background(255); 
  
  if (bDoExportSvg == true){
    beginRecordSvg(this, "myOutput_" + month() + day() + year() + "_" + myRandomSeed + ".svg");
  }

  // define your drawing below
  myDrawing(); 
  

  if (bDoExportSvg){
    endRecordSvg(); 
    bDoExportSvg = false;
  }
}

function myDrawing() {
 
  background(240);
  stroke(100, 50, 120);
  strokeWeight(2);
  if(mouseIsPressed){
     fill(7, 59, 143);
  } else {
    fill(100, 50, 125);
  }

  let xSpacing = 80;
  let ySpacing = 80;

  // Calculate a pulsing size using sin() and frameCount 
  let pulse = 25 + sin(frameCount * 3) * 15; 

  for (let x = 60; x < width; x += xSpacing) {
    for (let y = 60; y < height; y += ySpacing) {
      push(); // Save canvas state [9]
      
      // Tell p5.Polar where this shape's center is
      setCenter(x, y); 
      
      // Draw 4-sided polar squares/diamonds that pulse over time
      polarSquares(4, pulse, pulse);
      
      pop(); // Restore canvas state 
    }
//setting mouse press to chnage coloe


  }
} 
// Tip: When plotting, strokeWeight() doesn't affect your drawing. 
// To change the thickness of your drawing, change your pen/marker/etc
// - or experiment with code (use a for loop to create an 'outline')

//-----------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------

// Make a new random seed when the "Regenerate" button is pressed
function regenerate(){
  myRandomSeed = round(millis()); 
}

// Set the SVG to be exported when the "Export SVG" button is pressed
function initiateSvgExport(){
  bDoExportSvg = true; 
}

function UI() {
  regenerateButton = createButton('Regenerate');
  regenerateButton.position(0, height);
  regenerateButton.mousePressed(regenerate); // run regenerate() when pressed
  
  exportSvgButton = createButton('Export SVG');
  exportSvgButton.position(120, height);
  exportSvgButton.mousePressed(initiateSvgExport); // run initiateSvgExport() when pressed
}

/*
This template uses the following sketch as a starting point: 
https://editor.p5js.org/golan/sketches/LRTXmDg2q

Additional references/info:
https://github.com/golanlevin/p5.plotSvg
https://github.com/liz-peng/p5.Polar
https://github.com/golanlevin/p5.plotSvg/blob/main/documentation.md#beginrecordsvg
https://github.com/golanlevin/p5.plotSvg/blob/main/documentation.md#endrecordsvg

*/