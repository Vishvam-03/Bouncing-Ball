const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var ground, ball;

function setup() {
 var canvas=  createCanvas(400,400);
 engine =Engine.create();

var options = {
  isStatic: true
}
var balloptions = {
  restitution: 1
}
 //my world is my engine's world
 world = engine.world;

 ground =Bodies.rectangle(200,380,400,10, options);
 World.add(world,ground);

 ball =Bodies.circle(200, 0, 40, balloptions);
 World.add(world,ball)

 console.log(ground);
  
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y, 400, 10);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 40, 40);
}