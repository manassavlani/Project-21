var bullet,wall;
var speed,weight;
var thickness, damage;
thickness = random(22,83);
function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50,200,50,50);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = rgb(80,80,80);
  speed = random(223,321);
  
  bullet.velocityX=speed;
  weight = random(30,52);
  var damage=0.5 * weight * speed * speed/(thickness* thickness* thickness);
}

function draw() {
  background(0, 0, 0);  
  if (wall.x-bullet.x<bullet.width/2+wall.width/2) {
    bullet.velocityX=0;
    var deformation = weight * speed * speed /22500;
    if (deformation>180){
      bullet.shapeColor = "red";
    }
    if (deformation<180 && deformation>100) {
      bullet.shapeColor = "yellow";
    }
    if (deformation<100) {
      bullet.shapeColor = "green";
    }
  }
  drawSprites();
  hascollided()
}
function hascollided() {
  function hasCollided(bullet, wall){

    bulletRightEdge=Lbullet.x + Lbullet.width;
    wallLeftEdge = Lwall.x;
    
    if(bulletRightEdge>=wallLeftEdge) {
    
      return true;
    }
    
    return false;
  }
}