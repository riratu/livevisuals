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
    fill(0, 30, 90, 10)
    rect(9, 0, w, h)
    beat = millis() % 500 / 500 - 1
    invBeat = beat * -1
    //Rotate the Screen
    translate(windowWidth/2, windowHeight/2)
    rotate(random(5))
    rot += 0.4
    if (frameCount % 10 == 0) tStrH = random(h/4)
    dh = tStrH -strH
    strH+= dh * 0.1
    stroke((beat + 1) * 255,(invBeat + 1) * 255, millis() % 5000 / 3000)
    //for (i=0; i < 100; i++) {
    line(random(500) + beat * h/2, strH,random(30) +  beat * w/9, strH * -1)
    circle(random(30) + beat * h/2, random(strH*1.2), 5000)
    //}
}