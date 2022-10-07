
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var figura1;
var figura2;
var figura3;
var canvas;

function setup() {
	var canvas = createCanvas(550,600);
	engine = Engine.create();
	world = engine.world;
	//Crie os Corpos Aqui.
	var plane_options = {
      isStatic: true
	}

	plane = Bodies.rectangle(600,580,1200,2,plane_options);
	World.add(world,plane);
    
	

	var figura1_options = {
		restitution:0.5,
		friction:0.02,
		frictionair:0
	}
	
	var figura2_options = {
		restitution:0.7,
		friction:0.01,
		frictionair:0.1
	}
	
	var figura3_options = {
		restitution:0.01,
		friction:1,
		frictionair:0.3
	}

	figura1 = Bodies.circle(220,10,10,figura1_options);
	World.add(world,figura1)

	figura2 = Bodies.rectangle(110,50,10,10,figura2_options);
	World.add(world,figura2)

	figura3 = Bodies.rectangle(350,50,10,10,figura3_options);
	World.add(world,figura3)
	
	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {
  background(0);
  
  Engine.update(engine); 
  fill("lavender");
  
  rect(plane.position.x,plane.position.y,1200)
 
  ellipse( figura1.position.x,figura1.position.y,30)

  rect( figura2.position.x,figura2.position.y,50,50)

  rect(figura3.position.x,figura3.position.y,100,50)
}



