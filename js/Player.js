class Player {
  constructor(){
    this.rank=null;
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.peg1=createSprite()
    this.peg2=createSprite()
    this.peg3=createSprite()
    this.peg4=createSprite()
    this.path=[]
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

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance,
      rank:this.rank
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
  getCarsAtEnd(){
    database.ref("carsAtEnd").on("value",(data)=>{
      this.rank=data.val();

    })

  }
  static updateCarsAtEnd(rank){
    database.ref("/").update({
      carsAtEnd:rank
    })
  }
}
