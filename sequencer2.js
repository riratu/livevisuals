function setup() {
    w = windowWidth
    h = windowHeight
    createCanvas(w, h)
}

function draw() {
    //Fill Background
    fill(0, 0, 0, 10)
    rect(0, 0, w, h)

    stroke(millis() * 0.33 % 10000 + 50 / 10000 * 255, millis() * 0.1 % 10000 / 10000 * 255, millis() % 10000 / 10000 * 255)

    for(i=0; i < 10; i++){
        if (frameCount % 50 == 0) circle(random(w), random(h), random(100))
        if (frameCount % 70 == 0) line(random(w), random(h), random(w), random(h))
        if (frameCount % 25 == 0) circle(random(w), random(h),2)
        if (frameCount % 50 == 0) circle(random(w/4) + w/3, random(h/4) + h/3, h*1.5)
        if (frameCount % 10 == 0) circle(random(w/4) + w/3, random(h/4) + h/3, 10)
        if (frameCount % 40 == 0) line(0, random(h/4) + h/3, w, random(h) + h/4)
    }

}