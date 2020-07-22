const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint


var particles = []
var plinkos = []
var divisions = []

var divisionheight = 300



var engine,world
function setup() {
  engine = Engine.create();
  world = engine.world
  createCanvas(600,1000);
 

  ground1 = new Ground(200,990,2000,20);


  for (var i=0;i<=600; i = i+50){
 plinkos.push(new Plinko(i,75))
  }

  for (var i=0;i<=590; i = i+50){
    plinkos.push(new Plinko(i,175))
     }

     for (var i=0;i<=600; i = i+50){
      plinkos.push(new Plinko(i,275))
       }

       for (var i=0;i<=590; i = i+50){
        plinkos.push(new Plinko(i,375))
         }
  
         for (var k=0; k<=600;k=k+80){
           divisions.push(new Divisions(k,850,10,divisionheight))
         }
}

function draw() {
  background(0);
  Engine.update(engine);
  ground1.display();
  if(frameCount%7===0){
    particles.push(new Particle(random(290,310 ),10,10));  
    
  }

for (var i = 0; i < plinkos.length; i++){
plinkos[i].display();
}

for(var k = 0;k<divisions.length;k++){
  divisions[k].display();
}

for (var j = 0; j < particles.length; j = j+10){
  particles[j].display();
  }
 

 
}