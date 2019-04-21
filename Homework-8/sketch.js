function setup() {
  //create canvas size to fit the window
	createCanvas(windowWidth, windowHeight);
  //lower the frame rate to see color changes
  frameRate(2);
}

function draw() {
  //set the background color based on where the mouse is
	background((map(mouseX, 0, width, 0, 255)), (map(mouseY, 0, width, 0, 200)), random(255));
  fill(255);
  //remove the outlines
  noStroke();
  //make the sun at the top
  ellipse(50, 50, 30, 30);
  //set the y position
  //start at y = 10
  //run while y is less that height
  //move the sting of circles up 15 on the y axis
	for (let y = 10; y <= height; y += 15) {
    //create the circles across the x axis at the y position
    //start the process at x = 0
    //run while x <= to the width of the page
    //move the circles over 15 each time
		for (let x = 0; x <= width; x += 15) {
      //reduce the size of the circle as it goes up the page
      let size = y/25;
      //change the color of the circles from a dark grey to white
      //map the height of the window between dark grey 10 and white 255
      fill(map(y, 0, windowHeight, 255, 10));
      //draw the circle at the pirameters and at the size
			ellipse(x, y, size, size);
		}
	}
}
