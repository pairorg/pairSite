var w = window.innerWidth;
var h = window.innerHeight;

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

function setup() {
  createCanvas(window.screen.width, window.screen.height);
}

function draw() {
  basics();
  texts();
  getLayoutBounds();
  keepWindowSizeUpToDate();
}

function basics() {
  background(100);
  rectMode(CORNER);
  fill(200);
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
  fill(0);
  textAlign(CENTER);
  textSize(40);
  text("Contact Us", w/2, h/7);
}

function keepWindowSizeUpToDate() {
  w = window.innerWidth;
  h = window.innerHeight;
}