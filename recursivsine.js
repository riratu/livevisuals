speed = 1000
function setup() {
    createCanvas(windowWidth, windowHeight)
    w = windowWidth/2
    h = windowHeight/2
}
function draw() {
    offset = millis() % 5000 * 0.05
    clear()
    translate(width/2, height/2)
    //offset =  100 * (i * lineNo)
    stroke(150, 50, 0)
    rec(0, 0, 1)
}

function rec (x, y, l) {
    if (x > w || y > h || y < -700 || x < -700 ){
        return
    }
    newX = x + (cos((millis() + (l*offset)) / speed) * 20 )
    newY = y + (sin((millis() + offset) / speed) * 20 )
    line(x, y, newX, newY)
    rec(newX, newY, l+1)
}