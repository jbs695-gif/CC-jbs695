// change the quotes in this array. Be mindful of the quotation marks!
// this is the only part of the file you need to edit!

const quotes = [
  { text: "using code to express ourselves", source: "Amber" },
  { text: "a school of thought", source: "Tim" },
  { text: "the intersection where artists and programmers meet", source: "SMU" },
  { text: "about experimentation, not functionality", source: "Maura" },
  { text: "unbound by commercial purpose and driven by free flow", source: "Patrick" },
  { text: "simply the art of creating visualizations or expression", source: "Donovan" },
  { text: "code in the contexts of art, play, creativity, and self-expression", source: "Hunter" },
  { text: "the goal of expanding our sense of what is possible with digital tools", source: "PBS" }
];
// no need to edit anything below this line! 
// if you have made an error, you can check your history to see what might have gone wrong

// a variable that holds the current quote
let current = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Seed with millis() so each page load gives a different quote.
  randomSeed(millis());
  textSize(32);
  fill(10, 255, 10);
  // calls the function to pick a quote
  pickQuote();
}

function pickQuote() {
  // take a random number and use that to identify what quote to use
  current = quotes[floor(random(quotes.length))];
}

function draw() {
  background(255, 20, 250); // set the background color
  drawQuote();  // draw the quote on screen
}

function drawQuote() {   // draw text
  textAlign(CENTER, CENTER);
  text("Creative Coding is.....", width / 2, height / 2 - 48);
  textStyle(BOLD);
  text("'" + current.text + "'", width / 2, height / 2);
  textAlign(RIGHT, CENTER);
  text("-" + current.source, width - 100, height - 100);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function newQuote() {
  pickQuote();
  redraw();
}

function mousePressed() {
  newQuote();
}