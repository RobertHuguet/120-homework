
//initialize variables
let ball = {
width: 40,
x: 10,
y: 10,
delta_x: 2,
delta_y: 2,
scale_x: 1,
scale_y: 1,
r: 86,
g: 159,
b: 195,
t: 100
};
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
}



function draw() {
    translate(0, 0);
    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;


    if (ball.x >= width - 140 || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
        ball.r = floor(random(256));
        ball.g = floor(random(256));
        ball.b = floor(random(256));
        ball.t = floor(random(50,151));
        };

    if (ball.y >= height - 20 || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
        ball.r = floor(random(256));
        ball.g = floor(random(256));
        ball.b = floor(random(256));
        ball.t = floor(random(50,151));
        };

    noStroke();

    fill(ball.r, ball.g, ball.b, ball.t);
    ellipse(ball.x, ball.y, ball.width, ball.width);
    translate(40, 0);
    ellipse(ball.x, ball.y, ball.width, ball.width);
    translate(40, 0);
    ellipse(ball.x, ball.y, ball.width, ball.width);
    translate(40, 0);
    ellipse(ball.x, ball.y, ball.width, ball.width);
};

function mousePressed() {
    ball.scale_x = map(mouseX, 0, width, 0.5, 10);
    ball.scale_y = map(mouseY, 0, height, 0.5, 10);

};
