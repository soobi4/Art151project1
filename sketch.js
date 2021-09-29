function setup(){
    alert("Focus on colors and rapid change. Move mouse around the screen to see how the background and balls interact with color. (epilepsy warning)")

    createCanvas(windowWidth, windowHeight);

    ball = new Ball(random(0,20),random(0,20));
    ball1 = new Ball(random(300,),random(100));
    ball2 = new Ball(random(400),random(400));
    ball3 = new Ball(random(500),random(600));
    ball4 = new Ball(random(255),random(260));
}


function draw(){
    

    background(0,255,255); 
    if(mouseX < 100){
        background(130,130,130);
        ball.updateColor();
    }
    else if(mouseX > 500 && mouseX < 850){
        background(25,52,25);
        ball.updateColor();
    }
    else if(mouseX > 850){
        background(6,7,8);
    }
    
    
    ball.update();
    ball.show();
    ball1.update();
    ball1.show();
    ball2.update();
    ball2.show();
    ball3.update();
    ball3.show();
    ball4.update();
    ball4.show();

    
}

function Ball(x,y){
    this.pos = createVector(x,y);
    this.dir = createVector(random(-1,1), random(-1,1));
    this.speed = random(0,10);

    this.update = function(){
        let uPos = p5.Vector.mult(this.dir, this.speed);
        this.pos.add(uPos);

        if(this.pos.x < 0 || this.pos.x > windowWidth){this.dir.x*=-1}
        if(this.pos.y < 0 || this.pos.y > windowHeight){this.dir.y*=-1}
    }

    this.show = function(){
        stroke(10);
        strokeWeight(3);
        ellipse(this.pos.x, this.pos.y, 70, 70);
    }

    this.updateColor = function(){
        fill(random(0,255),random(0,255),random(0,255));
    }
}

