const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stand,ground,box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,slingshot1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


   

    
    
    
    
    ground = new Ground(600,410,1200,40);
    stand = new Ground(594,309,285,20);
    box11 = new Box(570,215,40,35);
    box12 = new Box(610,215,40,35);
    box7 = new Box(530,250,40,35);
    box8 = new Box(570,250,40,35);
    box9 = new Box(610,250,40,35);
    box10 = new Box(650,250,40,35);
    box1 = new Box(490,285,40,35);
    box2 = new Box(530,285,40,35);
    box3 = new Box(570,285,40,35);
    box4 = new Box(610,285,40,35);
    box5 = new Box(650,285,40,35);
    box6 = new Box(690,285,40,35);
    polygon1 = new Polygon(500,200,50,50);
    slingshot1 = new SlingShot(polygon1.body,{x:300,y:100});

  
    
    
}

function draw(){
    background("blue");
    Engine.update(engine);
    strokeWeight(4);
  
    stand.display();
    ground.display();
    polygon1.display();
    fill("white");
    slingshot1.display();
    fill (210, 180, 222);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    fill (169, 204, 227);
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    fill (171, 235, 198);
    box11.display();
    box12.display();

   
    drawSprites();
}

   function mouseDragged(){
        Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
    }
    
    
    function mouseReleased(){
        slingshot1.fly();
    }
    
    function keyPressed() {
        if (keyCode === 32) {
            slingshot1.attach(polygon1.body);
        }
    }
   
   




