let video;
let handPose;
let hands = [];

async function setup() {
  createCanvas(640, 480);

  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  // Load model asynchronously (p5.js v2 global mode)
  handPose = await ml5.handPose();
  handPose.detectStart(video, gotHands);
}

function draw() {
  background(220);
  image(video, 0, 0);

  // Check if at least one hand is detected
  if (hands.length > 0) {
    // Grab the first hand in the array using 
    let hand = hands;
    let thumb = hand.thumb_tip;
    let index = hand.index_finger_tip;

    // Distance between thumb and index finger
    let d = dist(thumb.x, thumb.y, index.x, index.y);

    // Trigger visual change when pinched close
    if (d < 30) {
      background(255, 0, 100);

      fill(255);
      textSize(48);
      textAlign(CENTER, CENTER);
      text("PINCH!", width / 2, height / 2);
    }
  }
}

function gotHands(results) {
  hands = results;
}