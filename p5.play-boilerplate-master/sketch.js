var test;
var test1;
function setup() {
  createCanvas(800,400);
  test=createSprite(400, 200, 50, 50);
  test1=createSprite(600,400,50,50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}