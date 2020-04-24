const $canvas = document.querySelector("canvas");
const context = $canvas.getContext("2d");

const $button = document.getElementById("submit-grid");

let game;

$button.addEventListener("click", () => {
  const squaresWidth = document.getElementById("squares-width").valueAsNumber;
  const squaresHeight = document.getElementById("squares-height").valueAsNumber;
  console.log(squaresWidth, squaresHeight);
  game = new Game($canvas, context, squaresHeight, squaresWidth);
  game.start();
});

window.addEventListener("keydown", (event) => {
  // Stop the default behavior (moving the screen to the left/up/right/down)
  event.preventDefault();

  // React based on the key pressed
  switch (event.keyCode) {
    case 37:
      game.character.moveLeft();
      game.drawEverything();
      //console.log("left");
      break;
    case 38:
      game.character.moveUp();
      game.drawEverything();
      //console.log("up");
      break;
    case 39:
      game.character.moveRight();
      game.drawEverything();
      //console.log("right");
      break;
    case 40:
      game.character.moveDown();
      game.drawEverything();
      //console.log("down");
      break;
  }
});
