let bugs = []; // array of Jitter objects

function setup() {
    
  createCanvas(710, 400);
  // Create objects
  for (let i = 0; i < 60; i++) {
    bugs.push(new Jitter());
      
  }
}

function draw() {
  background("#fae");
    fill("#ff0000");
    textSize(50);
    textFont("Georgia");
    textStyle(ITALIC);
    textAlign(LEFT);
    text("YASS Gaga!",mouseX,mouseY,140,200);
  for (let i = 0; i < bugs.length; i++) {
    bugs[i].move();
    bugs[i].display();
  }
}

// Jitter class
class Jitter {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(20, 30);
    this.speed = 1;
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display() {
triangle(this.x, this.y, this.diameter, this.diameter);
  }
}


