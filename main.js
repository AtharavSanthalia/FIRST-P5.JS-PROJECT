function preload() {

}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

}

function draw() {
    image(video, 230 ,150 , 220, 200);
    fill
}

function take_snapshot(){
    save('student_name.png');
}
