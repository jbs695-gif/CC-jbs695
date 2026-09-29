  
var r; //global variable
  
  
  function setup() {
    createCanvas(500, 500);
   
  }

  fuction draw() {
    background(255, 0, 0);

    for (i=0; i < 5; i++) {
     for (j=0; j < 5; j++) {
        //drawing will go here
        let s = 40; //size
        let space = s;
        let startingXPosition = 100;
        let startingYPosition = 100;
        let r = random(-10, 10);
        rect(startingXPosition + (i + space), startingYPosition + (j*space), s);
      }
   
  }

  noloop();
 }

 function mousePressed() {
