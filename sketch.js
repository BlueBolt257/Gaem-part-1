var player, npc;
var ground, d;




function setup() {
  createCanvas(windowWidth, windowHeight);
 /*  ground = createSprite(width/2, height/2, width, height)
  ground.shapeColor = "green"; */

  npc = createSprite(width/2 +250, height/2, 60, 60)
  npc.shapeColor = "red";
  
  player = createSprite(width/2, height/2, 60, 100)
  player.shapeColor = "blue";
}

function draw() {
  background(0);
  
  //GROUND
  fill("green");
  rect(0, 0, width, height); 

  camera.position.x = player.x;
  camera.position.y = player.y;

  //Distance between player & npc
  d = dist(player.x, player.y, npc.x, npc.y)
  console.log(d);
  if(d<=250){
    console.log("attack mode")
  }

  drawSprites();
}

function keyPressed(){

  //MOVEMENT OF THE PLAYER
  //Check the keycodes for alphabets
  if(keyCode === 119 || keyCode === UP_ARROW){
    player.y -=50
  }

  if(keyCode === 97 || keyCode === LEFT_ARROW){
    player.x -=50;
  }

  if(keyCode === 97 || keyCode === RIGHT_ARROW){
    player.x +=50;
  }
  if(keyCode === 97 || keyCode === DOWN_ARROW){
    player.y +=50;
  }
}
