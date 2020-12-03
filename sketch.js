var gameState = 0; 
var playerCount = 0; 
var database; 

var form, player, game; 
var roleDecider; 

var allPlayers; 
var bg; 

var p1, p2, p3, p4, p5; 
var p1Img, p2Img, p3Img, p4Img, p5Img, infectorImg; 
var pArray; 

function preload()
{
  bg = loadImage("images/BACKGROUND.png"); 

  p1Img = loadImage("images/RED.png"); 
  p2Img = loadImage("images/BLUE.png"); 
  p3Img = loadImage("images/PURPLE.png"); 
  p4Img = loadImage("images/ORANGE.png"); 
  p5Img = loadImage("images/GREEN.png"); 
  infectorImg = loadImage("images/INFECTER.png"); 


}

function setup() {
  createCanvas(800, 700);

  database = firebase.database(); 
  game = new Game(); 
  game.getState(); 
  game.start(); 

  

}


function draw() {   

  if(playerCount == 5) {
    game.updateState(1); 
  }

  if(gameState == 1) {
    clear(); 
    game.play(); 
  }

}



