var canvas, backgroundImage;

var gameState = 0;
var playerCount = 0;
var allPlayers;
var distance = 0;
var database;

var form, player, game, color;


  
  //createSprite(400, 200, 50, 50);
  function setup(){
    canvas = createCanvas(displayWidth - 20, displayHeight-30);
    
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();

  
    player = new Player();
  }


function draw() {
  background(255,255,255); 
  if(playerCount == 3){
    game.update(1)
  }

  if(gameState == 1){
    color.display();
    console.log(gameState);
    form.hide();
  }
  
  //color.display();
  //drawSprites();
}