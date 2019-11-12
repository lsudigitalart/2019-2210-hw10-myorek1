
var myPlane1; 
var myPlane2;
var myPlane3;
var myPlane4;

var myPlanes = [];

var myPlanes2=[];

// background 
var mycloud1;
var mycloud2;
var mycloud3;
var mycloud4;
var mycloud5;
var mybullet;
var bullet;

var myBullets = [];

//x = 0,
//y = 350;
var p1x = 0; 
var p1y =350;

var bx = p1x;
var by = p1y;

var music;
var score = 0; 

function preload(){
    planes[0] = loadImage("plane1.png");
    planes[1] = loadImage("plane2.png");
    planes[2] = loadImage("plane3.png");
    planes[3] = loadImage("plane4.png");

    planes2[0] = loadImage("plane1.png");
    planes2[1] = loadImage("plane2.png");
    planes2[2] = loadImage("plane3.png");
    planes2[3] = loadImage("plane4.png");

    clouds[0] = loadImage("cloud1.png");
    clouds[1]= loadImage("cloud2.png");
    clouds[2] = loadImage("cloud3.png");

    player = loadImage("plane5.png");
    bullet = loadImage("bullet.png");

    music = loadSound("war.mp3");

}
    

function player1(){


    if (keyIsPressed== true) {
        if (keyCode == LEFT_ARROW) {
        p1x-=3;
        }
        else if (keyCode == RIGHT_ARROW) {
        p1x+=3;
        }
        else if (keyCode == UP_ARROW){
          p1y-=3;
        }
        else if (keyCode == DOWN_ARROW){
          p1y+=3;
        }
      
      }
      
    image(player, p1x, p1y, player.width/2, player.height/2)

}



// array for planes 
var planes = [];
// array for clouds
var clouds = [];
// arry for planes2
var planes2 = [];

function setup() {
music.play();
createCanvas (1000,800);


// calls the object code (calling in the numners for temp size, speed and colorR)

for(var i = 0; i < 4; i++) {
    myPlanes[i] = new Plane(planes[i], (i+1)*-1, (i+1)*50+50);

    for(var i = 0; i < 4; i++) {
        myPlanes2[i] = new Plane2(planes2[i], (i+1)*-1.5, (i+1)*50+110);
    

}
}




// myPlane1 = new Plane(planes[0],-1.5,20);
// myPlane2 = new Plane(planes[1],-2,220);
// myPlane3 = new Plane(planes[2],-1.8,440);
// myPlane4 = new Plane(planes[3],-1.3,640);

mycloud1 = new Cloud(clouds[0],-1,1000,200);
mycloud2 = new Cloud(clouds[1],-1,800,30);
mycloud3 = new Cloud(clouds[2],-1,500,500);
mycloud4 = new Cloud(clouds[0],-1,700,700);
mycloud5 = new Cloud(clouds[1],-1,300,600);

//myBullets[0] = new Bullet(p1x, p1y, bullet, 7);


}


function draw() {
    // background gradent
    background(150);
    noStroke();
    fill(70);
    rect(0,0,1000,30)
    fill(73);
    rect(0,30,1000,30)
    fill(76);
    rect(0,60,1000,30)
    fill(80);
    rect(0,90,1000,30)
    fill(83);
    rect(0,120,1000,30)
    fill(86);
    rect(0,150,1000,30)
    fill(90);
    rect(0,180,1000,30)
    fill(93);
    rect(0,210,1000,30)
    fill(96);
    rect(0,240,1000,30)
    fill(100);
    rect(0,270,1000,30)
    fill(103);
    rect(0,300,1000,30)
    fill(106);
    rect(0,330,1000,30)
    fill(110);
    rect(0,360,1000,30)
    fill(113);
    rect(0,390,1000,30)
    fill(116);
    rect(0,420,1000,30)
    fill(120);
    rect(0,450,1000,30)
    fill(123);
    rect(0,480,1000,30)
    fill(126);
    rect(0,510,1000,30)
    fill(130);
    rect(0,540,1000,30)
    fill(133);
    rect(0,570,1000,30)
    fill(136);
    rect(0,600,1000,30)
    fill(140);
    rect(0,630,1000,30)
    fill(143);
    rect(0,660,1000,30)
    fill(146);
    rect(0,690,1000,30)


textSize(25)
text('Press enter to shoot.', 710, 30);
text('Use arrow keys to move plane.', 650, 60);
text("Score:", 10,30)
text(score, 90,30);

player1();


// clouds 
mycloud1.display();
mycloud1.update();

mycloud2.display();
mycloud2.update();

mycloud3.display();
mycloud3.update();

mycloud4.display();
mycloud4.update();


mycloud5.display();
mycloud5.update();

// displays planes(wont display with out it)
// myPlane1.display();
// myPlane1.update();

//plane 2
for (var i = 0; i < myPlanes.length; i++){
    myPlanes[i].display();
    myPlanes[i].update();
}

for (var i = 0; i < myPlanes2.length; i++){
    myPlanes2[i].display();
    myPlanes2[i].update();
}
// bullets 

for (var n =0; n < myBullets.length; n++){
    myBullets[n].display();
    myBullets[n].update();
    myBullets[n].interact();
}
// commands 
if (keyIsPressed== true) {



    if(keyCode == ENTER){

        myBullets.push(new Bullet(p1x, p1y, bullet, 7));

        // this.xPos = this.xPos + this.speed;
    }

}


 for (var i =0; i < myPlanes.length; i++) {
   if( myPlanes[i].yPos == -1000) {
    myPlanes.splice(i,1);

   }

   for (var i =0; i < myPlanes2.length; i++) {
    if( myPlanes2[i].yPos == -1000) {
     myPlanes2.splice(i,1);
 
    }
    
}


print(myPlanes.length)

// bullet collision 
for (var i =0; i < myPlanes.length; i++) {
    for(var n = 0; n < myBullets.length; n++) {

 var d = dist(myBullets[n].xpos, myBullets[n].ypos, myPlanes[i].xPos, myPlanes[i].yPos)

   if (d < 100){
        myPlanes[i].speed = + .5
        score = score + 5;
        myPlanes[i].hit =  myPlanes[i].hit +1 ; 
     }

     if( myPlanes[i].hit > 60 ){
        //  myPlanes.splice(i,1);
        myPlanes[i].yPos = -1000;
         print("hit")
     }
    
     if (myBullets[n].xpos > 1000){
        myBullets.splice(i,1);
    }

}
}

// planes 2
for (var i =0; i < myPlanes2.length; i++) {
    for(var n = 0; n < myBullets.length; n++) {

 var d = dist(myBullets[n].xpos, myBullets[n].ypos, myPlanes2[i].xPos, myPlanes2[i].yPos)

   if (d < 100){
        myPlanes2[i].speed = + .5
        score = score + 5;
        myPlanes2[i].hit =  myPlanes2[i].hit +1 ; 
     }

     if( myPlanes2[i].hit > 100 ){
        //  myPlanes.splice(i,1);
        myPlanes2[i].yPos = -1000;
         print("hit")
     }
    
     if (myBullets[n].xpos > 1000){
        myBullets.splice(i,1);
    }

}
}
 
 }
}



// cloud object 
function Cloud(tempCloudImage, tempSpeed,tempX, tempY){
this.cloudImage = tempCloudImage;
this.speed = tempSpeed;
this.yPos = tempY;
this.xPos = tempX;

this.display = function(){

    image(this.cloudImage, this.xPos,this.yPos, this.cloudImage.width/2,this.cloudImage.height/2)

}

this.update = function(){
    this.xPos = this.xPos +this.speed;

    if (this.xPos < 0)
    this.xPos = 1000
}

}
// Plane object
function Plane(tempPlaneImage, tempSpeed, tempY) {

    this.planeImage = tempPlaneImage;
    this.speed = tempSpeed;
    this.yPos = tempY
    this.xPos = 0;
    this.hit = 0; 

    // what ants look like
    this.display = function(){

       image(this.planeImage,this.xPos,this.yPos,this.planeImage.width/2, this.planeImage.height/2)

    }

    this.update = function(){

        this.xPos = this.xPos + this.speed;

//resets x position
        if (this.xPos < 0)
        this.xPos = 1000;
    }



    this.interact = function(){


    }  
}


function Plane2(tempPlaneImage, tempSpeed, tempY) {

    this.planeImage = tempPlaneImage;
    this.speed = tempSpeed;
    this.yPos = tempY
    this.xPos = 0;
    this.hit = 0; 

    // what ants look like
    this.display = function(){

       image(this.planeImage,this.xPos,this.yPos,this.planeImage.width/2, this.planeImage.height/2)

    }

    this.update = function(){

        this.xPos = this.xPos + this.speed;

//resets x position
        if (this.xPos < 0)
        this.xPos = 1000;
    }



    this.interact = function(){


    }  
}

// bullet
function Bullet(tempxPos, tempyPos, tempBulletImage, tempSpeed) {


    this.BulletImage = tempBulletImage;
    this.speed = tempSpeed;
    this.ypos = tempyPos + 40;
    this.xpos = tempxPos + 80;
    
  
    this.display = function(){

       image(this.BulletImage,this.xpos,this.ypos,this.BulletImage.width/2, this.BulletImage.height/2)

    }

    this.update = function(){

    
        this.xpos = this.xpos + this.speed;
//resets x position 
       

    }



    this.interact = function(){

        // if (keyIsPressed== true) {
        //     if (keyCode == LEFT_ARROW) {
        //     this.xPos = this.xPos-3;
        //     }
        //     else if (keyCode == RIGHT_ARROW) {
        //     this.xPos = this.xPos+3;
        //     }
        //     else if (keyCode == UP_ARROW){
        //         this.yPos = this.yPos-3;
        //     }
        //     else if (keyCode == DOWN_ARROW){
        //         this.yPos = this.yPos+3;
        //     }
               
        //     }
        //     if(keyCode == ENTER){
        //         this.xPos = this.xPos + this.speed;
        //     }

        // }

    }
}
