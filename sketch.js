var sis;

var s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12;
var ps1, ps2, ps3, ps4, ps5, ps6, ps7, ps8, ps9, ps10, ps11, ps12;
var p1, p2, p3, p4, p5, p5, p7, p8, p9, p10, p11, p12;

var song, song111;

function preload(){
  
  ps1 = loadImage("p1.jpeg");
  ps2 = loadImage("p2.jpeg");
  ps3 = loadImage("p3.jpeg");
  ps5 = loadImage("p5.jpeg");
  ps6 = loadImage("p6.jpeg");
  ps7 = loadImage("p7.jpeg");
  ps8 = loadImage("p8.jpeg");
  ps9 = loadImage("p9.jpeg");
  ps10 = loadImage("p10.jpeg");
  ps12 = loadImage("p12.jpeg");
  
  song = loadSound("song111.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
    sis = createSprite(width/2, height/2, 20, 20);
    sis.addImage(ps1);
    sis.scale = 0.3;
}

function draw() {
  background("#a29bfe");
  
  c1();

  song.play();
    
  drawSprites();
  
}

function c1(){
  
  if(frameCount%100===0){
  
    sis.addImage(ps2);
  }
  
  if(frameCount%200===0){
    
    sis.addImage(ps3);
  }
  
   if(frameCount%300===0){
    
    sis.addImage(ps5);
  }
  
   if(frameCount%400===0){
    
    sis.addImage(ps6);
  }
  
   if(frameCount%500===0){
    
    sis.addImage(ps7);
  }
  
   if(frameCount%600===0){
    
    sis.addImage(ps8);
  }
  
   if(frameCount%700===0){
    
    sis.addImage(ps9);
  }
  
   if(frameCount%800===0){
    
    sis.addImage(ps10);
  }
  
   if(frameCount%900===0){
    
    sis.addImage(ps12);
  }
  
   if(frameCount%1000===0){
    
    sis.addImage(ps1);
  }
  }





