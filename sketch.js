var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var path=[];
var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img;

function preload(){
  track = loadImage("../images/track.jpg");
  car1_img = loadImage("../images/car1.png");
  car2_img = loadImage("../images/car2.png");
  car3_img = loadImage("../images/car3.png");
  car4_img = loadImage("../images/car4.png");
  ground = loadImage("../images/ground.png");
}
//for loops to for each block
//array path for each color
function setup(){
  canvas = createCanvas(750, 750);
  // database = firebase.database();
  // game = new Game();
  // game.getState();
  // game.start();
p1=createSprite(150,150,300,300);
p1.shapeColor="red";
p2 =createSprite(150,600,300,300);
p2.shapeColor="yellow";
p3=createSprite(600,600,300,300);
p3.shapeColor="blue";
p4=createSprite(600,150,300,300);
p4.shapeColor="green";
//green
for(i=25;i<300;i+=50){
  block1=createSprite(325,i,50,50);
  block2=createSprite(375,i,50,50);
  block2.shapeColor="brown";
  block3=createSprite(425,i,50,50);
  path.push(block1);
  path.push(block2);
  path.push(block3);
}
//yelow
for(i=725;i>450;i-=50){
  block1=createSprite(325,i,50,50);
  block2=createSprite(375,i,50,50);
  block2.shapeColor="brown";
  block3=createSprite(425,i,50,50);
  path.push(block1);
  path.push(block2);
  path.push(block3);
}
//blue
for(i=725;i>450;i-=50){
  block1=createSprite(i,325,50,50);
  block2=createSprite(i,375,50,50);
  block2.shapeColor="brown";
  block3=createSprite(i,425,50,50);
  path.push(block1);
  path.push(block2);
  path.push(block3);
}
//red
for(i=25;i<300;i+=50){
  block1=createSprite(i,325,50,50);
  block2=createSprite(i,375,50,50);
  block2.shapeColor="brown";
  block3=createSprite(i,425,50,50);
  path.push(block1);
  path.push(block2);
  path.push(block3);
}
}


function draw(){
  background(0);
  drawSprites();
  // if(playerCount === 4){
  //   game.update(1);
  // }
  // if(gameState === 1){
  //   clear();
  //   game.play();
  // }
  // if(gameState === 2){
  //   game.end();
  // }
}
