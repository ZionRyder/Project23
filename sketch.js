var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1, box2, box3;




function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	box1Sprite=createSprite(0,0,200,20);
	box1Sprite.shapeColor="red"
	box2Sprite=createSprite(0,0,20,100);
	box2Sprite.shapeColor="red"
	box3Sprite=createSprite(0,0,20,100);
	box3Sprite.shapeColor="red"
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	
	box1 = Bodies.rectangle(400, 630, 2000, 20 , {isStatic:true} );
	World.add(world, box1);
	box2 = Bodies.rectangle(width/1.63, 600, 20, 100 , {isStatic:true} );
	World.add(world, box2);
	box3 = Bodies.rectangle(width/2.6, 600, 20, 100 , {isStatic:true} );
	World.add(world, box3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
box1.debug
box2.debug
box3.debug
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  box1Sprite.x= box1.position.x
  box1Sprite.y= box1.position.y + 20
  box2Sprite.x= box2.position.x 
  box2Sprite.y= box2.position.y 
  box3Sprite.x= box3.position.x 
  box3Sprite.y= box3.position.y  
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Body.setStatic(packageBody, isStatic=false);
  }
}



