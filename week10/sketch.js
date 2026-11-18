let video;
let handPose;
let hands = [];
let osc;
let isPinching = false;

async function setup() {
  createCanvas(640, 480);

  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  // Load HandPose model asynchronously (p5.js v2 global mode)
  handPose = await ml5.handPose();
  handPose.detectStart(video, gotHands);

  // Initialize synthesizer tone
  osc = new p5.Oscillator(440, 'sine');
}

function draw() {
  background(220);
  image(video, 0, 0);

  isPinching = false;

  if (hands.length > 0) {
    let hand = hands;
    let thumb = hand.thumb_tip;
    let index = hand.index_finger_tip;

    // Calculate distance between thumb and index finger tips
    let d = dist(thumb.x, thumb.y, index.x, index.y);

    // Highlight keypoints
    fill(0, 255, 255);
    noStroke();
    circle(thumb.x, thumb.y, 16);
    circle(index.x, index.y, 16);

    // Pinch condition (distance < 30 pixels)
    if (d < 30) {
      isPinching = true;
    }
  }

  // Audio-Visual Response
  if (isPinching) {
    // Visual effect: overlay a bright color tint and message
    fill(255, 0, 120, 120);
    rect(0, 0, width, height);

    fill(255);
    textSize(36);
    textAlign(CENTER, CENTER);
    text("OUCH! You pinched me!", width / 2, 60);

    
}

function gotHands(results) {
  hands = results;
}