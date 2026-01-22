$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(200, 620, 50, 46, "red")
    createPlatform(300, 500, 50, 46, "orange")
    createPlatform(400, 400, 50, 46, "yellow")
    createPlatform(500, 300, 50, 46, "green")
    createPlatform(600, 200, 50, 46, "blue")
    createPlatform(700, 100, 100, 46, "purple")
    // TODO 3 - Create Collectables
    createCollectable("database", 725, 50, 0.5, 0.7)
    createCollectable("database", 300, 400, 0.5, 0.7)
    createCollectable("database", 515, 230, 0.5, 0.7)


    
    // TODO 4 - Create Cannons
    createCannon("right", 790, 1000)
    createCannon("right", 650, 1000)
    createCannon("right", 510, 1000)
    createCannon("right", 320, 1000)
    createCannon("right", 180, 1000)
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
