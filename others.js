class Others {
  constructor(x, y, m, r, g, b) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(3);
    this.acc = createVector(0, 0);
    this.mass = m;
    this.radius = this.mass / 5;
    this.r = r;
    this.g = g;
    this.b = b;
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  edges(){
    if (this.pos.y > height) {
      this.vel.y *= -1;
      this.pos.y = height;
    }
    if (this.pos.x > width) {
      this.vel.x *= -1;
      this.pos.x = width;
    }
    if (this.pos.x < 0){
      this.vel.x *= -1;
      this.pos.x = 0;
    }
    if (this.pos.y < 0){
      this.vel.y *= -1;
      this.pos.y = 0;
    }


  }

  show() {
    fill(this.r, this.g, this.b);
    if (random (0, 1) > 0.5){
      ellipse(this.pos.x, this.pos.y, this.radius * 2);
    }
    else{
      rect(this.pos.x, this.pos.y, this.radius * 2, this.radius * 2)
    }
  }
}
