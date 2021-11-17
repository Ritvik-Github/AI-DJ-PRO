song1 = "";
song2 = "";
function preload(){
    song1 = loadSound("DEAF KEV - Invincible [NCS Release].mp3");
    song2 = loadSound("Warriyo - Mortals (feat. Laura Brehm) [NCS Release].mp3");
};
function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,600,500);
}
function start(){
    song2.play();
}