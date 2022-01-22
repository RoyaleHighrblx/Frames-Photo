function preload(){

}

function setup(){
    canvas = createCanvas(680,500);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 630, 470);
    fill(0,-255)
    stroke(80,220,100);
    strokeWeight(9)
    rect(10,20,620,450);

    fill(70,180,180);
    ellipse(34,34,55,55,);
    ellipse(610,34,55,55,);
    ellipse(33,450,55,55,);
    ellipse(610,450,55,55,);
}

function take_snapshot(){
    save('frames_project.png');
}
