class Square {
    constructor(x, y, size, r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.size = size;
        this.radius = this.size / 2;
        this.x = x;
        this.y = y;
        this.deltaX = random(-1, 1);
        this.deltaY = random(6);
    }

    display() {
        noStroke();
        fill(this.r, this.g, this.b);
        rect(this.x, this.y, this.size, this.size);
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

    rectangleCheck(otherSquares, myId) {
        for (let n = 0; n < otherSquares.length; n++) {

            if (n != myId) {
                let d = dist(this.x, this.y, otherSquares[n].x, otherSquares[n].y);
                let combinedR = this.radius + otherSquares[n].radius;

                if (d <= combinedR) {
                    this.deltaX *= -1;
                    this.deltaY *= -1;
                }
            }
        }
    }
}
