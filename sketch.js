function setup() {
  createCanvas(800,400);
 bullet = new Bullet(this.x,this.y,this.weight,this.speed)
 wall = new Wall(this.x,this.y,this.thickness)
}

function draw() {
  background(255,255,255);
 drawSprites();
 if ( wall.x - bullet.x<(bullet.width+wall.width)/2) {
  car.velocityX = 0;
  var dam = 0.5*bulletWeight*bulletSpeed*bulletSpeed/(thicknessofWall * thicknessofWall*thicknessofWall);
  if (dam=3.68){
wall.shapeColor = "green"
  }
  if (dam=12.43){
    wall.shapeColor = "red"
      }
     else {
      wall.shapeColor = color(80,80,80)
    }
   }
}
function hasCollided(bullet,wall)
{
bulletRightEdge = bullet.sprite.x + bullet.sprite.weight;
wallLeftEdge = wall.sprite.x;
if (bulletRightEdge>=wallLeftEdge)
{
return true;

}

return false;

}