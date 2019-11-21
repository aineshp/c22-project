var fixrect, rect1;

function setup() {
  createCanvas(1200,800);
  fixrect = createSprite(350, 400, 30, 80);
  fixrect.shapeColor = "red";
  fixrect.debug = true;
  fixrect.setCollider("circle");
  rect1 = createSprite(400,200,80,30);
  rect1.shapeColor = "red";
  rect1.debug = true;
  rect1.setCollider("circle");
}

function draw() {
  background(0,0,0);  
  rect1.x = World.mouseX;
  rect1.y = World.mouseY;

  if (sq(rect1.x - fixrect.x) + sq(rect1.y-fixrect.y) < 6400) {
    rect1.shapeColor = "blue";
    fixrect.shapeColor = "blue";
  }
  else {
    rect1.shapeColor = "red";
    fixrect.shapeColor = "red";
  }
  drawSprites();
}