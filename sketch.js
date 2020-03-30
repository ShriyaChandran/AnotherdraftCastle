const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var middlerect,rectr1,rectr2,pillarr,rectl1,rectl2,pillarl;
var middleRoof,right1Roof,left1Roof,right2roof,left2Roof;
function setup() {
  var canvas =  createCanvas(420,600);
  engine = Engine.create();
  world = engine.world;
  middlerect = new Building(210,553,34,300);
  rectr1 = new  Building(247,550,40,220);
  rectl1 = new  Building(173,550,40,220);
  rectr2 = new  Building(287,370,40,400);
  rectl2 = new  Building(133,370,40,400);
  pillarr = new  Building(317,335,20,600);
  pillarl = new  Building(103,335,20,600);
  baseground = new Ground(210,585,800,30);
  middleRoof = new Roof (176,253,344,253,210,259);
}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  middlerect.display();  
  rectr1.display();  
  rectl1.display();  
  rectr2.display();  
  rectl2.display();  
  pillarr.display();
  pillarl.display();  
  baseground.display();
  middleRoof.display();

  
  drawSprites();
}