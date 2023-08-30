let megaArray = [[10, 20],
    [20, 40]]
newX = 0
newY = 0

function setup() {
    createCanvas(windowWidth, windowHeight)
    w = windowWidth
    h = windowHeight
    stroke(255);
    noFill();
    newX = w/2
    newY = h/2
}
function draw() {
    //Fill Background
    fill(0, 0, 0, 10)
    rect(9, 0, w, h)
    beat = millis() % 500 / 500 - 1
    //newX = megaArray[megaArray.length -1 ][0] + random (-10, 10)
    //newY = megaArray[megaArray.length -1][1] + random (-10, 10)
    newX += random(-50, 50)
    if (newX > w || newX < 0){
        newX = w/2
    }
    newY += random(-50, 50)
    if (newY > h || newY < 0){
        newY = h/2
    }
    text(50, 50, 100, "eins")
    megaArray.push([newX, newY])
    drawVertex(megaArray)
}

function drawVertex(megaArray){
    beginShape();
    for (i=0; i<megaArray.length; i++){
        megaArray[i][0] += random(-10, 10)
        megaArray[i][1] += random(-10, 10)
        curveVertex(megaArray[i][0] , megaArray[i][1]);
    }
    endShape();
    if (megaArray.length > 100) megaArray.shift()
}