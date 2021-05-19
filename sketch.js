var tom,jerry;
var backgroungImg,tomImg1,tomImg2,tomImg3,jerryImg3,jerryImg1,jerryImg2;

function preload() {
    //load the images here
    backgroundImg=loadImage("images/garden.png");
    tomImg1=loadAnimation("images/cat1.png");
    jerryImg1=loadAnimation("images/mouse1.png");
    tomImg2=loadAnimation("images/cat2.png","images/cat3.png");
    jerryImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
    tomImg3=loadAnimation("images/cat4.png");
    jerryImg3=loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(870,600);
    tom.addAnimation("tomSleeping",tomImg1);
    tom.scale=0.2;

    jerry=createSprite(200,600);
    jerry.addAnimation("jerry",jerryImg1);
    jerry.scale=0.15;
}

function draw() {

    background(backgroundImg);
    //Write condition here to evalute if tom and jerry collide

    if(tom.x-jerry.x< tom.width/2-jerry.width/2){
       tom.velocityX=0;
       tom.addAnimation("tomImage",tomImg3);
       tom.changeAnimation("tomImage");
       tom.x=300;

       jerry.addAnimation("jerryImage",jerryImg3);
       jerry.changeAnimation("jerryImage");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
   
  if(keyCode === LEFT_ARROW){

      tom.velocityX=-5;
      tom.addAnimation("tomRunning",tomImg2);
      tom.changeAnimation("tomRunning");

      jerry.addAnimation("mouseTeasing",jerryImg2);
      jerry.changeAnimation("mouseTeasing");
      jerry.frameDelay=25;
  }

}
