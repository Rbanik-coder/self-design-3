var bg,bgImg;
var player, shooterImg, shooter_shooting;
var doll,doll1;
var h,h1;
var nun,nun1;
var ghost,ghost1;
var bullet,bullet1;

function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  bgImg = loadImage("assets/horror.jpg");
  doll1 = loadImage("assets/doll.png");
  h = loadImage("assets/h1.png");
  nun1 = loadImage("assets/nun.png");
  ghost1 = loadImage("assets/ghost.png");
  bullet1 = loadImage("assets/bullet.png");
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);
  

//creating the player sprite
player = createSprite(displayWidth-1370, displayHeight-280, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.45;
   player.debug = false
   player.setCollider("rectangle",0,0,300,300)

doll = createSprite(displayWidth-(-100),displayHeight-230,50,50);
doll.addImage(doll1);
doll.scale=0.3;

h1 = createSprite(displayWidth-(-150),displayHeight-300,50,50);
h1.addImage(h);
h1.scale=0.35;

nun = createSprite(displayWidth-(-200),displayHeight-410,50,50);
nun.addImage(nun1);

ghost = createSprite(displayWidth-(-250),displayHeight-410,50,50);
ghost.addImage(ghost1);
ghost.scale=0.47;
}

function draw() {
  background(bgImg); 

  textSize(45);
  textFont("algerian");
  fill("white");
  text("PRESS ENTER TO PLAY",windowWidth/2-200,100);

  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
  bullet = createSprite(player.x,player.y,10,10);
  bullet.addImage(bullet1);
  bullet.scale=0.15;
  bullet.velocityX=9;
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}

if(keyDown("ENTER")){
  doll.velocityX=-5;
  h1.velocityX=-3.5;
  nun.velocityX=-1

}


drawSprites();

}
