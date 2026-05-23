let counter = 0;
// this counter is only used at the end of the code for screenshot naming

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
    fill(random(255));
    stroke(random(255), random(255), random(255));
    strokeWeight(2);
    
    // Move mouse to new position
    mouseX = x;
    mouseY = y;
    
    // Fade background slightly for trails
    background(0, 25); // Black background with opacity to create a fading 
}
// these next 2 functions are for house-keeping, 
// the first allows the canvas to adjust to window size changes
// which keeps the glitch effects full-screen and responsive

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
