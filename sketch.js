let w1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  w1 = new Walker(200, 200);
}

function draw() {
  w1.update();
  w1.display();
}

class Walker {
  constructor(_x, _y) {
    this.posx = _x;
    this.posy = _y;
    this.vel = random(1, 70);
    this.color = color(random(0, 200), random(0, 255), random(0, 200));

    this.esCirculo = random() > 0.5 ? true : false;

    // this.esCirculo;
    // this.r = random();
    // if (this.r > 0.5) {
    // 	this.esCirculo = true;
    // } else {
    // 	this.esCirculo = false;
    // }
  }
  update() {
    this.posx += random(-this.vel, this.vel);
    this.posy += random(-this.vel, this.vel);
  }

  display() {
    fill(this.color);
    // noStroke();
    stroke(255);
    if (this.esCirculo) {
      circle(this.posx, this.posy, random(0, 50));
    } else {
      rect(this.posx, this.posy, 40, random(0, 50));
    }
  }
}
