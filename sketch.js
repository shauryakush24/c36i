var canvas
var gameState = 0
var playerCount
var dataBase
var game
var form
var player
var allPlayer

function setup(){
    canvas = createCanvas(500,500)
    dataBase = firebase.database()
console.log(dataBase)
game = new Game(); game.getState(); game.start();
}

function draw(){
    if(playerCount===4){
        game.update(1)
    }
    if(gameState===1){
        clear()
        game.play()
    }
}
