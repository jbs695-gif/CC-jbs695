let video;
let handPose;
let hands = [];
let currentLetter = "";
let osc;

async function setup() {
  createCanvas(640, 480);

  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  // Load HandPose model asynchronously
  handPose = await ml5.handPose();
  handPose.detectStart(video, gotHands);

  // Initialize a synthesizer oscillator for audio feedback
  osc = new p5.Oscillator(440, 'sine');
}

function draw() {
  background(220);
  image(video, 0, 0);

  // Check keypoints if a hand is detected
  if (hands.length > 0) {
    let hand = hands;

    // Grab keypoint objects
    let pinkyTip = hand.pinky_tip;
    let indexTip = hand.index_finger_tip;
    let middleTip = hand.middle_finger_tip;

    // Simple rule for letter 'I': Pinky is raised higher than index & middle fingers
    if (pinkyTip.y < indexTip.y && pinkyTip.y < middleTip.y) {
      currentLetter = "I";
      if (!osc.started) {
        osc.start();
        osc.freq(523.25); // Note C5
      }
    } else {
      currentLetter = "";
      osc.stop();
    }
  }

  // Draw detected letter on screen
  if (currentLetter !== "") {
    fill(255, 0, 100);
    textSize(64);
    textAlign(CENTER, CENTER);
    text(currentLetter, width / 2, 80);
  }
}

function gotHands(results) {
  hands = results;
}
