
let balls = [];
let size = random(20, 40);
let count = 0;
function setup() {
    createCanvas(windowWidth, windowHeight);

    //let firstBall = new Ball(1000, 1000, 50, 223, 32, 93);
    //balls.push(firstBall);
    frameRate(10);
    background(66, 201, 210);
}
function draw() {

    for (let i = 0; i < balls.length; i++) {
        balls[i].ballCheck(balls, i);
        balls[i].edgeCheck();
        balls[i].move();
        balls[i].display();
        if ((balls.length) >= 300) {
          balls.splice(0,1);
        }
    }
}

function mouseDragged() {
  let r = map(mouseX, 0, windowWidth, 0, 255);
  let g = map(mouseY, 0, windowHeight, 0, 255);
  let b = map(mouseY, 0, windowHeight, 0, 255);
  let size = random(20, 40);
  if ((balls.length) <= 10) {
    size = random(40, 50);
  }
  else if ((((balls.length) <= 20)) && (((balls.length) >= 10))) {
    size = random(50, 60);
  }
    else {size = random(60, 80)}

      let newBall = new Ball(mouseX, mouseY, size, r, g, b);
      balls.push(newBall);
}
function mouseClicked() {
  let r = map(mouseX, 0, windowWidth, 0, 255);
  let g = map(mouseY, 0, windowHeight, 0, 255);
  let b = map(mouseY, 0, windowHeight, 0, 255);
  let size = random(20, 40);
  if ((balls.length) <= 10) {
    size = random(40, 50);
  }
  else if ((((balls.length) <= 20)) && (((balls.length) >= 10))) {
    size = random(50, 60);
  }
    else {size = random(60, 80)}

      let newBall = new Ball(mouseX, mouseY, size, r, g, b);
      balls.push(newBall);
}
