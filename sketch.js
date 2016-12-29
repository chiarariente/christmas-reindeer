var myBg;

function preload() {
  myBg = loadImage('assets/christmas_reindeer.png');
}

function setup() {
  createCanvas(360,640);
  
  mic = new p5.AudioIn();
  mic.start();
    
  startingColor = color('#c15252');
  endingColor = color('#c73927');
}

function draw() {
  var volume = mic.getLevel();
  
  var newMax = 5;
  volume = map(volume,0,1,0,newMax);
  
  // background
  background(color('#9ee5e1'));
  translate(width/2,height/2-100);
  imageMode(CENTER);
  image(myBg,0,100,360,640);
    
  // mouth
  push();
  translate(5,115);
  noStroke();
  fill('#4c2c22');
  var size = map(volume*2,0,1,width/14,width/10);
  arc(0, 0, size, size, 0, PI, CHORD);
  pop(); 
    
    // eye L
    push();
    rotate(PI);
    var eyeX = 10;
    var eyeY = -60;
    var eyeSizeX = 15;
    var eyeSizeY = 18;
    fill('#4c2c22');
    noStroke();
    ellipse(eyeX,eyeY,eyeSizeX,eyeSizeY);
    var eyelidShift = map(volume,0,1,18,14);
    fill('#b7845d');
    ellipse(eyeX,eyeY-eyelidShift,eyeSizeX,eyeSizeY);
    pop();
    
    // eye R
    push();
    rotate(PI);
    eyeX = -15;
    eyeY = -60;
    eyeSizeX = 15;
    eyeSizeY = 18;
    fill('#4c2c22');
    noStroke();
    ellipse(eyeX,eyeY,eyeSizeX,eyeSizeY);
    eyelidShift = map(volume,0,1,18,14);
    fill('#b7845d');
    ellipse(eyeX,eyeY-eyelidShift,eyeSizeX,eyeSizeY);
    line(0,0,0,20);
    pop();
    
    // nose
    push();
    translate(-45,45);
    var noseColor = lerpColor(startingColor,endingColor,volume*2);
    fill(noseColor);
    noStroke();
    size = map(volume*2,0,1,width/14,width/13);
    ellipse(50,50,size,size/1.2);
    pop();
    
    textAlign(CENTER);
    textFont("Yellowtail",42);
    fill(255);
    text("Merry",0,345);
    text("Christmas",0,385);
}