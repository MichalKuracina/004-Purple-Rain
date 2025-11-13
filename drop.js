class Drop {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.velocity;
    }

    update() {
        this.y = this.y + 1;
    }

    show() {
        stroke(138, 43, 226);
        strokeWeight(5);

        line(this.x, this.y, this.x, this.y + 10);
    }
}
