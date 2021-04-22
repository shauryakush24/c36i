class Player{
    constructor(){
    this.index = null
    this.distance = 0
    this.player = null
    }

    getCount(){ var playerCountRef = dataBase.ref('playerCount');
     playerCountRef.on("value" , function(data){ playerCount = data.val(); }) }

     updatCount(count){
        dataBase.ref('/').update({
            playerCount : count
        })
        }
        update(){
         var playerIndex = "players/player"+this.index ; 
        dataBase.ref(playerIndex).set({
             name:this.name,
             distance:this.distance
             }); }

             static getPlayerinfo(){
                 var playerInforef = dataBase.ref("players")
                 playerInforef.on("value",(data) =>(
                  allPlayer = data.val()   
                 ))
             }
             
}
