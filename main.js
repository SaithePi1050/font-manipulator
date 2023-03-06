noseX = 0;
noseY = 0;
difference = 0;
RightWristX = 0;
LeftWristX = 0;

function setup() 
{
    video = createCapture(VIDEO);
    video.size(550,  500);

    Canva = createCanvas(550, 550);
    Canva.position(600, 130);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() 
{
    background('#00FE1A');
    fill('white');
    stroke('black');
    textSize(difference);
    text("Sai", noseX, noseY);
}

function modelLoaded() 
{
    console.log("PoseNet is initialized");
}

function gotPoses(results) 
{
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY);

        LeftWristX = results[0].pose.leftWrist.x;
        RightWristX = results[0].pose.rightWrist.x;
        difference = floor(LeftWristX - RightWristX);

        console.log("Difference : " + difference);
    } else 
    {
        console.log('error');
    }
}