//Initialize the locations of 2 ellipse at a global level
let circle = {
  x: 0,
  y: 0,
  s: 0
};

let circle1 = {
  x: 0,
  y: 0,
  w: 0,
  h: 0
};

//Global color for background changes
let colorBg = {
  r: 0,
  g: 0,
  b: 0
};

//Global color values for shapes: red, green, blue
let colorSp = {
  r: 0,
  g: 0,
  b: 0
};

let colorSp1 = {
  r: 0,
  g: 0,
  b: 0
};

function setup() {
createCanvas(windowWidth, windowHeight);
background('rgb(18, 184, 201)');
frameRate(7);
};

//when the mouse is clicked the background changes to the position of the mouse
//and a random number from 0 - 255
function mouseClicked() {
  colorBg.r = map(mouseX, 0, windowWidth, 0, 255);
  colorBg.g = map(mouseY, 0, windowHeight, 0, 255);
  colorBg.b = floor(random(0, 255));

  background(colorBg.r, colorBg.g, colorBg.b);
};

function draw() {
  fill(255);
  stroke(1);
  rect(0, 15, 320, 40);
  fill(0);
  noStroke();
  text("Click the mouse in different places!", 10, 30);
  text("The colors change based on where you click the mouse.", 10, 45);

// Setup and draw circle
  noStroke();
  colorSp.r = map(mouseX, 0, windowWidth, 0, 255);
  colorSp.g = map(mouseY, 0, windowWidth, 0, 255);
  colorSp.b = floor(random(0, 255));
  colorSp.b = colorSp.b + (colorSp.b % colorSp.r);
  circle.x = ceil(random(0, windowWidth - 20));
  circle.y = ceil(random(0, windowHeight - 20));
  circle.s = floor(random(0, 20));
  fill(colorSp.r, colorSp.g, colorSp.b);
  ellipse(circle.x, circle.y, circle.s);

  colorSp1.r = colorSp.r - random(0, 20);
  colorSp1.g = colorSp.g - random(0, 20);
  colorSp1.b = colorSp.b;
  circle1.x = ceil(random(0, windowWidth - 20));
  circle1.y = ceil(random(0, windowHeight - 20));
  circle1.w = floor(random(0, 30));
  circle1.h = floor(random(0, 60));
  fill(colorSp1.r, colorSp1.g, colorSp1.b, random(50, 150));
  ellipse(circle1.x, circle1.y, circle1.w, circle1.h);
};
