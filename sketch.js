let W1;
let W2;
let W3;
let W4;

function setup() {
  createCanvas(windowWidth, windowHeight);
  W1 = new Walker(200, 200);
  W2 = new Walker(200, 200);
  W3 = new Walker(200, 200);
  W4 = new Walker(200, 200);
}

function draw() {
  W1.update();
  W1.display();
  W2.update();
  W2.display();
  W3.update();
  W3.display();
  W4.update();
  W4.display();
}

class Walker {
  constructor(_x, _y) {
    this.posx = _x;
    this.posy = _y;
    this.vel = random(1, 10);
    this.color = color(255, random(0, 200), random(0, 200));
    this.esCirculo = random() > 0.5 ? true : false;
  }

  update() {
    this.posx += random(-this.vel, this.vel);
    this.posy += random(-this.vel, this.vel);
  }

  display() {
    fill(this.color);
    noStroke();
    if (this.esCriculo) {
      circle(this.posx, this.posy, 10);
    } else {
      rect(this.posx, this.posy, 10, 10);
    }
  }
}
