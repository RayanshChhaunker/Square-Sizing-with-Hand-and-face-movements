noseX = 0;
noseY = 0;
rwX = 0;
lwX = 0;
diff = 0;
function setup() {
    video = createCapture(VIDEO);
    video.size(500, 500);

    canvas = createCanvas(500, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, lodad);
    poseNet.on('pose', gotresult);
}
function draw() {
    background('#E7E8E9');
    document.getElementById("differ").innerHTML = "The side of the square will be = " + diff + "px"
    fill("#F90093")
    stroke("#F90093")
    square(noseX, noseY, diff)
}
function lodad() {
    console.log("LOODDAADD :) ");
}

function gotresult(results) {
    if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log(noseX + " " + noseY)

        lwX = results[0].pose.leftWrist.x;
        rwX = results[0].pose.rightWrist.x;
        diff = floor(lwX - rwX);
        console.log("lw = " + lwX + " " + rwX + "DIFF = " + diff);
    }
}