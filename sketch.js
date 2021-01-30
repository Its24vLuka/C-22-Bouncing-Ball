  // Renaming or Alias  of modules of matter.js library -- NameSpacing
  
  const Engine = Matter.Engine;
  const Bodies= Matter.Bodies;
  const World = Matter.World;


  var engine,world;
  var ground;
  var ball;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();

  // Assigning the world created inside engine to world variable
  world = engine.world;

  var ground_options = {
    isStatic: true
  }

  ground = Bodies.rectangle(400,380,800,20,ground_options);

  World.add(world,ground);
  console.log(ground)
  var ball_options= {
    restitution: 0.8
  }
  ball = Bodies.circle(400, 50, 20, ball_options);
  World.add(world, ball);
}

function draw() {
    background("lightblue"); 

    Engine.update(engine)
    
    // console.log(ground.position.x);
    // console.log(ground.position.y);
   
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,800,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y,20,20);
  
}

