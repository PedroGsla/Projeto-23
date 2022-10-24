//namespace
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var btn2;

var angle=60;
var engine, world;

var box1,box2,box3,box4;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
  var ball1_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  btn2 = createImg('up.png');
  btn2.position(350,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);

  ground1 = Bodies.rectangle(200,200,100,20,ground_options);
  World.add(world,ground1);
  ground2 = Bodies.rectangle(200,200,100,20,ground_options);
  World.add(world,ground2);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  ball1 = Bodies.circle(100,10,20,ball1_options);
  World.add(world,ball);

 
  ground = Bodies.rectangle(100,400,400,20,ground_options);
  World.add(world,ground); 
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
//AAAAAAAAAAAAA
 box1 = new Box(310,300,100,20);
 box2 = new Box(110,300,100,20);
 //box3 = new Box(110,300,100,20);
 //box4 = new Box(10,300,100,20);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  
  Matter.Body.rotate(ground1,angle)
  push();
  translate(ground1.position.x,ground1.position.y);
  rotate(angle);
  rect(0,0,100,20);
  pop();
  
  angle +=0.1;
  Matter.Body.rotate(ground2,angle)
  push();
  translate(ground2.position.x,ground2.position.y);
  rotate(angle);
  rect(0,0,100,20);
  pop();
  
  angle +=0.1;
 
  
  ellipse(ball1.position.x,ball1.position.y,10);
 
  ellipse(ball.position.x,ball.position.y,10);
  push()
  fill("red")
  rect(ground.position.x,ground.position.y,640,20);
  pop()
 
//console.log(ground.position.y);

 
box1.show();
box2.show();
//box3.show();
//box4.show();
}

function vForce()
{
  Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
  