const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var pressed = false ;

function setup() {
	createCanvas(1300, 500);

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine); 

	ground = new staticBody(width/2 , height-20 , width , 20);

	paper = new circularBody(200,460,20);

	b1 = new staticBody(950,462,250,15);

	b2 = new staticBody(820,390,15,150,-10);
	
	b3 = new staticBody(1078,390,15,150,8);
	
}
function draw(){
	background("black");
	//console.log(b1.body.position.y);
	rectMode(CENTER);
	
	paper.display();
	fill("yellow");
	ground.display();
	fill("white");
	noStroke();
	b1.display();
	b2.display();
	b3.display();
	
} 
function keyPressed(){
	if(keyCode === UP_ARROW && pressed === false){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:80,y:80})
		pressed = true;
	}
}