array = []

function setup() {
    createCanvas(windowWidth, windowHeight)
    w = windowWidth
    h = windowHeight
    stroke(255);
    noFill();
}
function draw() {
    //Fill Background
    fill(0, 0, 0, 5)
    rect(9, 0, w, h)
    beat = millis() % 500 / 500 - 1
    array.push([20, 30])
    if (frameCount % 100 == 0) drawVertex(array)
}

function drawVertex(array){
    beginShape();
    for (i=0; i<array.length; i++){
        curveVertex(w/100*i + random(105), random(h/2) + h/3);
    }
    endShape();
    if (array.length() > 100) array.shift()
}