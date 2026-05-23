function setup() {
createCanvas(windowWidth, windowHeight, WEBGL); 
}


function draw() {
  background("white");
  
  ambientLight(80);
  
  directionalLight(255, 255, 255, -0.2, 2, -1);
  
  push(); // build plane
 // translate(300, 100, 0);
  translate(sin(frameCount * 0.02) * 240, -20, tan(frameCount * 0.02) * 240);

  rotateX(HALF_PI); // rotate the plane to flat
  noStroke();
  fill("white");
  //plane(700, 700);
  sphere(50);
  pop();
  
  push(); // box
  translate(0, -20, 0); // pushes box up
  noStroke();
  
 // rotateY(frameCount * 0.01);
 // rotateX(frameCount * 0.006);
  
  rotateY(map(mouseX, 0, width, -PI, PI));
  rotateX(map(mouseY, 0, height, -PI / 2, PI / 2));
  
  fill("white"); // colour of box
  sphere(mouseX);
  pop();
  
  push(); //sphere
 // translate(220, -20, 0); // static sphere
 translate(tan(frameCount * 0.02) * 240, -20, tan(frameCount * 0.02) * 240);
 
  noStroke();
  fill("white");
  sphere(100); // only arguement is radius
  pop();

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
