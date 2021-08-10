
var jack,jack2;
var platform,platform2;
var jack_image, platform_image,stone_image;

var score=0;
var platform1,platform2,platform3,platforn4,platform5,platform6;

function preload(){
  jack_image=loadImage("images/jack2.png")
  platform_image = loadImage("images/p1.png");
  
  platform1 = loadImage("images/platform1.png")
  platform2 = loadImage("images/platform2.png")
  //load images for other platforms

  
}


function setup() {
  createCanvas(500, 500);
  jack = createSprite(250,300,20,50);
  jack.addImage("jack",jack_image)

  platform = createSprite(250,350,100,10);
  platform.addImage("platform", platform_image)
  platform.scale=0.15
  
}

function draw() {
  background('#F2F5B6');

  //Calculate and display score

  
  if(keyDown("up"))
  {
    jack.velocityY=-10
  }

  //moving jack right

  if(keyDown("right")){
    jack.x = jack.x+7;
  }

  //Write code to move jack to left when left arrow key is pressed


  jack.velocityY = jack.velocityY +0.8;
  jack.collide(platform)

  spawnPlatform();

  drawSprites();
}

function spawnPlatform(){

  if(frameCount % 60 ===0){
  
    var platforms = createSprite(250,0,50,50);
    platforms.velocityY = 4;

    var x = Math.round(random(1,6))

    switch(x){
      case 1: platforms.addImage(platform1);
      break;
      case 2: platforms.addImage(platform2);
      break;

      //add other cases
    }
  

  platforms.scale = 0.15;

  platforms.x = random(0,500);
  }
}











