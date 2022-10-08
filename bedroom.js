img = "";

function preload()
{
    img = loadImage("bedroom.jpg");
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
    text("Bed", 45, 180);
    noFill();
    stroke("#3243c2");
    rect(30, 160, 450, 350);
}