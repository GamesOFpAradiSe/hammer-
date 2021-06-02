var rubber,hammer,stone,ground

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth,windowHeight, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(windowWidth/2,windowHeight,windowWidth,30)
    rubber = new Rubber(windowWidth/2,windowHeight/2)
	stone  = new Stone(700,320)
	hammer = new Hammer()

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
 ground.display()
  rubber.display()
  stone.display()
  hammer.display()
  
  drawSprites();
 
}



