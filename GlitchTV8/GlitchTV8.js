let backgroundOpacity;
let backgroundFadeDirection;
let img, imgXoffset;

let counter = 0; //this is for the screenshot function at the end of the code

function preload() {
    // Preload the background image before setup runs
    // Image from Donnachie & Simionato's Evolution of nSpace movie, 
    // you can replace it with any image you like
    // but remember to update the file path and name in the next line!
    img = loadImage('data/Francaise_VoguE1.png');
}

function setup() {
    // Create a full-screen canvas
    createCanvas(windowWidth, windowHeight);
    // Set background to black (0,0,0)
    background(0);
    // Remove outlines from shapes
    noStroke();
    // Center text alignment
//    textAlign(CENTER, CENTER);
    
    // Track opacity for the background fade effect (0 to 1)
    backgroundOpacity = 0;
    backgroundFadeDirection = 1; // 1 = increasing, -1 = decreasing

setup_2();
}

function setup_2() {
 
}

function draw() {
    
    // Fade background image in and out - increased speed for more obvious effect
    backgroundOpacity += backgroundFadeDirection * 0.005; // Adjust fade speed here (0.01 = 1% per frame)
    // Keep opacity between 0 and 1
    if (backgroundOpacity >= 1) {
        backgroundFadeDirection = -1;
    }
    if (backgroundOpacity <= 0) {
        backgroundFadeDirection = 1;
    }
    
    // Draw background image with fading opacity
    // Using the alpha parameter directly on the image() function
    // remember to set the global variables at the top of this code

    tint(255, int(backgroundOpacity * 255)); // Apply fade effect to the image
    
    if (random() < 0.01) {
        imgXoffset = random(-150, 150); // big horizontal glitchy shift
        image(img, imgXoffset, 0, width, height, 0, 0, img.width, img.height, COVER);
    }
    else { image(img, 0, 0, width, height, 0, 0, img.width, img.height, COVER);
    }
    
    // Randomly shift the image position for a glitch effect
    // The random() function generates a random number between the specified range
    // Here we create a random horizontal shift between -67 and 67 pixels
    // The vertical position is fixed at 0 to keep the image aligned with the top of the canvas
    
    // Glitchy background with random color shifts
    let glitchHue = random(0, 360);     // Random hue 0-360
    let glitchSat = random(25, 100);    // Random saturation
    let glitchBri = random(2, 10);      // Random brightness
    
    // Random glitch flashes - appears occasionally
    if (frameCount % random(10, 20) === 0) {
        // frameCount % random(10,50) creates unpredictable timing
        fill(random(0, 255), random(0, 255), random(0, 255), random(50, 100));
        // Full screen flash for glitch effect
        rect(0, 0, width, height);
    }
    
    // Glitchy pixel noise - simulates digital interference
    for (let i = 0; i < 10; i++) {
        let x = random(width);      // Random x position
        let y = random(height);     // Random y position
        let size = random(1, 5);    // Random pixel size
        let r = random(0, 255);     // Random red value
        let g = random(0, 255);     // Random green value
        let b = random(0, 255);     // Random blue value
        
        fill(r, g, b);              // RGB color mode
        rect(x, y, size, size);     // Draw small colored rectangles
    }
    
    // Glitchy color inversion effect - occasional screen flash
    if (frameCount % 35 === 0) {
        let invert = random(0, 1); // 0 = no invert, 1 = full invert
        fill(255 - invert * 255, invert * 255, invert * 255, 80); 
        rect(0, 0, width, height); // Flash entire screen
    }
    
    // Glitchy text effect - appears every 60 frames
//    if (frameCount % 60 === 0) {
        // Array indexing with random() for text selection
        // floor() converts random decimal to integer index
//        let glitchText = ['ERROR', 'GLITCH TV', 'ERROR', 'GL T H T ', 'G  T TV'][floor(random(0, 5))];
//        fill(255, 255, 255);    // text colour white
//        textSize(height/3);          // text size big!
//        text(glitchText, width / 2, height / 2); // Center position
        
        // Text distortion - offset text for glitch effect
//        fill(255, 0, 0, random(50, 100)); // Red with transparency
//        textSize(height/3);
//        text(glitchText, width / 2 + random(-20, 20), height / 2 + random(-20, 20));
        
//        fill(0, 255, 255, random(50, 100)); // Cyan with transparency
//        textSize(height/3);
//        text(glitchText, width / 2 + random(-20, 20), height / 2 + random(-20, 20));
//    }
    
  
    // Glitchy random dots - more digital noise effect
    for (let i = 0; i < 400; i++) {
        let x = random(width); //pick a randomen x position
        let y = random(height); //pick a random y position
        let size = random(0.5, 3); // Random size for dots between 0.5 and 3
        let hue = random(0, 360); // Random hue for colorful noise
        let sat = random(80, 150); // Random saturation for vibrant colors
        let bri = random(100, 255); // Random brightness for visible dots
        
        fill(hue, sat, bri); // note the HSB color mode  
        circle(x, y, size); // Draw small circles for noise
    }
    
    // Glitchy random rectangles - scattered shapes
    for (let i = 0; i < 15; i++) {
        let x = random(width);
        let y = random(height);
        let w = random(600, 1200);
        let h = random(100, 120);
        let hue = random(100, 260);
        let sat = random(80, 100);
        let bri = random(50, 80);
        let alpha = random(10, 15);
        
        fill(hue, sat, bri, alpha);
        rect(x, y, w, h);
    }
    
    // Glitchy frame-based distortion - sine wave movement
    // Runs every 60 frames
    if (frameCount % 60 === 0) {
        // Calculate oscillating vertical offset using sine wave
        let yShift = sin(frameCount * 0.05) * 20;
        
        // Draw multiple horizontal lines with different offsets
        fill(255, 255, 255, 20); // White line
        rect(0, yShift, width, 5);
        
        fill(0, 255, 0, 20); // Green line
        rect(0, yShift + 10, width, 5);
        
        fill(255, 0, 255, 20); // Magenta line
        rect(0, yShift - 10, width, 5);
        
        // Additional distortion lines for stronger effect
        fill(255, 0, 0, 15); // Red line
        rect(0, yShift + 20, width, 3);
        
        fill(0, 0, 255, 15); // Blue line
        rect(0, yShift - 20, width, 3);
    }

draw_2();
}

function draw_2() {
let x = random(width);  // Random x position across the canvas
    let y = random(height); // Random y position across the canvas
    
    // Draw line from previous mouse position to current
    line(mouseX, mouseY, x, y);
    
    // Update position with randomness
    x += random(-1, 1); // Random horizontal movement
    y += random(-1, 1); // Random vertical movement
    
    // ...but keep position within canvas
    x = constrain(x, 0, width);
    y = constrain(y, 0, height);
    
    // Set color with randomness
    stroke(random(255), random(255), random(255));
    strokeWeight(5);
    
    // Move mouse to new position
    mouseX = x;
    mouseY = y;
    
    // Fade background slightly for trails
  //  background(0, 25); // Black background with opacity to create a fading 
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
