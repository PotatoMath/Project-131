img = "";

function preload()
{
    img = loadImage("bathroom.jpg");
}

function setup()
{
    canvas = createCanvas(640,420);
    canvas.center();
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#3243c2");
    text("Bathtub", 45, 270);
    noFill();
    stroke("#3243c2");
    rect(30, 250, 410, 150);
}