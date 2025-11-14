let drops = [];

function setup() {
    createCanvas(800, 600);

    for (let i = 0; i < 500; i++) {
        let startingX = random(-width / 2, width);
        let startingY = random(-height, 0);
        let depth = random(1, 20);
        drops.push(new Drop(startingX, startingY, depth));
    }
}

function draw() {
    background(243, 212, 255);

    drops.forEach((drop) => {
        drop.update();
        drop.show();
    });
}
