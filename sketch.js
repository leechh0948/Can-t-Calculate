let others = [];
let me;

function setup() {
  createCanvas(720, 720);
  me = new Me(random(width), random(height), 100);
  background(0);
}

function draw() {
 background(0, 5);
  for (let i = 0; i < others.length; i++) {
    others[i].update();
    others[i].show();
    others[i].edges();
    me.attract(others[i]);
  }
  if (mouseIsPressed) {
    me.pos.x = mouseX;
    me.pos.y = mouseY;
  }

  me.show();
}

function keyPressed(){
  if (keyCode == LEFT_ARROW){
    let x = random(width);
    let y = random(height);
    let m = random(20, 50);
    let r = random(255);
    let g = random(255);
    let b = random(255);
    let o = new Others(x, y, m, r, g, b);
    others.push(o);
  }
  else if (keyCode == RIGHT_ARROW){
    others.pop();
  }
}
