let bgImage;

function preload() {
  //load BEFORE the sketch, cause it may slow us down otherwise
  //bodyFont = loadFont("data/myfontname.otf");        //change to reflect YOUR font
  bgImage = loadImage("data/vegies.jpg");  //change this to reflect YOUR image
 // smallImage = loadImage("data/redCircle.png");        //change to yours
}


function setup() {
createCanvas(windowWidth, windowHeight)
  background(0,0,255);
}


function draw() {
  // METHOD 1: Cover (fill) the background of the browser
  imageMode(CORNER); //use this if you need other modes elsewhere
  image(bgImage, 0, 0, width, height, 0, 0, bgImage.width, bgImage.height, COVER);
tint(100, 5);


  // METHOD 2: Contain (letterbox) the image to fit as much as possible
  // background(0); // Important! Clears the screen under the image
  // image(bgImage, 0, 0, width, height, 0, 0, bgImage.width, bgImage.height, CONTAIN);

  // METHOD 3: A simple placement of the image in the center of the browser
  // background(0); // Adds a background to contrast with your image
  // image(bgImage, width / 2, height / 2);

  // METHOD 4: Images can follow the mouse! Suggestion: use imageMode(CENTER) above
  // background(0);
  // imageMode(CENTER); //looks better if the mouse is in the centre!
  // image(smallImage, mouseX, mouseY, 100, 100);

  // [ADVANCED] MIXING METHODS: 'fading' trails over a background
  // Use tint(color, opacity) to "erase" the old trails
  // tint(255, 20);
  // imageMode(CORNER);
  // image(bgImage, 0, 0, width, height, 0, 0, bgImage.width, bgImage.height, COVER);
  // // Turn tint off (255 is full opacity) so your circle looks solid
  // noTint();
  // imageMode(CENTER);
  // image(smallImage, mouseX, mouseY, 100, 100);

  // Just some type to show you where it would be added
  // Alternatively you can add all this in setup() if remains static
  // fill(255);
  // textSize(120);
  // textAlign(CENTER, CENTER);
  // text("HELLO ROBOT!", width / 2, height / 2);

 draw_2();
}


function draw_2() {
  circle(mouseX,mouseY,100);
fill(54,141,17);
stroke(244,215,15);
strokeWeight(1);
//noStroke();
if (mouseIsPressed) {
  fill(204,0,0);}
  
}


function keyPressed() {
  if (key === 's') {
  // Save the canvas to 'myCanvas.jpg'.
  saveCanvas('myCanvas.jpg');}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
  
