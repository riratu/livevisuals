let megaArray = [[10, 20],
    [20, 40]]
newX = 0
newY = 0
randomSize = 2
walkingDistance = 100

function setup() {
    createCanvas(windowWidth, windowHeight)
    w = windowWidth
    h = windowHeight
    noFill();
    newX = w/2
    newY = h/2
}
function draw() {
    //drawingContext.filter = 'blur(2px)';
    if (millis() % 200 < 10) randomSize = random(20)
    if (millis() % 300 < 10) walkingDistance = random(100)
    stroke(millis() % 333 / 333 * 255, millis() * 0.13 % 10000 / 10000 * 255, millis() % 1000 / 1000 * 255)

    //Fill Background
    fill(0, 0, 0, 200)
    if (millis() % 1000 < 10) rect(9, 0, w, h)
    beat = millis() % 500 / 500 - 1
    //newX = megaArray[megaArray.length -1 ][0] + random (-10, 10)
    //newY = megaArray[megaArray.length -1][1] + random (-10, 10)
    newX += random(walkingDistance * -1, walkingDistance)
    if (newX > w || newX < 0){
        newX = w/2
    }
    newY += random(walkingDistance * -1, walkingDistance)
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
        megaArray[i][0] += random(-randomSize +3, randomSize)
        megaArray[i][1] += random(-randomSize -3, randomSize)
        curveVertex(megaArray[i][0] , megaArray[i][1]);
        //circle(megaArray[i][0], megaArray[i][1], 20)
    }
    endShape();
    if (megaArray.length > 150) megaArray.shift()
}