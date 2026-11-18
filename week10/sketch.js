// Define a variable to store the HandPose model.

let handPose;
// Make sure to add "async" before "function setup()".

async function setup() {
  createCanvas(640, 480); // a common webcam resolution
  
// Wait until the HandPose model is fully loaded.

  handPose = await ml5.handPose();
}
