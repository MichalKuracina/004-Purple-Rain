class Drop {
    constructor(x, height, depth) {
        this.startingX = x;
        this.x = this.startingX;
        this.height = height;
        this.depth = depth;
        this.startVelocity = this.remap(this.depth, 1, 20, 5, 15);
        this.velocity = this.startVelocity;
        this.y = this.height;
        this.dropLength = this.remap(this.depth, 1, 20, 5, 30);
        this.dropStrokeWeight = this.remap(this.depth, 1, 20, 1, 4);
        this.dropDirection = random(2, 3);
    }

    update() {
        this.x += 1;
        this.y = this.y + this.velocity;
        this.velocity += this.remap(this.depth, 1, 20, 0.03, 0.1); // gravity effect

        if (this.y > height) {
            this.y = this.height;
            this.velocity = this.startVelocity;
            this.x = this.startingX;
        }
    }

    show() {
        stroke(138, 43, 226);
        strokeWeight(this.dropStrokeWeight);

        line(this.x, this.y, this.x + this.dropDirection, this.y + this.dropLength);
    }

    remap(value, start1, stop1, start2, stop2) {
        return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
    }
}
