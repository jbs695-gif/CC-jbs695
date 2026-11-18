// Define a variable to store the HandPose model.

let handPose;
// Make sure to add "async" before "function setup()".

async function setup() {
  createCanvas(640, 480); // a common webcam resolution
  
// Wait until the HandPose model is fully loaded.

  handPose = await ml5.handPose();
}
// Define a variable "video" to store the webcam video.

let video;
let handPose;

async function setup() {
  createCanvas(640, 480);
  
// Access the webcam video, resize it to fit the canvas, and hide it from the display.

  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  handPose = await ml5.handPose();
}
