let bgImage;

let counter = 0;
// this counter is only used at the end of the code for screenshot naming

function preload() {
  //load BEFORE the sketch, cause it may slow us down otherwise
  //bodyFont = loadFont("data/myfontname.otf");        //change to reflect YOUR font
  bgImage = loadImage("data/art.jpg");  //change this to reflect YOUR image
  }


function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0); // Start with a black background
}

function draw() {
    let x = random(width);  // Random x position across the canvas
    let y = random(height); // Random y position across the canvas
    
    // Draw line from previous mouse position to current
    circle(mouseX, mouseY, x, y);
    
    // Update position with randomness
    x += random(-1, 1); // Random horizontal movement
    y += random(-1, 1); // Random vertical movement
    
    // ...but keep position within canvas
    x = constrain(x, 0, width);
    y = constrain(y, 0, height);
    
    // Set color with randomness
    noFill();
    stroke(random(255), random(255), random(255));
    strokeWeight(2);
    
    // Move mouse to new position
    mouseX = x;
    mouseY = y;
    
    // Fade background slightly for trails
   // background(0, 25); // Black background with opacity to create a fading 

draw_2();
}

function draw_2() {
  // METHOD 1: Cover (fill) the background of the browser
  imageMode(CORNER); //use this if you need other modes elsewhere
  image(bgImage, 0, 0, width, height, 0, 0, bgImage.width, bgImage.height, COVER);
tint(170, 10);
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
}

function windowResized() {
    // Adjust canvas size when the window is resized
    resizeCanvas(windowWidth, windowHeight);
}

// and this final one is useful for saving and formatting screenshots 
// of the canvas, annoying to write but worth keeping it handy if
// you want to capture your glitchy creations in action!

function keyPressed() {
    // Press 's' to save a screenshot of the current canvas
    if (key === 's' || key === 'S') {
        saveCanvas(`glitch_tv_${nf(counter, 3)}`, 'jpg'); 
        counter++;
    }
}
