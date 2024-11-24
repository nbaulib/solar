// global
let csk, vox1, vox2, swv, sitar, guitar, bass;
let rSound = [];
let currentPage = 0;
let radius;
let str = "birth   sun   spirit   freedom   ";
let sounds = []; // arrays to hold sound: https://editor.p5js.org/owenroberts/sketches/r1qpN_kI7
let waveColors = ["#FDFE9C", "#FEFFB3", "#FEFFCC", "#FFFFE0", "#FFFFF2"]
let maxRadius = [600, 550, 500, 450, 400];

function preload() {
  csk = loadSound("assets/clock_snare_kick.mp3"); // const
  guitar = loadSound("assets/guitar.mp3"); // const
  sounds.push(loadSound("assets/vox1.mp3")); // sounds[0]
  sounds.push(loadSound("assets/vox2.mp3")); // sounds[1]
  sounds.push(loadSound("assets/sawwave.mp3")); // sounds[2]
  sounds.push(loadSound("assets/sitar.mp3")); // sounds[3]
  sounds.push(loadSound("assets/bass.mp3")); // sounds[4]
}

function setup() {
  createCanvas(900, 600);
  textFont("Courier New");
  radius = min(width, height) / 3;

  // initialize radius values for each instrument (default to 0)
  for (let i = 0; i < sounds.length; i++) {
    rSound[i] = 0;
  }

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
  text("press the number keys to make music.\nstart by hitting any key.", width / 2, height / 2 + (20));
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
  textStyle(NORMAL) // makes text size dynamic


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
  // circles
  for (let i = 0; i < rSound.length; i++) {
    fill(waveColors[i]);
    circle(width / 2, height, rSound[i]);
  }
}

// credit: https://p5js.org/reference/p5/keyCode/
function holdSound() {

  for (let i = 0; i < sounds.length; i++) {

    let keyNumber = 49 + i; // starting from key "1" to "5"

    if (keyIsDown(keyNumber)) { // if corresponding key is pressed

      if (!sounds[i].isPlaying()) {
        sounds[i].play() // only play if not already playing
      }

      rSound[i] += 10;
      if (rSound[i] > maxRadius[i]) {
        rSound[i] = maxRadius[i];
      }
    }

  }

}

// credit: https://p5js.org/reference/p5/keyCode/
function keyReleased() {

  for (let i = 0; i < sounds.length; i++) {

    let keyNumber = 49 + i; // starting from key "1" to "5"

    if (keyCode == keyNumber) {
      sounds[i].stop();
      rSound[i] = 0;
    }

  }

}

function keyPressed() {
  if (currentPage == 0) {
    currentPage = 1;
    csk.play();
    guitar.play();
  }
}