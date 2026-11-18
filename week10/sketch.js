let video;
let handPose;
let hands = [];

async function setup() {
  createCanvas(640, 480);

  // Set up webcam capture
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  // Load model asynchronously
  handPose = await ml5.handPose();
  handPose.detectStart(video, gotHands);
}

function draw() {
  background(220);
  image(video, 0, 0);

  // Check if a hand is in view
  if (hands.length > 0) {
    let thumb = hands.thumb_tip;
    let index = hands.index_finger_tip;

    // Distance between thumb and index finger
    let d = dist(thumb.x, thumb.y, index.x, index.y);

    // If pinched close together
    if (d < 30) {
      background(255, 0, 100); // Change background color

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