let myFont;
let points;
let sampleF;

// preload() runs before setup() to ensure our font is downloaded/loaded first.
function preload() {
  myFont = loadFont("data/Basteleur-Bold.otf");
}




function setup() {
  // The magic third argument, WEBGL, switches p5 into 3D mode.
  // Without it, box(), sphere() and lighting won't work.
  createCanvas(windowWidth, windowHeight, WEBGL); //<~~~~~~ WEBGL MODE ENABLED HERE

setup_2();
}


function setup_2() {
 //createCanvas(windowWidth, windowHeight);
 
  textAlign(LEFT, TOP);

  // This value controls how many points are generated on the text outline.
  sampleF = 0.05;

  // Extract our array of outline points!
  points = myFont.textToPoints('dimension', (width / 4) - 200, height / 2, 300, {
    sampleFactor: sampleF,
    simplifyThreshold: 0
  });

  // Notice we are NOT calling noLoop() here like the last sketch!
  // We want setup() to finish so draw() can run 60 times a second and animate our sketch.
}





function draw() {
  background(15, 17, 26);

  // --- 1. LIGHTING ---
  // In 3D, shapes look flat unless you add light.
  // ambientLight() is a gentle fill-light that hits every surface equally —
  // think of it as the brightness of a cloudy day.
  ambientLight(80);

  // directionalLight() is like the sun: one colour, one direction.
  // The last three numbers are a direction vector (x, y, z).
  // -0.2, 0.5, -1 means: slightly left, slightly down, strongly towards us.
  directionalLight(255, 255, 255, -0.2, 0.5, -1);

  // --- OPTIONAL: BLOB SHADOW (aka FAKE SHADOW) ---
  // Uncomment this whole block to draw a cheap soft shadow on the floor.
  // This is much faster/simpler than true real-time shadow mapping.
  push();
    // Place the shadow just above the floor to avoid z-fighting.
    translate(0, 119, 0);
    rotateX(HALF_PI); // Draw ellipse in the XZ ground plane
    noStroke();
    fill(0, 85); // black with alpha for softness
    ellipse(0, 0, 170, 110);
  pop();

  // --- 3. A ROTATING BOX ---
  // push() saves the current position and rotation so changes here
  // don't affect anything drawn afterwards.
  push();
    // translate() moves the origin — this is how you position things in 3D.
    // Positive Y is DOWN in p5, so negative Y moves the box up off the floor.
    translate(0, -40, 0); // Move the box up off the floor and into the scene a bit
    noStroke();

    // OPTIONAL INTERACTIVE POSITION VERSION:
    // Comment out the line above and uncomment the line below to move the box position with the mouse.
    // translate(map(mouseX, 0, width, -260, 260), map(mouseY, 0, height, -180, 120), 0);

    // frameCount increases by 1 every frame. Multiplying by a small number
    // makes the rotation slow and smooth. Try changing 0.01 to 0.05!
    rotateY(frameCount * 0.01);
    rotateX(frameCount * 0.006);

    // OPTIONAL INTERACTIVE VERSION:
    // Comment out the two rotate lines above and uncomment these to tilt with mouse position.
    // rotateY(map(mouseX, 0, width, -PI, PI));
    // rotateX(map(mouseY, 0, height, -PI / 2, PI / 2));

    fill(88, 201, 255); // Give the box its colour
    box(180); // A cube — one argument means all sides are equal length
  pop(); // Restore position/rotation before drawing the next shape

  // --- OPTIONAL: SPHERE BLOB SHADOW ---
  // Uncomment this whole block for a cheap floor shadow that follows the sphere.
  push();
    // Keep the shadow just above the floor to avoid flickering (z-fighting).
    // translate(220, 119, 100); // Match the static sphere translate option
    // Or match the orbiting sphere translate option:
    translate(cos(frameCount * 0.02) * 240, 119, sin(frameCount * 0.02) * 240);
    rotateX(HALF_PI);
    noStroke();
    fill(0, 75);
    ellipse(0, 0, 120, 80);
  pop();

  // --- 4. A SPHERE OFFSET IN DEPTH ---
  // The third argument of translate() is Z — depth.
  // A negative Z value pushes something away from you into the scene.
  // Notice how the sphere appears smaller than the box because of perspective.
  push();
    // translate(220, -20, 100); // Right, slightly up, and back into the scene
    // OPTIONAL ORBIT VERSION: comment out the line above and uncomment below.
    translate(cos(frameCount * 0.02) * 240, -20, sin(frameCount * 0.02) * 240);
    noStroke();
    fill(255, 190, 92);
    sphere(55); // A sphere — the one argument is the radius
  pop();
  
  draw_2();
}


function draw_2() {
  // Clear the background every frame so our moving lines don't smear
  // "blue" works as a built-in web color, or you can use RGB values!
 // background("blue");

  // A 'for' loop lets us iterate over every single point inside our 'points' array
  for (let i = 0; i < points.length; i++) {
    // Extract the exact X and Y coordinates for the current point
    let p = points[i];

    // --- 1. DRAW THE CONNECTING LINE ---
    // The line connects the point's coordinates to our current mouse position.
    // We set the stroke (line color) to white, but add a 4th argument (100) for transparency!
    // This looks much cleaner when hundreds of lines overlap.
    stroke(255, 255, 255, 50);
    strokeWeight(1);
    line(p.x, p.y, mouseX, mouseY);

    // --- 2. DRAW THE TWINKLING DOT ---
    // Generate a completely random RGB color every single frame for this specific dot
    let randomDotColor = color(random(255), random(255), random(255));

    // Set the fill to our random color, and give it a solid solid white outline
    fill(randomDotColor);
    stroke("white");
    strokeWeight(1);

    // Draw the dot exactly at the mathematical coordinate
    ellipse(p.x, p.y, 10, 10);
  }
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
  // Press S to save a screenshot of the canvas
  if (key === 's') {
    saveCanvas('3d_01_core_forms', 'jpg');
  }
}
