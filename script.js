leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreLY = 0;
scoreRY = 0;
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
    console.log(song[0]);
    console.log(song[1]);
    fill("red");
    stroke("red");
    InNumberLeftWristY = Number(leftWristY);
    floorLY = Math.floor(InNumberLeftWristY);
    InNumberRightWristY = Number(rightWristY);
    floorRY = Math.floor(InNumberRightWristY);
    circle(rightWristX,rightWristY,20);
    circle(leftWristX,leftWristY,20);
    if(scoreLY > 0.2){
        song[1].stop();
        if(song[0].isPlaying() == false){
            song[0].play();
            document.getElementById("song_name").innerHTML = "Song Name : DEAF KEV - Invincible [NCS Release]"
        }
    }
    if(scoreRY > 0.2){
        song[0].stop();
        if(song[1].isPlaying() == false){
            song[1].play();
            document.getElementById("song_name").innerHTML = "Song Name : Warriyo - Mortals (feat. Laura Brehm) [NCS Release]"
        }
    }
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        scoreLY = results[0].pose.keypoints[9].score;
        scoreRY = results[0].pose.keypoints[10].score;
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