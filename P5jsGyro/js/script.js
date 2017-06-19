var forceX = 0;
var forceY = 0;
var bulles = [];

function windowResized() { 
	resizeCanvas(windowWidth, windowHeight);
}
function setup(){

	createCanvas(windowWidth, windowHeight);


	gyro.frequency = 10; 
	gyro.startTracking(function(o) {
        forceX = o.gamma/50;
        forceY = o.beta/50;
    });


    for (var i = 0; i < 6; i++) {
    	bulles[i] = new Bulle();
    };
}
function draw(){
	background(255); 
        fill(30,50,220);

	// update des bulles
	for (var i = 0; i < bulles.length; i++) {
		bulles[i].update();
	};
}

function Bulle(){
	this.x = width/2; 
	this.y = height/2;
	this.vitx = random(2, 12);
	this.vity = random(2, 12);
	this.diam = random(20, 60);
}


Bulle.prototype = {
	update: function(){


		this.x += this.vitx * forceX;
		this.y += this.vity * forceY;

		if(this.x < this.diam/2){
			this.x = this.diam/2;
		} else if(this.x > width-this.diam/2){
			this.x = width-this.diam/2;
		}
		if(this.y < this.diam/2){
			this.y = this.diam/2;
		} else if(this.y > height-this.diam/2){
			this.y = height-this.diam/2;
		}
                 rectMode(CENTER);
		rect(this.x, this.y, this.diam, this.diam);		
	}
}
