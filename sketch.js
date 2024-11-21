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
  createCanvas(windowWidth / 1.25, windowHeight / 1.25);
  textFont("Courier New");
}

function draw() {

  if (currentPage == 0) {
    introPage();
  } else if (currentPage == 1) {
    musicPage();
  }
  
}

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
  background("pink");
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