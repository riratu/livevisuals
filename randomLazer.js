function setup() {
    createCanvas(windowWidth, windowHeight)
    stroke("#FFF")

}
function draw() {
    clear()
    translate(windowWidth/2, windowHeight/2)
    pointCount = 100
    rotate(frameCount* 0.01 )
    centerX = windowWidth/2;
    centerY = windowHeight/2;
    beat = millis() % 1000 / 500 - 1
    for (i=0; i < 200; i++) {
        line(0,0,random((beat) * windowWidth), random((beat + 1) * windowHeight))
    }
}