
let counter = 0;
// this counter is only used at the end of the code for screenshot naming

let myFont;
let points;
let sampleF;

// preload() runs before setup() to ensure our font is downloaded/loaded first.
function preload() {
  myFont = loadFont("data/FlorDeRuina-Germen.otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);

  // This value controls how many points are generated on the text outline.
  sampleF = 0.05;

  // Extract our array of outline points!
  points = myFont.textToPoints('grove', (width / 4) - 200, height / 2, 300, {
    sampleFactor: sampleF,
    simplifyThreshold: 0
  });

  // Notice we are NOT calling noLoop() here like the last sketch!
  // We want setup() to finish so draw() can run 60 times a second and animate our sketch.

}

function draw() {
  // Clear the background every frame so our moving lines don't smear
  // "blue" works as a built-in web color, or you can use RGB values!
  //background(87,19,1);

  // A 'for' loop lets us iterate over every single point inside our 'points' array
  for (let i = 0; i < points.length; i++) {
    // Extract the exact X and Y coordinates for the current point
    let p = points[i];

    // --- 1. DRAW THE CONNECTING LINE ---
    // The line connects the point's coordinates to our current mouse position.
    // We set the stroke (line color) to white, but add a 4th argument (100) for transparency!
    // This looks much cleaner when hundreds of lines overlap.
    stroke(107,142,35, 30);
    strokeWeight(0.5);
    line(p.x, p.y, mouseX, mouseY);

    // --- 2. DRAW THE TWINKLING DOT ---
    // Generate a completely random RGB color every single frame for this specific dot
    let randomDotColor = color(random(255), random(255), random(255));

    // Set the fill to our random color, and give it a solid solid white outline
    fill(128,128,0);
    stroke(128,128,0, 400);
    strokeWeight(1);

    // Draw the dot exactly at the mathematical coordinate
    ellipse(p.x, p.y, 5, 5);
  }
  
draw_2();
}

function draw_2() {
    let x = random(width);  // Random x position across the canvas
    let y = random(height); // Random y position across the canvas
    
    // Draw line from previous mouse position to current
    line(mouseX, mouseY, x, y);
    
    // Update position with randomness
    x += random(-1, 10); // Random horizontal movement
    y += random(-1, 10); // Random vertical movement
    
    // ...but keep position within canvas
    x = constrain(x, 0, width);
    y = constrain(y, 0, height);
    
    // Set color with randomness
    stroke(random(255), random(255), random(255));
    strokeWeight(2);
    
    // Move mouse to new position
    mouseX = x;
    mouseY = y;
    
    // Fade background slightly for trails
    background(0, 30); // Black background with opacity to create a fading 
}


// Ensure the canvas fully resizes if the browser window changes size
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

  // Recalculate the text points so they are positioned correctly based on the new dimensions
  points = myFont.textToPoints('grove', (width / 4) - 200, height / 2, 300, {
    sampleFactor: sampleF,
    simplifyThreshold: 0
  });
}
