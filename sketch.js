var monkey,monkeyamination;
var ground,groundimage;
var bananagroup;
var obstaclegroup;
var ground;
var bananaimage,banana;
var rocksimage,rocks;
var score = 0;
var survivaltime = 0;
var bgimage, bg;

function preload(){
  monkeyanimation=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
 bananaimage = loadImage("banana.png");
  rocksimage = loadImage("obstacle.png");
  
  //score  = 0;
  console.log("in setup" + score);
  bgimage = loadImage("pure-white-background-85a2a7fd.jpg");
}



function setup() {
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkeyanimation);
  monkey.scale=0.1
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.X = ground.width/2;

  bananagroup = createGroup();
  rocksgroup = createGroup();
  
  //bg = createSprite(0,100);
// bg.addImage(bgimage);
}


function draw() {
  
  
  if (ground.x < 0){
      ground.x = ground.width/2;
  }
  
  //jump when the space key is pressed
    if(keyDown("space")) {
        monkey.velocityY = -12;
    }
    bananas();
  spawnrocks();
   
   monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
  monkey.collide(rocksgroup);
     score = 0;
 background("white");
drawSprites();
  stroke("white");
  textSize(20);
  fill("white");
  text("Score"+score,500,50);
  //score = score + Math.round(getFrameRate()/60);
  console.log("in draw" + score);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivaltime = Math.ceil(frameCount/frameRate())
  text("Survival time"+survivaltime,100,50);
}
function bananas(){
  if(World.frameCount%80 === 0){
    banana = createSprite(400,200,20,20);
    banana.y = Math.round(random(120,200));
   banana.addImage(bananaimage);
    banana.velocityX = -4;
    banana.scale = 0.1;
    //banana.setLifetime(1000);
    
   bananagroup.add(banana);
    
  }
}

function spawnrocks(){
  if(World.frameCount%200 === 0){
    rocks = createSprite(400,330,20,20);
    //banana.y = Math.round(random(120,200));
    rocks.addImage(rocksimage);
    rocks.velocityX = -4;
    rocks.scale = 0.1;
    //banana.setLifetime(1000);
    
   rocksgroup.add(rocks);
  }
}
