invert = 1
function setup() {
    createCanvas(windowWidth, windowHeight)
    w = windowWidth
    h = windowHeight
    rot = 0
    tStrH = 400
    strH = 200
}

function draw() {
    //Fill Background
    fill(0, 0, 0, 10)
    rect(0, 0, w, h)
    beatLength = 2000
    beat = millis() % beatLength / (beatLength/2) - 1

    invert *= (-1)
    beat *= invert
    invBeat = beat * -1 * invert
    //Rotate the Screen
    translate(windowWidth/2, windowHeight/2)
    //rotate(rot)
    rot += 0.05
    if (frameCount % 100 == 0) tStrH = random(h)
    dh = tStrH -strH
    strH+= dh * 0.05

    for (i=0; i < 10; i++) {
        stroke(255, 255, 0, 50)
        line(random(10) + beat * h/2, strH/2,random(10) +  beat * w/2, strH * -0.5)

        stroke((beat + 1) * 255,(invBeat + 1) * 255, millis() % 10000 / 10000)
        circle(random(30) + beat * w/2, random(strH) -strH/2, random(frameCount * 0.01 % 100))
        lineX = random(30) + beat * w/2
        lineY =random(strH) -strH/2
        line(lineX + random(30), lineY + random(30), lineX + random(frameCount * 0.15 % 100) - 5, lineY + random(frameCount * 0.01 % 100) - 5)
    }
}