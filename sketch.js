const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
function setup() {
createCanvas(1600, 700);
engine = Engine.create();
world = engine.world;
roof=new Roof(width/2, height/4, width/7, 20);
var balldiameter=40;
ball1=new Ball(width/2-balldiameter*2, height/4+500, balldiameter);
ball2=new Ball(width/2-balldiameter*1, height/4+500, balldiameter);
ball3=new Ball(width/2, height/4+500, balldiameter);
ball4=new Ball(width/2+balldiameter*1, height/4+500, balldiameter);
ball5=new Ball(width/2+balldiameter*2, height/4+500, balldiameter);
rope1=new Rope(ball1.body, roof.body, -balldiameter*2, 0);
rope2=new Rope(ball2.body, roof.body, -balldiameter*1, 0);
rope3=new Rope(ball3.body, roof.body, 0, 0);
rope4=new Rope(ball4.body, roof.body, +balldiameter*1, 0);
rope5=new Rope(ball5.body, roof.body, +balldiameter*2, 0);
//Create the Bodies Here.
Engine.run(engine); 
}
function draw() {
rectMode(CENTER);
background(230); 
roof.display();
ball1.display();
ball2.display();
ball3.display();
ball4.display();
ball5.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
}
function keyPressed(){
if(keyCode==UP_ARROW){
Matter.Body.applyForce(ball1.body, ball1.body.position, {x:-50, y:-45})		
}
}
function drawline(constraint){
ballbodyposition=constraint.bodyA.position;
roofbodyposition=constraint.bodyB.position;
roofofset=constraint.pointB;
roofX=roofbodyposition.x+roofofset.x;
roofY=roofbodyposition.y+roofofset.y;
line(ballbodyposition.x, ballbodyposition.y, roofX,roofY)
}