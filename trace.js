function setup() {
    createCanvas(windowWidth, windowHeight)
    w = windowWidth
    h = windowHeight
    rot = 0
}
function draw() {
    //Fill Background
    fill(0, 0, 0, 10)
    rect(0, 0, w, h)
    beat = millis() % 5000 / 5000 - 1
    invBeat = beat * -1
    //Rotate the Screen
    translate(windowWidth/2, windowHeight/2)
    rotate(rot)
    rot += 0.01

    stroke((beat + 1) * 255, (invBeat + 1) * 255, millis() % 10000)
    for (i=0; i < 100; i++) {
        line(invBeat * windowWidth,0,beat * windowWidth, i / 10 * windowHeight - h/2)
    }
    text(0,0, width)
}   