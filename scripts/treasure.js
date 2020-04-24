class Treasure {
  constructor($canvas, context, squaresHeight, squaresWidth) {
    this.canvas = $canvas;
    this.context = context;
    this.col = 0;
    this.row = 0;
    this.setRandomPosition();
    /*
    Option 2
    this.col = Math.floor(Math.random() * 10);
    this.row = Math.floor(Math.random() * 10);
    */
    this.treasureImage = new Image();
    this.treasureImage.src = "./../images/treasure.png";
    this.squaresHeight = squaresHeight;
    this.squaresWidth = squaresWidth;
  }

  setRandomPosition() {
    //i need to randomly select a column;
    //i need to randomly select a row;

    const squaW = this.squaresWidth;
    const squaH = this.squaresHeight;

    const randomCol = Math.floor(Math.random() * squaW);
    const randomRow = Math.floor(Math.random() * squaH);

    this.col = randomCol;
    this.row = randomRow;
  }

  draw() {
    const width = this.canvas.width;
    const height = this.canvas.height;
    this.treasureImage.addEventListener("load", () => {
      console.log("im load treasure image and im running");
      this.context.drawImage(
        this.treasureImage,
        (this.col * width) / 10,
        (this.row * height) / 10,
        width / 10,
        height / 10
      );
    });
    this.context.drawImage(
      this.treasureImage,
      (this.col * width) / 10,
      (this.row * height) / 10,
      width / 10,
      height / 10
    );
  }
}
