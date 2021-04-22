class Game{
    constructor(){

    }
    getState(){
var getStateref = dataBase.ref('gameState')
getStateref.on("value",function(data){
    gameState = data.val()
})
    }


play(){
form.hide()
textSize(10)
text("gameStart",209,300)
Player.getPlayerinfo()
if(allPlayer!== undefined){
    var displayPosition = 130
    for(var i in allPlayer){
        if(i === "player"+player.index)
        fill("red")
        else(
            fill("black")
        )
        displayPosition = displayPosition+20
        text(allPlayer[i].name+":"+allPlayer[i].distance,120,displayPosition)
    }
}
if(keyIsDown(UP_ARROW) && player.index !== null){
     player.distance +=50
      player.update(); }

}

    update(state){
    dataBase.ref('/').update({
        gameState : state
    })
    }
    start(){
    if(gameState === 0){
        player = new Player()
        player.getCount()
        form = new Form()
        form.display()
    }
    }
}