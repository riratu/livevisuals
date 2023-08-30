function setup() {
    createCanvas(windowWidth, windowHeight)

}


speed = 3000
function draw() {
    clear(2)
    translate(width/2, height/2)
    stroke(255, 0, 0)
    line(0, 0, sin(millis() / speed) * 100, 0)
    stroke(255)
    line(0, 0, sin(millis() / speed) * 100, cos(millis() / speed) * 100)

    //stroke(255)
    //for(i=0; i < 100; i++){
    //  line(0, 0, sin(millis() / speed + i) * 100 + i+10, cos(millis() / speed + i) * 300)
    //}
    //stroke(255, 0, 0)
    // for(i=0; i < 100; i++){
    //  line(0, 0, sin(millis() / speed + i) * 300 + i+10, cos(millis() * -1 / speed + i) * 100)
    //}

    lineNo = 200
    for(i=0; i < lineNo; i++){
        stroke(100, 25, 0)
        offset =  100 * (i * lineNo)
        x = cos((millis() + offset) / speed) * 300
        y = sin((millis() + offset) / speed) * 300
        line(0, 0, x, y)

        stroke(150, 50, 0)
        newX = x + cos(((millis()) + offset) / speed * 4) * 100
        newY = y + sin(((millis()) + offset) / speed * 4) * 100
        line(x, y, newX, newY)

        x = newX
        y = newY

        newX = x + cos(((millis()) + offset) / speed * 8) * 50
        newY = y + sin(((millis()) + offset) / speed * 8) * 50
        line(x, y, newX, newY)
    }

}



