//Initialize the locations of 2 circles at a global level
let circle = {
  x: 50,
  y: 100,
  s: 0
};

let circle1 = {
  x: 100,
  y: 50,
  s: 0
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
  colorBg.b = floor(random(256));

  background(colorBg.r, colorBg.g, colorBg.b);
};

function draw() {

// Setup and draw circle
  colorSp.r = map(mouseX, 0, windowWidth, 0, 255);
  colorSp.g = map(mouseY, 0, windowWidth, 0, 255);
  colorSp.b = floor(random(256));
  circle.x = ceil(random(windowWidth - 20));
  circle.y = ceil(random(windowHeight - 20));
  circle.s = floor(random(21));
  fill(colorSp.r, colorSp.g, colorSp.b)
  ellipse(circle.x, circle.y, circle.s);
};
