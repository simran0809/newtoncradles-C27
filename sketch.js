
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint = Matter.Constraint;

var bobOject , bobOject1 , bobOject2 , bobOject3 ,bobOject4;
var roofObj;




function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobOject= new Bob(256,580,85,85);
	bobOject1 = new Bob(343,580,85,85);
	bobOject2 = new Bob(429,580,85,85);
	bobOject3 = new Bob(515,580,85,85);
	bobOject4 = new Bob(600,580,85,85);


  roofObj = new Roof(400,190,500,40);
  rope = new Rope(bobOject.body,roofObj.body);
 
 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);
  
  rope.display();
  bobOject.display();
  bobOject1.display();
  bobOject2.display();
  bobOject3.display();
  bobOject4.display();

  roofObj.display();

  

  drawSprites();
 
}




 





    
 
  

   







