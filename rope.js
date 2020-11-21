class Rope {
constructor(body1, body2, ofsetX, ofsetY) {
this.ofsetX=ofsetX;
this.ofsetY=ofsetY;
var options = {
bodyA:body1, bodyB:body2,pointB:{x:this.ofsetX, y:this.ofsetY}
}
this.sling=Constraint.create(options);
World.add(world, this.sling);
}
display(){
var pointA =this.sling.bodyA.position;
var pointB =this.sling.bodyB.position;
strokeWeight(2);
var anker1X=pointA.x;
var anker1Y=pointA.y;
var anker2X=pointB.x+this.ofsetX;
var anker2Y=pointB.y+this.ofsetY;
line(anker1X, anker1Y, anker2X, anker2Y);
}
}