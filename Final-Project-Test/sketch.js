
let rectangles = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    }

function draw() {
    background(96, 225, 232);

    for (let i = 0; i < rectangles.length; i++) {
        rectangles[i].rectangleCheck(rectangles, i);
        rectangles[i].edgeCheck();
        rectangles[i].move();
        rectangles[i].display();
    }
}

function mouseClicked() {
  let r = map(mouseX, 0, windowWidth, 0, 255);
  let g = map(mouseY, 0, windowHeight, 0, 255);
  let b = map(mouseY, 0, windowHeight, 0, 255);
  let size = random(10, 50);
      let newObj = new Square(mouseX, mouseY, size, r, g, b);
      rectangles.push(newObj);
}
function mouseDragged() {


}
