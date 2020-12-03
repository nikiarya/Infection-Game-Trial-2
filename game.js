class Game {
    constructor() {
        
    }

    getState() {
        database.ref("gameState").on("value", (data) => {
            gameState = data.val(); 
        })
    }

    updateState(state) {
        database.ref("/").update({
            'gameState' : state
        }); 
    }

    async start() {
        if(gameState === 0){
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){
              playerCount = playerCountRef.val();
              player.getCount();
            }
            form = new Form()
            form.display();
            player.readRoleDecider(); 
        }
        p1 = createSprite(50,50);
        p1.addImage(p1Img); 
        p1.scale = 0.1; 
        p2 = createSprite(50,100);
        p2.addImage(p2Img); 
        p2.scale = 0.1; 
        p3 = createSprite(50,150);
        p3.addImage(p3Img); 
        p3.scale = 0.1; 
        p4 = createSprite(50,200);
        p4.addImage(p4Img); 
        p4.scale = 0.1; 
        p5 = createSprite(50,250);
        p5.addImage(p5Img); 
        p5.scale = 0.1; 

        pArray = [p1,p2,p3,p4,p5]; 

    }

    play() {
        form.hide(); 
        Player.getPlayersInfo();  
        if(allPlayers !== undefined) {
            background(bg); 

            var index = 0; 

            var x = 50; 
            var y = 0; 

            for(var plr in allPlayers){
                index = index + 1; 
                y+=100; 
                pArray[index-1].y = y; 
                pArray[index-1].x = x; 
                if(allPlayers[plr].role == "infector") {
                    pArray[index-1].addImage(infectorImg); 
                }

                if (index === player.index){
                    stroke(10); 
                    fill("red"); 
                    ellipse(x,y,60,60); 
                  }

              
            }
        }
        if(keyIsDown(UP_ARROW) && player.index !== null) {
            pArray[player.index-1].y -= 1; 
        }
        else if(keyIsDown(DOWN_ARROW) && player.index !== null) {
            pArray[player.index-1].y +=1; 
        }
        else if(keyIsDown(LEFT_ARROW) && player.index !== null) {
            pArray[player.index-1].x -= 1; 
        }
        else if(keyIsDown(RIGHT_ARROW) && player.index !== null) {
            pArray[player.index-1].x +=1; 
        }
        drawSprites(); 
    }
}