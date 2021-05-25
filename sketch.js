var cat,catImg,cat1,catAnimation;
var mouse,mouseImg,mouse1,mouseMoving,mouseAnimation;
var groundImg;
function preload() {
    //load the images here
catImg=loadImage("images/cat1.png")
cat1=loadImage("images/cat1.png")
catAnimation=loadAnimation("images/cat2.png","images/cat3.png")

groundImg=loadImage("images/garden.png")

mouseImg=loadImage("images/mouse1.png")
mouse1=loadImage("images/mouse4.png")
mouseAnimation=loadAnimation("images/mouse2.png","images/mouse2.png")


}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat=createSprite(590,595,20,50)
cat.addImage(catImg)
cat.scale=0.17;


ground=createSprite(1,325);
ground.addImage(groundImg);
ground.scale=1.5

cat.depth=ground.depth;
cat.depth=cat.depth+1;

mouse=createSprite(90,595);
mouse.addImage(mouseImg);
mouse.scale=0.20
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
   
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode === LEFT_ARROW){
  mouse.addImage("moving",mouse1 );
  }
}
