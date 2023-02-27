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
}

function modelLoaded() 
{
    console.log("PoseNet is initialized");
}

function gotPoses(results) 
{
    if (results.length > 0) {
        console.log(results);
    } else 
    {
        console.log('error');
    }
}