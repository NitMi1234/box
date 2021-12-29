//declaring a ball
var ball;
//show what way the ball goes
var vx = 2;

function setup() {
  //creates a canvas
  createCanvas(400,400);
  //make a sprite
  ball = createSprite(100,100,100,100);
}

function draw() 
{ //add color and remov repeated images
  background(51);


  if(ball.position.x<=50 || ball.position.x>=width-50)
  {
    //reversing the sign the vx
    vx= -vx;
  }
  
  //making the vx velocity of the ball
  ball.velocity.x = vx;
  
  //draw sprites
  drawSprites();

}

