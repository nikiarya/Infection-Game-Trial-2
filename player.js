class Player {
    constructor() {
        this.index = null; 
        this.name = null; 
        this.role = null; 
    }

    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",(data)=>{
          playerCount = data.val();
        })
      }

    updateCount(count){
        database.ref('/').update({
          playerCount: count
        });
      }

    readRoleDecider() {
        database.ref("roleDecider").on("value",(data)=>{
            roleDecider = data.val(); 
        })
    }

    updateRoleDecider(role) {
        database.ref('/').update({
            roleDecider : role
        }); 
    }

    updateDetails() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
          name: this.name,
          role: this.role
        });
      }

    static getPlayersInfo() {
      database.ref('players').on("value",(data)=>{
        allPlayers = data.val(); 
      })
    }

}