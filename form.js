class Form {
    constructor() {
        this.input  = createInput("Name"); 
        this.button = createButton("Start"); 
        this.greeting = createElement("h2"); 
    }

    display() {
        var title = createElement("h1"); 
        title.html("InFeCtIon!"); 
        title.position(650,0);

        this.input.position(650,200); 
        this.button.position(710,280); 

        this.button.mousePressed(()=>{
            this.input.hide(); 
            this.button.hide(); 

            player.name = this.input.value();
            playerCount += 1; 
            player.index = playerCount; 
            player.updateCount(playerCount); 

            if(roleDecider == "infector") {
                player.role = "player"; 
                this.greeting.html("Welcome " + player.name + "! You are a civilian, your goal is to make it to the other side of the map without being infected!"); 

            }
            else {
                var rand = Math.round(random(1,2));

                if(rand == 1) {
                    player.role = "infector";
                    player.updateRoleDecider(player.role); 
                    this.greeting.html("Welcome " + player.name + "! You are the infector, your goal is to infect everyone with your infectious disease by touching them!"); 

                }
                else {
                    player.role = "player"; 
                    this.greeting.html("Welcome " + player.name + "! You are a civilian, your goal is to make it to the other side of the map without being infected!"); 
                }

            }

            player.updateDetails(); 

            this.greeting.position(400,400); 
        }); 
    }

    hide() {
        this.input.hide(); 
        this.button.hide(); 
        this.greeting.hide(); 
    }

}
