var garden,rabbit;
var gardenImg,rabbitImg;
var apples, apple_Img; 
var Leaves, leaf, leaf_Img, orgLeaf, redLeaf;

function preload()
{
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");

  apple_Img = loadImage("apple.png");

  leaf_Img = loadImage("leaf.png");
  orgLeaf = loadImage("orangeLeaf.png");
  redLeaf = loadImage("redImage.png");

}

function setup()
{
  
  createCanvas(400,400);
  
  // Moving background
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

  //creating boy running
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);
}


function draw() 
{
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  //Moving the rabbit with mouse along the x-axis
  rabbit.x=World.mouseX;

  spawnApples();

  spawnLeaves();

  drawSprites();

}

//function to spawn the apples
function spawnApples()
{
  //write code here to spawn the apples
  if (frameCount % 60 === 0) 
  {
    apples = createSprite(150,50,10,20);
    apples.velocityY = 3;
    apples.lifetime = 100;
    apples.scale = 0.1;

    var rand = Math.round(random(1,4));

    switch(rand)
    {
      case 1 : apples.addImage(apple_Img);
      break;
      case 2 : apples.addImage(leaf);
      break;
      case 3 : apples.addImage(redLeaf);
      break;
      case 4 : apples.addImage(orgLeaf);
      break;

    }

    //adjust the depth
    apples.depth = rabbit.depth
    rabbit.depth = rabbit.depth + 1;
    
  }
}

//functionto spawn the leaves
function spawnLeaves()
{
  if (frameCount % 80 === 0 ) 
  {
   Leaves = createSprite(250,50,10,20);
   Leaves.velocityY = 3;
   Leaves.lifetime = 100;
   Leaves.scale = 0.1;
   var rand = Math.round(random(1,4));

    switch(rand)
    {
      case 1 : Leaves.addImage(apple_Img);
      break;
      case 2 : Leaves.addImage(redLeaf);
      break;
      case 3 : Leaves.addImage(leaf);
      break;
      case 4 : Leaves.addImage(orgLeaf);
      break;
    }

    //adjust the depth
    Leaves.depth = rabbit.depth
    rabbit.depth = rabbit.depth + 1;

  }
}
