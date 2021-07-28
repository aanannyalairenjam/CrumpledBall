
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,groundObj,leftSide,rightSide;
var world;
var radius = 40;

function preload()
{
	
}

function setup() {
	createCanvas(1400,500);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
 
	//Create the Bodies Here.
	ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

ball=Bodies.circle(260,100,radius/2,ball_options);
World.add(world,ball);

groundObj=new Ground(width/2,370,width,2);
leftSide=new Ground(1100,310,20,120);
rightSide = new Ground(1250,310,20,120);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");
  fill(255)
  
  ellipse(ball.position.x,ball.position.y,radius,radius);

  groundObj.display();
  leftSide.display();  
  rightSide.display();
  
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
  
	}
}



