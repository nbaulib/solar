// EXERCISE #5
// By Michelle Lee, Nico Bautista-Libreros

// global
let csk, vox1, vox2, swv, sitar, guitar, bass; // variables for the instruments
let sounds = []; // vectors to hold the instruments 
let currentPage = 0; // page variable
let str = "luz   al   sol   le   pertnezco  "; // string of words
let textRadius; // controls how far away the text is placed from the center
let waveColors = ["#FDFE9C", "#FEFFB3", "#FEFFCC", "#FFFFE0", "#FFFFF2"] // shades of yellow in vector, used for the sun waves
let maxRadius = [600, 550, 500, 450, 400]; // vector of the max radiuses for each instruments' sun wave
let soundRadius = []; // the radius of the sun waves as it expands and decreases
let rVelocity = []; // velocity of radius movement 
let pressed = []; // holds true or false values for whether key is pressed or not

// loads in the instruments
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
  textRadius = min(width, height) / 3;

  for (let i = 0; i < sounds.length; i++) {
    soundRadius[i] = 0; // initialize radius values for each instrument (default to 0)
    rVelocity[i] = 0; // initialize velocity values for each sun wave (default to 0)
    pressed[i] = false; // default all values to false 
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
    soundCircles();
  }
}

// displays intro page. it includes name of song and instructions.
function introPage() { // MICHELLE X NICO

  background(0);

  // text stylization
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

function musicPage() { // MICHELLE

  // green background
  background("#B1BC83");

  for (let i=0; i <= sounds.length; i++) {

    // if key is pressed, change to darker color. else, switch to default color. 
    if (pressed[i]) {
      fill("#6A714F") // darker color
    } else {
      fill("#B1BC83"); // default color
    }
 
    // draws the keys 
    rect((width/5)*i, 0, width/5, height);

    // numbers the keys from 1 to 5
    push();
    fill("black");
    textStyle(NORMAL)
    textSize(30);
    text(i + 1, ((width / 5) * i) + 90, 100);
    pop();

  }

  // black semi circle
  push();
  fill("black");
  circle(width / 2, height, 900);
  pop(); 

  // guide circles
  push();
  noFill();
  stroke("white");
  circle(width / 2, height, 600);
  circle(width / 2, height, 550);
  circle(width / 2, height, 500);
  circle(width / 2, height, 450);
  circle(width / 2, height, 400);
  pop();

}

// text on circle tutorial: https://www.youtube.com/watch?v=pBtgOdAnoJI 
function textCircle() { // MICHELLE
  // calculates the angle btw letters in a str, based on the # of letters in the str
  let angleBtwLetters = TWO_PI / str.length;

  push();

  translate(width / 2, height); // shifts the origin of the canvas to the bottom center of the screen
  textAlign(CENTER, BASELINE);
  textSize(textRadius / 5) // makes text size dynamic
  textStyle(NORMAL)


  for (let i = 0; i < str.length; i++) {

    push();

    let angle = i * angleBtwLetters + (frameCount * 0.0025);
    // adding frameCount to create rotation

    rotate(angle);
    translate(0, -textRadius * 1.89);  // moves the text along the circle
    // -textRadius * 1.89 - affects how big or small the distance between the center of the canvas and the text will be

    fill("white");
    noStroke();
    text(str[i], 0, 0);

    pop();

  }
  pop();
}

function soundCircles() { // MICHELLE X NICO
  for (let i = 0; i < soundRadius.length; i++) {

    // increase or decrease the radius
    soundRadius[i] += rVelocity[i];

    // circle bounds
    if (soundRadius[i] < 0) {
      soundRadius[i] = 0;
      rVelocity[i] = 0; // stop shrinking
    } else if (soundRadius[i] > maxRadius[i]) {
      soundRadius[i] = maxRadius[i]; // stop growing
    }

    // draw circles
    push();
    fill(waveColors[i]);
    circle(width / 2, height, soundRadius[i]);
    pop();
  }
}

// ref: https://p5js.org/reference/p5/keyCode/
function holdSound() { // NICO

  for (let i = 0; i < sounds.length; i++) {
    let keyNumber = 49 + i; // starting from key "1" to "5"
    if (keyIsDown(keyNumber)) { // if corresponding key is held
      if (!sounds[i].isPlaying()) {
        sounds[i].play(); // only play if not already playing
        rVelocity[i] = 10; // increase radius
        pressed[i] = true;
      }
    }
  }
}

// ref: https://p5js.org/reference/p5/keyCode/
function keyReleased() { // NICO
  
  // a loop to stop sound when key is released
  for (let i = 0; i < sounds.length; i++) { 
    let keyNumber = 49 + i; // starting from key "1" to "5"
    if (keyCode == keyNumber) {
      sounds[i].stop();
      rVelocity[i] = -10; // decrease radius
      pressed[i] = false;
    }
  }
}

function keyPressed() { // NICO
  // when key pressed check page number and change accordingly
  if (currentPage == 0) {
    currentPage = 1;
    // 2 constant sounds
    csk.play();
    guitar.play();
  }
}