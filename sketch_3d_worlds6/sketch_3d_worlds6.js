function setup() {
createCanvas(windowWidth, windowHeight, WEBGL); 
}


function draw() {
  background("blue");
  
  ambientLight(80);
  
  directionalLight(255, 255, 255, -0.2, 2, -1);
  
  push(); // build plane
  translate(0, 120, 0);
  rotateX(HALF_PI); // rotate the plane to flat
  noStroke();
  fill("green");
  plane(700, 700);
  pop();
  
  push(); // box
  translate(0, -40, 0); // pushes box up
  noStroke();
  
 // rotateY(frameCount * 0.01);
 // rotateX(frameCount * 0.006);
  
  rotateY(map(mouseX, 0, width, -PI, PI));
  rotateX(map(mouseY, 0, height, -PI / 2, PI / 2));
  
  fill("red"); // colour of box
  box(mouseX);
  pop();
  
  push(); //sphere
 // translate(220, -20, 0); // static sphere
 translate(cos(frameCount * 0.02) * 240, -20, sin(frameCount * 0.02) * 240);
 
  noStroke();
  fill("purple");
  sphere(55); // only arguement is radius
  pop();

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
