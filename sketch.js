
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper, ground, box1, box2, box3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper=new Paper();
	ground=new Ground();

	box1=new Bin(500,640,100,5);
	box2=new Bin(550,590,5,100);
	box3=new Bin(450,590,5,100);
	
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  
  
 
  
  drawSprites();
 
}
function keyPressed(){
	if(keyDown(UP_ARROW)){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-60})
	}
}



