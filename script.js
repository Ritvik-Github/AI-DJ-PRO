song = [];
function preload(){
    song[0] = loadSound("DEAF KEV - Invincible [NCS Release].mp3");
    song[1] = loadSound("Warriyo - Mortals (feat. Laura Brehm) [NCS Release].mp3");
};
function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("PoseNet Initialized ✔");
}
function draw(){
    image(video,0,0,600,500);
}
function start(){
    song[Math.floor(Math.random()*1)].play();
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("==Left Wrist==");
        console.log("Left Wrist X: " + leftWristX +"Left Wrist Y: " + leftWristY);
        console.log("==Right Wrist==");
        console.log("Right Wrist X: " + rightWristX +"Right Wrist Y: " + rightWristY);
    }
}