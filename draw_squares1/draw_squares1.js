function setup() {
createCanvas(windowWidth, windowHeight)
  background(0,0,255);
}


function draw() {
  square(mouseX,mouseY,100);
fill(255,255,0);
stroke(0,0,0);
strokeWeight(2);
//noStroke();
if (mouseIsPressed) {
  fill(0,0,255);}
}

function keyPressed() {
  if (key === 's') {
  // Save the canvas to 'myCanvas.jpg'.
  saveCanvas('myCanvas.jpg');}
}
