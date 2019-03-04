function setup() {
  createCanvas( 800, 600 );
}
//setup of initial values global
let height = .4;
let length = .2;
let boxSize = 0;
let ellipseHeight = 0;
let rotation = 0;
let locationX = 0;
let locationXX = 800;
let locationY = 0;
let lineP = 0;
let lineN = 0;
function draw() {
//remove cursor
  noCursor();
//set background at every frame
  background( 'rgb(176, 233, 227)' );
//add value to variables
//set ellipse height to mouse x location with respect to width of canvas
  ellipseHeight = mouseX - 50;
//set box size to Mouse location of y axis
  boxSize = mouseY - 50;
//set ratation to mousex / mousey
  rotation = mouseX / mouseY;
//set the locationX direction to move right on the x-axis
  locationX = locationX + .5;
//set the locationxx direction to move left on the x-axis
  locationXX = locationXX - .5;

//****DRAWING SANDBOX****
  push();
//create set of 6 circles to move right on the x axis in white
  strokeWeight(0);
  fill('rgb(253, 252, 255)');
  ellipse(locationX, 100, mouseX, ellipseHeight);
  ellipse((locationX - 300), 100, mouseX, ellipseHeight);
  ellipse((locationX - 600), 100, mouseX, ellipseHeight);
  fill('rgb(251, 241, 227)');
  ellipse(locationX, 500, mouseX, ellipseHeight);
  ellipse((locationX - 300), 500, mouseX, ellipseHeight);
  ellipse((locationX - 600), 500, mouseX, ellipseHeight);
//create a set of 6 smaller circles in brushed pink to move left
  fill('rgb(255, 209, 199)');
  ellipse(locationXX + 200, 100, (mouseX / 2), (ellipseHeight / 2));
  ellipse(locationXX, 100, (mouseX / 2), (ellipseHeight / 2));
  ellipse(locationXX - 200, 100, (mouseX / 2), (ellipseHeight / 2));
  ellipse(locationXX + 200, 500, (mouseX / 2), (ellipseHeight / 2));
  ellipse(locationXX, 500, (mouseX / 2), (ellipseHeight / 2));
  ellipse(locationXX - 200, 500, (mouseX / 2), (ellipseHeight / 2));
  pop();
//set lineX lineXX lineXXX to grow
  lineP = lineP + .1;
//set lineN to shrink
  lineN = lineN - .1;
//box shape grean to move with the mouse and change size baset on the mouse location
    fill('rgb(100,173,100)');
    strokeWeight(0);
    rect(mouseX, mouseY, boxSize, boxSize,);
//create lines to grow from middle of canvas in push pop
  push();
//center the canvas
  translate(400, 300);
//create the lines in a star pattern
  stroke('rgb(192,192,192)');
  strokeWeight(10);
//first set of lines
  line(lineN, lineN, lineP, lineP);
  line(lineN, lineP, lineP, lineN);
  stroke('rgb(255,215,0)');
//rotate canvas 45 degrees
  rotate(radians(45));
//second set of lines at 45 degrees
  line(lineN, lineN, lineP, lineP);
  line(lineN, lineP, lineP, lineN);
  pop();


}
