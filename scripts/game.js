class Game {
  constructor($canvas, context, squaresHeight, squaresWidth) {
    this.canvas = $canvas;
    this.context = context;
    this.background = new Background($canvas, context, squaresHeight, squaresWidth);
    this.character = new Character(0, 0, $canvas, context, squaresHeight, squaresWidth);
    this.treasure = new Treasure($canvas, context, squaresHeight, squaresWidth);
    this.squaresHeight = squaresHeight;
    this.squaresWidth = squaresWidth;
  }

  start() {
    this.background.draw();
    this.character.draw();
    this.treasure.draw();
  }

  drawEverything() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.background.draw();
    this.character.draw();
    this.treasure.draw();
  }
}
