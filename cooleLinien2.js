randomNumber = 0;
randomNumber2 = 0;
randomNumber3 = 0;
beatLength = 2500;
lastBeat = 0;

function setup() {
    createCanvas(windowWidth, windowHeight)
    w = windowWidth
    h = windowHeight
    noFill();
    stroke(255)
}

function draw() {
    stroke(millis() % 333 / 333 * 255, millis() * 0.13 % 10000 / 10000 * 255, millis() % 1000 / 1000 * 255)
    // Fill Background
    fill(0, 0, 0, 5)
    //if (millis() % 1000 < 10)
    rect(0, 0, w, h)
    //beat = millis() % 500 / 500 - 1
    //newX = megaArray[megaArray.length -1 ][0] + random (-10, 10)
    //newY = megaArray[megaArray.length -1][1] + random (-10, 10)
    //text(50, 50, 100, "eins")
    //megaArray.push([newX, newY])
    //drawVertex(megaArray)
    //rotate(5)

    offset = millis() % 500 / 500 * 50

    beat = false
    if (millis() > (lastBeat + beatLength)){
        lastBeat = millis()
        beat = true
    }

    if (beat == true){
        randomNumber = random(200)
        randomNumber2 = random(10)
        randomNumber3 = random(10)
    }

    for (i=0; i < h; i += 50){
        beginShape();
        for (x=0; x < w; x+= 50){
            y = i + (millis() % 1000 / 1000 * 300)

            if (x % 4 == 0) y = i + offset
            if (x % randomNumber3 < 0.5) y = i + (offset * (-1))
            //if (x % randomNumber2 < 0.2) y = i + randomNumber
            //if (x % randomNumber2 < 0.1) x = x + random(1)
            if (i % 7 == 0) x = x + random (-50, 50)
            if (i % 8 == 0) vertex(x , y);
            if (i % 3 == 0) curveVertex(x , y);

        }
        endShape();
    }
}