const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15;
var box16, box17, box18, box19, box20, box21;
var ground1, ground2;
var ball;
var thread;
var bg, backgroundImg;

function preload(){

  getBagroundImage();
  // console.log(getBagroundImage());

}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world

  ground1 = new Ground(400,390,900,10);
  ground2 = new Ground(470,220,200,10);

  ball = new Ball(220,220,20,20);

  box1 = new Boxes(410,200);
  box2 = new Boxes(440,200);
  box3 = new Boxes(470,200);
  box4 = new Boxes(500,200);
  box5 = new Boxes(530,200);
  box6 = new Boxes(425,150);
  box7 = new Boxes(455,150);
  box8 = new Boxes(485,150);
  box9 = new Boxes(515,150);
  box10 = new Boxes(440,100);
  box11 = new Boxes(470,100);
  box12 = new Boxes(500,100);
  box13 = new Boxes(460,60);
  box14 = new Boxes(485,60);
  box15 = new Boxes(475,30);

  box16 = new Boxes(640,375);
  box17 = new Boxes(670,375);
  box18 = new Boxes(700,375);
  box19 = new Boxes(655,325);
  box20 = new Boxes(685,325);
  box21 = new Boxes(670,275);

  thread = new Rope(ball.body, {x:220, y:220});

}

function draw() {
  
  if(backgroundImg)
  background(backgroundImg);
  Engine.update(engine);

  fill("black");
  text(mouseX+' , '+mouseY, 20,20);

  ground1.display();
  ground2.display();

  ball.display();

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

  thread.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body , {x : mouseX , y : mouseY});
}

function mouseReleased(){
  thread.fly();
}

function keyPressed(){
  if(keyCode === 32){
    thread.attach(ball.body);
  }
}

async function getBagroundImage(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  //console.log(responseJSON);

  var dateTime = responseJSON.datetime;
  //datetime: "2021-07-06T17:39:58.991509+05:30"
  var time = dateTime.slice(11,13);

  if(time<=17 && time>=5){
    bg = "white.jpg";
  }else{
    bg = "black.jpg";
  }
  backgroundImg = loadImage(bg);
  // console.log(backgroundImg);
}