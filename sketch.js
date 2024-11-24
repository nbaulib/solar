// global
let csk, vox1, vox2, swv, sitar, guitar, bass;
let rSaw = 0;
let currentPage = 0;
let radius;
let str = "birth   sun   spirit   freedom   ";

function preload() {
  csk = loadSound("assets/clock_snare_kick.mp3");
  vox1 = loadSound("assets/vox1.mp3");
  vox2 = loadSound("assets/vox2.mp3");
  swv = loadSound("assets/sawwave.mp3");
  sitar = loadSound("assets/sitar.mp3");
  guitar = loadSound("assets/guitar.mp3");
  bass = loadSound("assets/bass.mp3")
}

function setup() {
  createCanvas(900, 600);
  textFont("Courier New");
  radius = min(width, height) / 3;
}

function draw() {
  // transition between intro page and music page 
  if (currentPage == 0) {
    introPage();
  } else if (currentPage == 1) {
    musicPage();
    textCircle();
    holdSound();
    animations();
  }
}

// displays intro page. it includes name of song and instructions.
function introPage() {
  background(0);
  fill("#B1BC83");
  textAlign(CENTER);
  textStyle(BOLD);

  // title of song
  push();
  textSize(30);
  text("solar", width / 2, height / 2 - (15));
  pop();

  // instructions
  push();
  textStyle(BOLDITALIC);
  textSize(20);
  text("press the number keys to make music", width / 2, height / 2 + (20));
  pop();

}

function musicPage() {
  background("#B1BC83");
  fill("black");
  circle(width / 2, height, 900);
}


// text on circle tutorial: https://www.youtube.com/watch?v=pBtgOdAnoJI 
function textCircle() {

  // push();
  // noFill();
  // stroke(0,150,255);
  // circle(width/2, height, radius*4); // circle as a guide
  // pop();

  let angleBtwLetters = TWO_PI / str.length;
  // calculates the angle btw letters in a str, based on the # of letters in the str

  push();

  translate(width / 2, height);
  textAlign(CENTER, BASELINE);
  textSize(radius / 5) // makes text size dynamic

  for (let i = 0; i < str.length; i++) {

    push();

    let angle = i * angleBtwLetters + (frameCount * 0.0025);
    // adding frameCount to create rotation

    rotate(angle);
    translate(0, -radius * 1.89);  // moves the text along the circle

    fill("white");
    noStroke();
    text(str[i], 0, 0);

    pop();

  }
  pop();
}

function animations() {
  // sawwave circle
  fill("white");
  circle(width / 2, height, rSaw);

}

// credit: https://p5js.org/reference/p5/keyCode/
function holdSound() {
  if (keyIsDown(49)) { // if "1" is pressed
    if (!swv.isPlaying()) {
      swv.play(); // only play if not already playing
    }
    // sawwave circle
    rSaw += 10;

    if (rSaw > 600) {
      rSaw -= 200; // bounce
    }
  }

  if (keyIsDown(50)) { // if "2" is pressed
    if (!vox1.isPlaying()) {
      vox1.play(); // only play if not already playing
    }
  }

  if (keyIsDown(51)) { // if "3" is pressed
    if (!vox2.isPlaying()) {
      vox2.play(); // only play if not already playing
    }
  }

  if (keyIsDown(52)) { // if "4" is pressed
    if (!sitar.isPlaying()) {
      sitar.play(); // only play if not already playing
    }
  }

  if (keyIsDown(53)) { // if "5" is pressed
    if (!bass.isPlaying()) {
      bass.loop(); // only play if not already playing
    }
  }
}

function keyReleased() {
  if (key == '1') {
    swv.stop();
  }

  if (key == '2') {
    vox1.stop();
  }

  if (key == '3') {
    vox2.stop();
  }

  if (key == '4') {
    sitar.stop();
  }

  if (key == '5') {
    bass.stop();
  }
}

function keyPressed() {
  if (currentPage == 0) {
    currentPage = 1;
    csk.play();
    guitar.play();
  }
}