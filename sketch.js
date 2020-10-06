
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400, height-10, 800, 20);
	paper1 = new Paper(100, 600, 20);
    
	wall1 = Bodies.rectangle(505, 615, 10, 100 , {isStatic:true} );
	wall2 = Bodies.rectangle(695, 615, 10, 100 , {isStatic:true} );
	wall3 = Bodies.rectangle(600, 660, 200, 10 , {isStatic:true} );
	World.add(world, wall1)
	World.add(world, wall2)
	World.add(world, wall3)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rect(wall1.position.x, wall1.position.y, 10, 100);
  rect(wall2.position.x, wall2.position.y, 10, 100);
  rect(wall3.position.x, wall3.position.y, 200, 10);
  paper1.display();
  ground.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyIsDown(UP_ARROW)){
		Body.applyForce(paper1.body, paper1.body.position, {x: 50, y: -70});
	}
}



