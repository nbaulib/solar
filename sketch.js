let value = 0;

function setup() {
  createCanvas(900, 600);
}

function draw() {
  background(value);
}

function keyPressed() {
  if (key === '1') {
    value = 255;
  } else if (key === '2') {
    value = 0;
  }
}