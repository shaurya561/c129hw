song = "";
song1 = "";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;

function preload() {
    song=loadSound("Wolves.mp3");
    song1=loadSound("masked_wolf.mp3");
}


function setup() {
    canvas = createCanvas(600,500);
    canvas.center()
    
    video = createCapture(VIDEO);
    video.hide();
   
    poseNet =ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
   }
   
   function modelLoaded() {
       console.log('poseNet is initialized');
   }
   function gotPoses() {
    if(results.length >0) {
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoint[9].score;
        console.log("scoreLeftWrist = " + scoreLeftWrist)

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("Left Wrist X :" + leftWristX + "Left Wrist y" + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("Right Wrist X :" + rightWristX + "Right Wrist y" + rightWristY);
    }
}
   
   function draw() {
       image(video,0,0,600,500);
       fill("#FF0000");
       stroke("#FF0000");
   
       if(scoreLeftWrist > 0.2)
       {
           circle(leftWristX,leftWristY,20);
           song1.stop();
            if(song2_status ==false)
            song2.play();
            document.getElementById("song").innerHTML="playing Wolves.mp3";
           }
       }
   
   
   function play() {
       song.play();
       song.setVolume(1);
       song.rate(1);
   }
   