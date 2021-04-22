class Form{
    constructor(){
        this.input = createInput("babu bhai")
        this.button = createButton("hello")
        this.greeting = createElement('h3')
    }
    hide(){
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
    }
    display(){
        var title = createElement('h1')
        title.html("real racing2")
        title.position(20,40)
        
        this.input.position(400,120)
       this.button.position(400,160)
        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
           player.name = this.input.value()
            playerCount = playerCount+1
            player.update()
            player.updatCount(playerCount)
           this.greeting.html("hello"+player.name)
           this.greeting.position(70,90)
        
        })
          
    }
}