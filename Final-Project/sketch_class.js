class Ball {
    constructor(x, y, size, r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.size = size;
        this.radius = this.size / 2;
        this.x = x;
        this.y = y;
        this.deltaX = random(-1, 1);
        this.deltaY = random(-2, 8);
    }

    display() {
        noStroke();
        fill(this.r, this.g, this.b);
        ellipse(this.x, this.y, this.size);

    }

    move() {
        this.x += this.deltaX;
        this.y += this.deltaY;
    }

    edgeCheck() {
        if (this.y + this.radius >= height || this.y - this.radius <= 0) {
            this.deltaY *= -1;

        }
    }

    ballCheck(otherBalls, myId) {
        for (let n = 0; n < otherBalls.length; n++) {

            if (n != myId) {
                let d = dist(this.x, this.y, otherBalls[n].x, otherBalls[n].y);
                let combinedR = this.radius + otherBalls[n].radius;

                if (d <= combinedR) {
                    this.deltaX *= -1;
                    this.deltaY *= -1;
                }
            }
        }
    }
}
