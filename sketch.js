let sounds = [];

// credit: sam heckle - sound array demo 
// https://editor.p5js.org/samheckle/sketches/wY2UFabY6D
// function preload() {
//   for (let i = 0; i < 7; i++) {
//     let s = loadSound("assets/" + i + ".mp3");
//     sounds.push(s);
//   }
// }

let currentPage = 0;

function setup() {
  createCanvas(900, 600);
  textFont("Courier New");
}

function draw() {

  // switch between intro page and music page 

  musicPage()

  // if (currentPage == 0) { // page 0 is intro page
  //   introPage(); // runs introPage
  // } else if (currentPage == 1) { // page 1 is music page
  //   musicPage(); // runs musicPage
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
  rect(0, height/3, width, height*3/4, 900, 900, 0, 0);
}

function bass() {
  //sounds[0].play()
}

function clock() {
  //sounds[0].play()
}

function guitar() {
  //sounds[0].play()
}

function kick() {
  //sounds[0].play()
}

function sawWave() {
  //sounds[0].play()
}

function sitar() {
  //sounds[0].play()
}

function snare() {
  //sounds[0].play()
}

function vox() {
  //sounds[0].play()
}


function keyPressed() {

  if (currentPage == 0) {
    currentPage = 1;
  } 

  if (key === '1') {
    bass();
  } else if (key === '2') {
    clock();
  } else if (key === '3') {
    guitar();
  } else if (key === '4') {
    kick();
  } else if (key === '5') {
    sawWave();
  } else if (key === '6') {
    sitar();
  } else if (key === '7') {
    vox();
  }
}