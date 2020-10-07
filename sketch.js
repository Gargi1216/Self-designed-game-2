//const Engine = Matter.Engine;
//const World= Matter.World;
//const Bodies = Matter.Bodies;
//var engine, world;
var ground,bg;
var candyGirl;
var block1, star;

function preload(){
   bg = loadImage("20200911_090932.jpg");
   candygirl_running = loadAnimation("images/candy_animation12.png","images/candy_animation13.png","images/candy_animation14.png");
   chocblock = loadImage("images/block1.png");
   strawblock = loadImage("images/block2.png");
}

function setup(){
  var canvas = createCanvas(1500,800);
  //engine = Engine.create();
  //world = engine.world;
  ground = createSprite(750,650,3000,20);
  candyGirl = createSprite(100,600);
  candyGirl.addAnimation("running",candygirl_running);
  
  
}
function draw(){
    background("pink");
   // Engine.update(engine);
    ground.velocityX = -3;
    if(ground.x<0){
      ground.x = ground.width/2;
    }
    
    if(keyDown(UP_ARROW)){
      candyGirl.velocityY = -10;

    }
    candyGirl.velocityY = candyGirl.velocityY +0.5;

    if(keyDown("SPACE")){
      candyGirl.velocityY = -15;

    }
    spawnBlocks();
    candyGirl.collide(ground);
    drawSprites();
}

function spawnBlocks(){
  if(frameCount%150===0){
    var block = createSprite(1500,400,200,160);
    block.scale = 0.5;
    block.velocityX = -3;
    var rand = Math.round(random(1,2));
    switch(rand){
      case 1: block.addImage(chocblock);
              break;
      case 2: block.addImage(strawblock);
              break;
      default:break;
    }

  }
}

/*function keyPressed(){
  if(keyCode===RIGHT_ARROW){
    Matter.Body.setVelocity(candyGirl.body,{x:5,y:0});
  }

  if(keyCode===LEFT_ARROW){
    Matter.Body.setVelocity(candyGirl.body,{x:-5,y:0});
  }

  if(keyCode===UP_ARROW){
    Matter.Body.setVelocity(candyGirl.body,{x:0,y:-5});
  }

  if(keyCode===DOWN_ARROW){
    Matter.Body.setVelocity(candyGirl.body,{x:0,y:5});
  }
}*/