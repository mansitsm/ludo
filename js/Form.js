class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('Reset');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.reset.position(displayWidth-100,20);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      player.createPath();
      player.peg1.x=player.path[0][0]
      player.peg1.y=player.path[0][1]
      player.peg2.x=player.path[0][0]
      player.peg2.y=player.path[0][1]
      player.peg3.x=player.path[0][0]
      player.peg3.y=player.path[0][1]
      player.peg4.x=player.path[0][0]
      player.peg4.y=player.path[0][1]
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });

    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
      Player.updateCarsAtEnd(0);
    });

  }
}
