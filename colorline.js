let megaArray = []
newX = 0
newY = 0
randomSize = 7
walkingDistance = 50

function mouseMoved(){
    newY += (mouseY - newY) * 0.5
    newX += (mouseX - newX) * 0.5
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    w = windowWidth
    h = windowHeight
    stroke(255);
    noFill();
    newX = w/2
    newY = h/2
    megaArray.push([newX, newY])

}
function draw() {
    //Fill Background
    //stroke(0)
    strokeWeight(5)
    fill(0, 0, 0, 10)
    rect(0, 0, w, h)
    strokeWeight(1)
    beat = millis() % 500 / 500 - 1

    stroke(millis() % 333 + 50 / 10000 * 255, millis() * 1.3 % 10000 / 10000 * 255, millis() % 100 / 100 * 255)
    //newX = megaArray[megaArray.length -1 ][0] + random (-10, 10)
    //newY = megaArray[megaArray.length -1][1] + random (-10, 10)
    // newX += random(walkingDistance * -1, walkingDistance)
    // if (newX > w || newX < 0){
    //     newX = w/2
    // }
    // newY += random(walkingDistance * -1, walkingDistance)
    // if (newY > h || newY < 0){
    //     newY = h/2
    // }
    megaArray.push([newX, newY])
    drawVertex(megaArray)
}

function drawVertex(megaArray){
    beginShape();
    for (i=0; i<megaArray.length; i++){
        megaArray[i][0] += random(-randomSize, randomSize)
        megaArray[i][1] += random(-randomSize, randomSize)
        curveVertex(megaArray[i][0] , megaArray[i][1]);
        //circle(megaArray[i][0], megaArray[i][1], 20)
    }
    endShape();
    if (megaArray.length > 100) megaArray.shift()
}