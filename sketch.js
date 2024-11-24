// global
let csk, vox1, vox2, swv;

function preload() {
  csk = loadSound("assets/clock_snare_kick.mp3");

  vox1 = loadSound("assets/vox1.mp3");

  vox2 = loadSound("assets/vox2.mp3");

  swv = loadSound("assets/sawwave.mp3");
}

let sounds = [];
let currentPage = 0;
let radius;
let str = "birth   sun   spirit   freedom   ";

function setup() {
  createCanvas(900, 600);
  textFont("Courier New");
  radius = min(width,height)/3;
}

function draw() {

  // switch between intro page and music page 

  musicPage()
  textCircle();

  // if (currentPage == 0) { // page 0 is intro page
  //   introPage(); // runs introPage
  // } else if (currentPage == 1) { // page 1 is music page
  //   musicPage(); // runs musicPage
  //   textCircle();
  // }

}

// displays intro page. it includes name of song and instructions.

function introPage() {

  background(0);
  fill("#B1BC83");
  textAlign(CENTER);
  textStyle(BOLD);

  // title of song and the music video game

  push();
  textSize(30);
  text("solar", width/2, height/2 - (15));
  pop()

  // instructions for music video game
  textStyle(BOLDITALIC);
  textSize(20);
  text("press the number keys to make music", width/2, height/2 + (20));

}

function musicPage() {
  background("#B1BC83");
  fill("black");
  circle(width/2, height, 900);
}


// text on circle tutorial: https://www.youtube.com/watch?v=pBtgOdAnoJI 
function textCircle() {

  // push();
  // noFill();
  // stroke(0,150,255);
  // circle(width/2, height, radius*4); // circle as a guide
  // pop();

  let angleBtwLetters = TWO_PI/str.length; 
  // calculates the angle btw letters in a str, based on the # of letters in the str

  push();

  translate(width/2, height);
  textAlign(CENTER, BASELINE);
  textSize(radius/5) // makes text size dynamic

  for(let i = 0; i < str.length; i++) {

    push();

    let angle = i*angleBtwLetters + (frameCount * 0.0025); 
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

function beat() {
  csk.play();
}

function sawWave() {
  swv.play();
}

function keyPressed() {

  if (currentPage == 0) {
    currentPage = 1;
    beat();
  } 

  if (key === '1') {
    sawWave();
  }
}