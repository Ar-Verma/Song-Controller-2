butter = "";
dynamite = "";

function preload() {
    butter = loadSound("Butter.mp3");
    dynamite = loadSound("Dynamite.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500);
}