//Create variables here
 var dog,dog_Img1,dog_Img2;
 var database;
 var foodS,foodStock;




function preload()
{
  //load images here
  dog_Img1 = loadImage("images/dogImg.png");
  dog_Img2 = loadImage("images/dogImg.png");
}

function setup() {
  database = firebase.database();
  createCanvas(500,500);
  dog = createSprite(250,300,150,150);
  dog.addImage(dog_Img1);
  dog.scale = 0.15;

  foodStock = database.ref("food");
  foodStock.on("value",readStock);
  textSize(20);


  
}


function draw() {  

  background("black");
  if(keyWentDown(UP_ARROW)){
     writeStock(foodS);
      dog.addImage(dogImg1);
     } 
     drawSprites();
      fill(255,255,254);
       stroke("black"); 
       text("Food remaining : "+foodS,170,200); 
       textSize(13); 
       text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
       }

    
  //add styles here
function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if(x<=0){
    x = 0;
  }
  else{
    x = x-1;
  }
  database.ref("/").update({
    Food : x
  })
}


