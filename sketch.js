var bg, bgImg;
var player, playerImg;
var edges;
var voldemort, voldemortImg, voldemortGroup;
var magicSpell, magicSpellImg;
var heart1, heart2, heart3;
var heart1Img, heart2Img, heart3Img;



function preload(){
  bgImg = loadImage("Background.jpg");
  playerImg = loadImage("Players.png");
  voldemortImg = loadImage("Voldemort.png");
  magicSpellImg = loadImage("Magic Spell.png");
  heart1Img= loadImage("heart_1.png");
  heart2Img= loadImage("heart_2.png");
  heart3Img= loadImage("heart_3.png");
  

}

function setup() {
createCanvas(windowWidth,windowHeight);
  bg = createSprite(windowWidth/2-20,windowHeight/2-40,20,20);
  bg.addImage(bgImg);
  bg.scale = 2;

  player = createSprite(windowWidth-2500, windowHeight-300,50,50);
  player.addImage(playerImg);
  player.scale = 1.3;

  magicSpell = createSprite(player.position.x+300, player.position.y-120,50,50);
  magicSpell.addImage(magicSpellImg);
  magicSpell.visible = false;

  heart1 = createSprite(windowWidth-150,40,20,20);
  heart1.visible = false;
  heart1.addImage(heart1Img);
  heart1.scale = 0.4

  heart2 = createSprite(windowWidth-100,40,20,20);
  heart2.visible = false;
  heart2.addImage(heart2Img);
  heart2.scale = 0.4

  heart3 = createSprite(windowWidth-150,40,20,20);
  heart3.addImage(heart3Img);
  heart3.scale = 0.4


  voldemortGroup = new Group();


  edges = createEdgeSprites();

}

function draw() {
  background(0); 

if(keyDown(UP_ARROW)){
  player.y = player.y-30;
}
if(keyDown(DOWN_ARROW)){
  player.y = player.y+30;
}
if(keyDown(RIGHT_ARROW)){
  player.x = player.x+30;
}
if(keyDown(LEFT_ARROW)){
  player.x = player.x-30;
}

if(keyWentDown("space")){
  magicSpell.visible = true;
  magicSpell.velocityX = 3;
}
player.collide(edges);

enemy();
drawSprites();

}

function enemy(){
  if(frameCount%300===0){
    voldemort= createSprite(random(2000,2500), random(800,1300), 40,40);
    voldemort.addImage(voldemortImg);
    voldemort.velocityX = -4;
    voldemort.lifetime = 300;
    voldemortGroup.add(voldemort);
  }
}

