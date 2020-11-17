
var monkey , monkey_running;
var bananaImage, obstacleImage;
var BananaGroup, RockGroup;
var survivaltime ;
var border;
 
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  rockImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600,600);

  
ground = createSprite(900,580,1500,10);
ground.velocityX = -4   
ground.x = ground.width / 2;


 
monkey = createSprite(60,570,10,10);  
monkey.addAnimation("moving", monkey_running);
monkey.scale = 0.16  ;

  
BananaGroup = createGroup();
RockGroup = createGroup();
  
survivaltime = 0;
}


function draw() {
background("white");
  
stroke("black")
textSize(20)
fill("black")
survivaltime = Math.ceil(frameCount / frameRate());
text("Survival Time :" + survivaltime,400,40 )

  

if(ground.x < 0)  
{
ground.x = ground.width / 2;  
}  

if(keyDown("space") && monkey.y >= 500 )   
{
monkey.velocityY = -19;  
}  
  
monkey.velocityY = monkey.velocityY + 0.8  
monkey.collide(ground);  
 
    
spawnBanana();  
spawnRock(); 
  
console.log(monkey.y)  
  
  
  drawSprites();  
}

function spawnBanana(){
if(frameCount % 100 === 0){
var banana = createSprite(600,120, 200,10);  
banana.addImage(bananaImage);
banana.velocityX = -5;
banana.lifetime = 200;
BananaGroup.add(banana);
banana.y = Math.round(random(300,450));
banana.scale = 0.1
}  
  
}

function spawnRock(){
if( frameCount % 150 === 0){
var rock = createSprite(600,540,200,10);  
 rock.addImage(rockImage);
rock.velocityX = -4;
rock.lifetime = 200;
rock.scale = 0.16;
RockGroup.add(rock);
  
  
} 
  
  
  
  
  
  
  
}


