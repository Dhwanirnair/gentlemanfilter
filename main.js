noseX=0;
noseY=0;
leftEyeX=0;
leftEyeY=0;
leftEarX=0;
leftEarY=0; 

function preload() 
{
     gentleManHat= loadImage("https://i.postimg.cc/9FPwwV27/gentleman-hat.png");
     gentleManMonocle= loadImage("https://i.postimg.cc/KvhJyZQk/gentleman-monocle.png");
     gentleManMustache= loadImage("https://i.postimg.cc/tgcNvyYg/gentleman-mustache.png");
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
}

function modelLoaded()
{
    console.log("poseNet has Inigieliced");
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if (results.length > 0) 
    {
        console.log(results);
        leftEarX = results[0].pose.leftEar.x - 100;
        leftEarY = results[0].pose.leftEar.y - 120;
        console.log("left ear x = " + leftEarX);
        console.log("left ear y = " + leftEarY);
        /*hat*/
        leftEyeX = results[0].pose.leftEye.x - 50;
        leftEyeY = results[0].pose.leftEye.y - 20;
        console.log("left eye x = " + leftEyeX);
        console.log("left eye y = " + leftEyeY);
        /*monocole*/
        noseX = results[0].pose.nose.x - 20;
        noseY = results[0].pose.nose.y - 2;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
        /*mustache*/
    }
}

function draw()
{
    image(video, 0, 0, 300, 300);
    image(gentleManHat, leftEarX, leftEarY, 100, 100);
    image(gentleManMonocle, leftEyeX, leftEyeY, 100, 100);
    image(gentleManMustache, noseX, noseY, 45, 45);
}

function take_snapshot()
{
    save('myFilterImage.png');
}