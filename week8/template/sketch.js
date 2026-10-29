//Array methods from class


let pos = [];

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255, 0, 0);


  for (i=0; i<pos.length; i++) {
      ellipse(pos[i][0], pos[i][1], 50);
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
