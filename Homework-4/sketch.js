function setup() {
    // create a canvas to draw on
    createCanvas(600, 800);
}

function draw() {

// background
    background('#84ceda');



//MAIN SANDBOX****
    push();
    translate(300, 400);

    push();

//Left arm****
    stroke('rgb(47, 168, 21)');
    strokeWeight(60);
    line(-90, 10, -200, -100);
    line(-200, -100, -250, -200);
    rotate(radians(180));

//Right arm****
    stroke('rgb(47, 168, 21)');
    strokeWeight( 60 );
    line(-90, -10, -200, -100);
    line(-200, -100, -250, -200);
    rotate(radians(180));
    pop();
    push();

//Legs***
    stroke('rgb(47, 168, 21)');
    strokeWeight(40);
    line(-40, 170, -100, 260);
    line(20, 170, 100, 260);

//Feet
    strokeWeight(70);
    stroke('rgb(238, 7, 0)');
    point(-110, 250);
    point(110, 250);
    pop();

//Laces
    push();
    stroke('rgb(255, 255, 255)');
    strokeWeight(5)
    noFill();
    arc(-110, 250, 50, 55, radians(280), radians(350));
    arc(-125, 250, 50, 50, radians(300), radians(350));
    arc(-140, 250, 50, 50, radians(320), radians(350));
    arc(-152, 250, 50, 50, radians(340), radians(350));
    rotate(radians(220));
    translate(-135, -350)
    arc(-110, 250, 50, 55, radians(280), radians(350));
    arc(-125, 250, 50, 50, radians(300), radians(350));
    arc(-140, 250, 50, 50, radians(320), radians(350));
    arc(-152, 250, 50, 50, radians(340), radians(350));
    pop();

//BODY****
    push();
    stroke('rgb(11, 119, 0)');
    strokeWeight(4);
    fill('rgb(49, 218, 31)');
    ellipse(0 ,50, 190, 320);

    pop();

//Face****
    push();
    translate(0,-50);
    stroke('rgb(229, 236, 100)');
    fill('rgb(229, 236, 100)');
    ellipse( 0 ,50, 120, 120 );
    stroke('rgb(0, 0, 0)');
    fill('rgb(0, 0, 0)');
    ellipse(25 ,37.5, 30, 30);
    fill('rgb(0, 0, 0)');
    ellipse(-25 ,37.5, 30, 30);
    triangle(25, 20, -25, 20, 12.5, 10);
    rotate(radians(180));
    triangle(25, -20, -25, -20, 12.5, -10);
    translate(0, -48);
    triangle(35, -20, -35, -20, 12.5, -40);
    pop();

    push();
    stroke('rgb(0, 0, 0)')
    textSize(30)
    text("Avacado Man", -90, -150);
    pop();

    pop();

  }

//BODY END****
