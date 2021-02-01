class Player {
  constructor(color) {
    this.start=[]
    this.rank = null;
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.path = []
    this.peg1 = createSprite()
    this.peg2 = createSprite()
    this.peg3 = createSprite()
    this.peg4 = createSprite()
    this.peg1.shapeColor=color;
    this.peg2.shapeColor=color;
    this.peg3.shapeColor=color;
    this.peg4.shapeColor=color;
    
  }
   createPath() {
  var path1 = [[75, 325], [125, 325], [175, 325], [225, 325], [275, 325]]
  var path2 = [[325, 225], [325, 175], [325, 125], [325, 75], [325, 25], [375, 25]]
  var path3 = [[425, 25]]
  var path4 = [[425, 75], [425, 125], [425, 175], [425, 225], [425, 275]]
  var path5 = [[475, 325], [525, 325], [575, 325], [625, 325], [675, 325], [725, 325], [725, 375]]
  var path6 = [[725, 425]]
  var path7 = [[675, 425], [625, 425], [575, 425], [525, 425], [475, 425]]
  var path8 = [[425, 475], [425, 525], [425, 575], [425, 625], [425, 675], [425, 725], [375, 725]]
  var path9 = [[325, 725]]
  var path10 = [[325, 675], [325, 625], [325, 575], [325, 525], [325, 475]]
  var path11 = [[275, 425], [225, 425], [175, 425], [125, 425], [75, 425], [25, 425]]
  var path12 = [[25, 375], [75, 375], [125, 375], [175, 375], [225, 375], [275, 375]]
  var home = [[375, 375]]
  var path13 = [[25, 325]]
  var path14 = [[375, 75], [375, 125], [375, 175], [375, 225], [375, 275]]
  var path15 = [[675, 375], [625, 375], [575, 375], [525, 375], [475, 375]]
  var path16 = [[375, 675], [375, 625], [375, 575], [375, 525], [375, 475]]
  
  
 
  if (this.index === 1) {
    this.path = concat(path1, path2, path3, path4, path5, path6, path7, path8, path9, path10, path11, path12,home);
    this.start=[[150,150]]
  }
  if (this.index === 2) {
    this.path = concat(path4, path5, path6, path7, path8, path9, path10, path11, path12, path13, path1, path2, path14,home);
    this.start=[[600,150]]
  }
  if (this.index === 3) {
    this.path = concat(path7, path8, path9, path10, path11, path12, path13, path14, path1, path2, path3, path4, path5, path15,home);
    this.start=[[600,600]]
  }
  if (this.index === 4) {

    this.path = concat(path10, path11, path12, path13, path1, path2, path3, path4, path5, path6, path7, path8, path16);
    this.start=[[150,600]]
  }
  for (var i = 0; i < this.path.length; i++) {
    fill("yellow")
    ellipse(this.path[i][0], this.path[i][1], 5, 5)
  }
}

movePeg(num,peg){
if(this.index===1&&peg.x===this.start[0][0]&&peg.y===this.start[0][1]){
if(num>=6){
  peg.x=this.path[0][0]
      peg.y=this.path[0][1]
}
}
else{
  for(var i=0;i<this.path.length;i++){
    if(this.path[i][0]===peg.x&&this.path [i][1]===peg.y){
      peg.x=this.path[i+num][0]
      peg.y=this.path[i+num][1]
    }
  
}
}
  

}
diceRoll(){
  var rand=Math.round(random(1,6))
  return rand
}
  getCount() {
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value", (data) => {
      playerCount = data.val();
    })
  }

  updateCount(count) {
    database.ref('/').update({
      playerCount: count
    });
  }

  update() {
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name: this.name,
      distance: this.distance,
      rank: this.rank
    });
  }

  static getPlayerInfo() {
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value", (data) => {
      allPlayers = data.val();
    })
  }
  getCarsAtEnd() {
    database.ref("carsAtEnd").on("value", (data) => {
      this.rank = data.val();

    })

  }
  static updateCarsAtEnd(rank) {
    database.ref("/").update({
      carsAtEnd: rank
    })
  }
}
