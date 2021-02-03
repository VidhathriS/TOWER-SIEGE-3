//creating constants
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Polygon = Matter.Body;

var stand1,stand2,ground
var polygon
var rope;
var backgroundImg
var gameState = "onRope";
var score = 0;
var bg = "bg1.jpg";

function preload() {
  //loading Images
 
  getBackgroundImg();
}


function setup() {
	createCanvas(1200, 600);
 
    engine = Engine.create();
    world = engine.world;
    
     stand1 = new Ground(1000,300,250,20);
     
     stand2 = new Ground(600,500,350,20);

     ground = new Ground(width/2,600,width,40);

     //1st Level big stand
     box1 = new Box1(510,470,30,40);
     box2 = new Box1(540,470,30,40);
     box3 = new Box1(570,470,30,40);
     box4 = new Box1(600,470,30,40);
     box5 = new Box1(630,470,30,40);
     box6 = new Box1(660,470,30,40);
     box7 = new Box1(690,470,30,40);
     
     //1st Level small stand
     box8 = new Box1(940,270,30,40);
     box9 = new Box1(970,270,30,40);
     box10 = new Box1(1000,270,30,40);
     box11 = new Box1(1030,270,30,40);
     box12 = new Box1(1060,270,30,40);

     //2nd Level big stand
     box13 = new Box2(540,430,30,40);
     box14 = new Box2(570,430,30,40);
     box15 = new Box2(600,430,30,40);
     box16 = new Box2(630,430,30,40);
     box17 = new Box2(660,430,30,40);

     //3rd Level big stand
     box18 = new Box3(570,390,30,40);
     box19 = new Box3(600,390,30,40);
     box20 = new Box3(630,390,30,40);

     //2nd Level small stand
     box21 = new Box3(970,230,30,40);
     box22 = new Box3(1000,230,30,40);
     box23 = new Box3(1030,230,30,40);

     //last Level small stand 
     box24 = new Box2(1000,190,30,40);

     //last Level big stand
     box25 = new Box4(600,350,30,40);

     polygon = new Polygon1(50,400,50);
     
     rope = new Rope(polygon.body,{x:120,y:280})
}


function draw() {
  
  if(backgroundImg){
    background(backgroundImg);
   }

  Engine.update(engine);

  stand1.display();
  stand2.display();

  ground.display();
 
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();

  polygon.display();
  rope.display();

  
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();
  box19.score();
  box20.score();
  box21.score();
  box22.score();
  box23.score();
  box24.score();
  box25.score();

  stroke("white");
  textSize(30);
  fill("white");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",20,50);
  
  stroke("white");
  textSize(30);
  fill("white");
  text("Press Space to Get Another Chance To Play",100,90);

  stroke("white");
  textSize(30);
  fill("white");
  text("Score: "+score,1000,90);
}

function mouseDragged(){
	if(gameState!=="launched"){

		Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
		
	}

}

function mouseReleased(){
    rope.fly();
    gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32){
    rope.attach(polygon.body);
    gameState = "onsling";
}
}

//changing the background by trying to make an API call..
async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<=19){
      bg = "bg1.jpg";
  }
  else{
      bg = "bg2.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}