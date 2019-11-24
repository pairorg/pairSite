// Init Variables For Top Section
var topSectSX;
var topSectSY;
var topSectFX;
var topSectFY;

// Init Variables For Main Text Section
var mainTextSectSX;
var mainTextSectSY;
var mainTextSectFX;
var mainTextSectFY;

// Init Effects
var effects = [];

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
  background(255, 0, 200);
  for (var i = 0; i < 500; i++) {
    effects[i] = new Effects();
  }
}

function draw() {
  basics();
  texts();
  getLayoutBounds();
  keepWindowSizeUpToDate();
  for (var i = 0; i < effects.length; i++) {
    effects[i].fall();
    effects[i].show();
  }
}

function basics() {
  noStroke();
  background(0);
  rectMode(CORNER);
  fill(100);
  rect(0, 0, w, h/4);
}

function getLayoutBounds() {
  // Top Sect Cords
  topSectSX = 0;
  topSectSY = 0;
  topSectFX = w;
  topSectFY = h/4;
  
  // Text Area Cords
  mainTextSectSX = 0;
  mainTextSectSY = h/4;
  mainTextSectFX = w;
  mainTextSectFY = h;
}

function texts() {
  // Header
  noStroke();
  fill(255);
  textAlign(CENTER);
  textSize(40);
  text("Contact Us", w/2, h/7);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}