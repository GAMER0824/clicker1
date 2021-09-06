var apple
var appleImg
var score = 0
var i1,i2,i3

function preload() {
  appleImg = loadImage("apple2.png")
}

function setup() {
  createCanvas(1200,800);

  apple = createSprite(200, 400, 50, 50);
  apple.addImage("apple",appleImg)
  apple.scale = 1.5

  i1 = createSprite(1150,100)
  i1.shapeColor = "white"
  i1.visible = false

  i2 = createSprite(1150,210)
  i2.shapeColor = "white"
  i2.visible = false

  i3 = createSprite(1150,320)
  i3.shapeColor = "white"
  i3.visible = false

}

function draw() {
  background("brown"); 

  if(score >= 10){
    i1.visible = true
  }

  if(score >= 150){
    i2.visible = true
  }

  if(score >= 400){
    i3.visible = true
  }

  if(mousePressedOver(i1) && i1.visible === true){
      i1.visible = false
      score -= 10
  }
  if(mousePressedOver(i2) && i2.visible === true){
    i2.visible = false
     score -= 150
  }
  if(mousePressedOver(i3) && i3.visible === true){
    i3.visible = false
    score -= 400
  }
  
  
  drawSprites();

   fill("white")
   textSize(30)
   text(score,200,50)
   
}

function mouseClicked(){
 var distance = dist(apple.x,apple.y,mouseX,mouseY)
 console.log(distance)
 if(distance <= 36)
     score ++ 

}
