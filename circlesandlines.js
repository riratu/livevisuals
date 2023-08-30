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
    beat = millis() % 1000 / 500 - 1
    invBeat = beat * -1
    //Rotate the Screen
    translate(windowWidth/2, windowHeight/2)
    rotate(rot)
    rot += 0.02
    if (frameCount % 10 == 0) tStrH = random(h/4)
    dh = tStrH -strH
    strH+= dh * 0.1
    stroke((beat + 1) * 255,(invBeat + 1) * 255, millis() % 10000 / 10000)
    //for (i=0; i < 100; i++) {
    line(random(30) + beat * h/2, strH,random(30) +  beat * w/2, strH * -1)
    circle(random(30) + beat * h/2, random(strH*1.2), 30)
    //}
}