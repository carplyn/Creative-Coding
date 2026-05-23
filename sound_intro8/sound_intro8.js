let osc; //oscillator variable
    let playing = false;

let myFont;

function preload() {
  // Load the font file. Make sure the path matches where your font is stored!
  myFont = loadFont("data/bianzhidai_noBG-Cube.otf");
}

    function setup() {
      // Create a canvas to fill the window
      createCanvas(windowWidth, windowHeight);

      // Initialize an oscillator
      osc = new p5.Oscillator('square'); // can be 'sine', 'triangle', 'sawtooth', 'square'

      // We won't start it immediately because browsers require user interaction
      // before audio playback is allowed.
      
      textFont(myFont);

      
    }

    function draw() {
      background(0,255,127);
      tint(200, 5)

      // If playing, adjust sound based on mouse position
      if (playing) {
        // Map mouse X to frequency (pitch)
        // Range from 100Hz to 1000Hz is a good audible range
        let freq = map(mouseX, 0, width, 100, 1000);
        osc.freq(freq);

        // Map mouse Y to amplitude (volume)
        // Y goes from 0 at top to height at bottom
        // We'll map top (0) to max volume (1.0) and bottom (height) to min volume (0.0)
        let amp = map(mouseY, 0, height, 1.0, 0.0);
        osc.amp(amp, 0.1); // 0.1 is the smoothing time to avoid clicks

        // Visualize the sound
        // Draw a circle that changes size based on amplitude and color based on frequency
        let r = map(freq, 100, 1000, 0, 255);
        let b = map(freq, 100, 1000, 255, 0);
        fill(r, 600, b);
        noStroke();
        //stroke("white");
       //strokeWeight(2);

        let size = map(amp, 0, 1, 10, min(width, height) / 2);
        circle(mouseX, mouseY, size, size); //(try changing this to a different shape!)
      } else {
        // Draw prompt if not playing
        fill(255);
        textAlign(CENTER, CENTER);
        textSize(35);
        text("Click and drag to make sound", width / 2, height / 2); //stick some instructions in there
      }

      // Display current values if playing
      if (playing) {
        fill(255);
        textAlign(LEFT, TOP);
        textSize(30);
        text(`Freq: ${Math.round(osc.getFreq())} Hz\nAmp: ${osc.getAmp().toFixed(2)}`, 20, 20);
      }
   draw_2();
  }

function draw_2() {
    // Add multiple particles per frame
    for (let i = 0; i < 5; i++) {
        let x = random(width); // Random x position across the canvas
        let y = random(height); // Random y position across the canvas
        let r = random(0.2, 120); // Random radius for the star, smaller values for more distant stars
        let hue = random(360); // Random hue for color variation (used for our HSB)
        
        fill(hue, 500, 600); // Set fill color with random hue and some saturation and brightness
        noStroke(); // No outline for the stars
        square(x, y, r); // Draw the star as a circle at the random position with the random radius
    }
    
    // Fade background faster for trails
    background(0, 0, 0, 0.5); // Black background with low opacity to create a fading effect
}


    // Start playing sound when mouse is pressed
    function mousePressed() {
      // Start the audio context if it isn't running yet
      userStartAudio();

      if (!playing) {
        osc.start();
        playing = true;
      }
    }

    // Stop playing sound when mouse is released
    function mouseReleased() {
      if (playing) {
        // Ramp amplitude to 0 over 0.5 seconds to avoid a click
        osc.amp(0, 0.5);
        // Stop oscillator after the ramp
        setTimeout(() => {
          osc.stop();
          playing = false;
        }, 500);
      }
    }

    // Standard code to handle window resizing
    function windowResized() {
      resizeCanvas(windowWidth, windowHeight);
    }
