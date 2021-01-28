class Game {
  constructor() {

  }

  getState() {
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    })

  }

  update(state) {
    database.ref('/').update({
      gameState: state
    });
  }

  async start() {
    if (gameState === 0) {
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if (playerCountRef.exists()) {
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    car1 = createSprite(100, 200);
    car1.addImage("car1", car1_img);
    car2 = createSprite(300, 200);
    car2.addImage("car2", car2_img);
    car3 = createSprite(500, 200);
    car3.addImage("car3", car3_img);
    car4 = createSprite(700, 200);
    car4.addImage("car4", car4_img);
    cars = [car1, car2, car3, car4];
  }

  play() {
    form.hide();
    console.log("play");
    Player.getPlayerInfo();
    player.getCarsAtEnd();
    if (allPlayers !== undefined) {
      //background(rgb(198,135,103));
      // image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
      this.squares()
      this.createPath()
      //var display_position = 100;

      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 175;
      var y;

      for (var plr in allPlayers) {
        //add 1 to the index for every loop
        index = index + 1;

        //position the cars a little away from each other in x direction
        x = x + 200;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
        cars[index - 1].x = x;
        cars[index - 1].y = y;
        // console.log(index, player.index)


        if (index === player.index) {
          stroke(10);
          fill("red");
          ellipse(x, y, 60, 60);
          cars[index - 1].shapeColor = "red";
          camera.position.x = displayWidth / 2;
          camera.position.y = cars[index - 1].y;
        }

        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if (keyIsDown(UP_ARROW) && player.index !== null) {
      player.distance += 10
      player.update();
    }

    if (player.distance > 3860) {
      gameState = 2;
      player.rank++
      Player.updateCarsAtEnd(player.rank);
    }

    drawSprites();
  }

  end() {
    console.log("Game Ended");
    console.log(player.rank);
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
    if (player.index === 1) {
      player.path = concat(path1, path2, path3, path4, path5, path6, path7, path8, path9, path10, path11, path12);
    }
    if (player.index === 2) {
      player.path = concat(path4, path5, path6, path7, path8, path9, path10, path11, path12, path13, path1, path2, path14);
    }
    if (player.index === 3) {
      player.path = concat(path7, path8, path9, path10, path11, path12, path13, path14, path1, path2, path3, path4, path5, path15);
    }
    if (player.index === 4) {

      player.path = concat(path10, path11, path12, path13, path1, path2, path3, path4, path5, path6, path7, path8, path16);
    }
    for (var i = 0; i < player.path.length; i++) {
      fill("yellow")
      ellipse(player.path[i][0], player.path[i][1], 5, 5)
    }
  }
  squares() {
    stroke(0)
    rectMode(CENTER)
    for (var i = 25; i < 300; i += 50) {
      fill("grey")

      var block2 = rect(375, i, 50, 50);
      fill("brown")
      // block2.shapeColor="brown";
      var block3 = rect(425, i, 50, 50);
      var block1 = rect(325, i, 50, 50);

    }
    //yelow
    for (var i = 725; i > 450; i -= 50) {
      fill("grey")

      var block2 = rect(375, i, 50, 50);
      fill("brown")
      //block2.shapeColor="brown";
      var block3 = rect(425, i, 50, 50);
      var block1 = rect(325, i, 50, 50);

    }
    //blue
    for (var i = 725; i > 450; i -= 50) {
      fill("grey")

      var block2 = rect(i, 375, 50, 50);
      fill("brown")
      //block2.shapeColor="brown";
      var block3 = rect(i, 425, 50, 50);
      var block1 = rect(i, 325, 50, 50);

    }
    //red
    for (var i = 25; i < 300; i += 50) {
      fill("grey")

      var block2 = rect(i, 375, 50, 50);
      fill("brown")
      var block1 = rect(i, 325, 50, 50);
      //lock2.shapeColor="brown";
      var block3 = rect(i, 425, 50, 50);

    }
  }
}
