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
    let o = new Others(random(width), random(height), random(20, 50));
    others.push(o);
  }
}
