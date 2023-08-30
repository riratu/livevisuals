function setup() {
    createCanvas(windowWidth, windowHeight)
    stroke("#FFF")
}
function draw() {
    clear()
    pointCount = 100
    rotate(frameCount* 0.01 % PI)
    centerX = windowWidth/2;
    centerY = windowHeight/2;
    for (i=0; i < pointCount; i++){
        //line(20, i* (frameCount * 0.1 % windowWidth/10), i*(100-(frameCount * 0.1 % windowHeight/10)), 10)}
        line (millis()*0.5 % windowWidth, windowHeight / pointCount * i * sin((millis()*0.1 % 100)), centerX, centerY)
    }
}