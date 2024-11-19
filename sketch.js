let sounds = [];

// function preload() {
//   for (let i = 0; i < 7; i++) {
//     let s = loadSound("assets/" + i + ".mp3");
//     sounds.push(s);
//   }
// }

function setup() {
  createCanvas(windowWidth / 1.25, windowHeight / 1.25);
  textFont("Courier New");
}

function draw() {

  background(0);

  // stylization for game
  fill("#B1BC83");
  textStyle(BOLD);
  textAlign(CENTER);

  // title of song and the music video game
  textSize(30);
  text("solar", width/2, height/2 - (15));

  // instructions for music video game
  textSize(20);
  text("press the number keys to make music", width/2, height/2 + (20));

}

function instraOne() {

}

function instraTwo() {

}

function keyPressed() {
  if (key === '1') {
    instraOne()
  } else if (key === '2') {
    instraTwo()
  } else if (key === '3') {

  } else if (key === '4') {

  } else if (key === '5') {

  } else if (key === '6') {

  } else if (key === '7') {

  }
}