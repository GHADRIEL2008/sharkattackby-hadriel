var player,shark,water,sharkimage,sharkimage2,playerimage

function preload(){
  sharkImage=loadImage("shark.png")
  sharkImage2=loadImage("shark1.png")
  playerimage=loadImage("player.png")
}
function setup() {
  createCanvas(1000,700)
  water=createSprite(500,500,1000,1000)
  water.shapeColor="blue"
  player=createSprite(500,500,50,50)
  player.shapeColor="yellow"
  player.addImage(playerimage)
  player.scale=0.5
  
 
}

function draw() {
drawSprites()
  
  if (keyDown("RIGHT_ARROW")){
    player.x=player.x+10
    
player.mirrorX(player.mirrorX() * -1);
  }
  if (keyDown("LEFT_ARROW")){
    player.x=player.x-10

    player.mirrorX(player.mirrorX() * -1);
  }
  if (keyDown("DOWN_ARROW")){
    player.y=player.y+10
  }
  if (keyDown("UP_ARROW")){
    player.y=player.y-10
  }
spawnShark()
spawnShark1()
edges=createEdgeSprites()
player.collide(edges)
player.debug=true
player.setCollider("rectangle",0,0,100,100)
player.rotationToDirection=true
}
function spawnShark(){
  if(frameCount % 60 === 0){
    var shark = createSprite(1000,random(0,700),100,100)
    shark.velocityX=-15
    shark.shapeColor="red"
    shark.addImage(sharkImage)
    shark.scale=0.1
  }
}
function spawnShark1(){
  if(frameCount % 60 === 0){
    var shark = createSprite(0,random(0,700),100,100)
    shark.velocityX=15
    shark.shapeColor="red"
    shark.addImage(sharkImage2)
    shark.scale=0.5
  }
}