Your Name, Your Section Number

[Live Sketch Link](Your Live Link)


# HW 7 | Describe then Alter the Bouncing Ball

## Description of What the Original Code is Doing

This week I worked on adding to and changing a sketch provided to us. The sketch does the same thing that DVD players used to in a pause screen but instead of bouncing an icon a ball bounces around the screen and leaves a trail behind.

let ball = {};
ball.width = 40; //set the ball width to 40
ball.x = 10;     //initialize the ball at 10,10
ball.y = 10;
ball.delta_x = 1; //initializes the direction of the ball
ball.delta_y = 1;
ball.scale_x = 1; //initializes the speed of the ball's movement
ball.scale_y = 1;

function setup() {
    createCanvas(windowWidth, 400); //set the canvas window size
    background(255); //background set to white
}



function draw() {
    // moves the ball at the given direction and speed
    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;

    //reverses the direction of the ball when it hits the edge of the canvas at the x or y axis
    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }
    //draws the ball
    fill(255);
    ellipse(ball.x, ball.y, ball.width, ball.width);
}
    //changed the speed of the ball based on where you click the mouse, consequently it also slightly changes the direction of the ball
function mousePressed() {
    ball.scale_x = map(mouseX, 0, width, 0.5, 10);
    ball.scale_y = map(mouseY, 0, height, 0.5, 10);


## How did you alter the sketch?

My editing included adding more circles across the x-axis that moves together on the y axis. They change to a random color every time the circles bounce off of the ends of the canvas. They are also slightly translucent. I have also increased the distance between the circles.

I wanted the colors to be based on where on the circles hit the canvas, but I never really figured it out. I ended up sticking with a random color which still looks pretty cool.
