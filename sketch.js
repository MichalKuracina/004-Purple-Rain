let drops = [];

function setup() {
    createCanvas(800, 600);

    drops.push(new Drop(400, 0, 0));
}

function draw() {
    background(230, 230, 250);

    drops.forEach((drop) => {
        drop.update();
        drop.show();
    });
}
