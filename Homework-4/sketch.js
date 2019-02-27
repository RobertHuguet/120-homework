function setup() {
    // create a canvas to draw on
    createCanvas( 600, 800 );
}

function draw() {

    // background
    background('#73c4d1');

//MAIN SANDBOX****
    push()
    translate(300, 400);

    push()

//BODY****

    fill('rgb(49, 218, 31)');
    ellipse( 0 ,50, 190, 320 );

//Smile pattern Shirt****
    fill('rgb(242, 255, 0)');
    ellipse( 0 ,50, 120, 120 );
    fill('rgb(0, 0, 0)');
    ellipse( 25 ,37.5, 30, 30 );
    fill('rgb(0, 0, 0)');
    ellipse( -25 ,37.5, 30, 30 );
    triangle(25, 20, -25, 20, 12.5, 10)
    rotate(radians(180))
    triangle(25, -20, -25, -20, 12.5, -10)
    translate(0, -48)
    triangle(35, -20, -35, -20, 12.5, -40)
    pop()

    pop()

  }

//BODY END****
