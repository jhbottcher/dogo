function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(50,300,200);
  fill(100,125,150)
  circle(-100,-20,100)
  ellipse(0,25,200,125)
  triangle(-70, -55, -78, -110, -96, -55)
  triangle(-100, -55, -108, -110, -126, -55)
  rect(35,50,10,100)
  rect(65,50,10,100)
  rect(-35,50,10,100)
  rect(-65,50,10,100)
  rect(100,20,100,10)
  fill(10,10,10)
  circle(-120,-30,10)
  circle(-80,-30,10)
}