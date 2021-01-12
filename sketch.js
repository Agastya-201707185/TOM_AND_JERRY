
function preload() {
backgroundImage = loadImage("garden.png");
jerryHappy = loadAnimation("jerryOne","jerryTwo","jerryThree","jerryFour");
tomHappy = loadAnimation("tomOne","tomTwo","tomThree","tomFour");
jerryImage = loadImage("jerryOne.png");
tomImage = loadImage("tomOne.png");
}

function setup(){
createCanvas(1000,800);
background = createSprite(1000,800);
background.addImage(backgroundImage); 
background.scale = 0.5;
tom = createSprite(400,850,60,50);
tom.addAnimation(tomHappy);
tom.scale = 0.5
jerry = createSprite(600)
jerry.addAnimation(jerryHappy);
jerry.scale=0.5;
}

function draw() {
background(255);
if(jerry.isTouching(tom)){
jerry.addImage(jerryImage);
tom.addImage(tomImage);
}
drawSprites();
}
function keyPressed(){
if(keyCode===LEFT_ARROW){
tom.velocityX = -5;
}
if(keyCode===RIGHT_ARROW){
tom.velocityX = 5;
}

}
