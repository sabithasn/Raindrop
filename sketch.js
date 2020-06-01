
var drops = [];

function setup(){
    var canvas = createCanvas(400,400);
    for (var i = 0; i< 400; i+=5) {
        drops[i] = new Drop();
    }
}

function draw(){
    background(0);
    for (var i = 0; i< 400; i+=5) {
        drops[i].display();
        drops[i].fall();
    }
    
}
