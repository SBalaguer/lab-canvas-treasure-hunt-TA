class Character {
  constructor(row, col, $canvas, context, squaresHeight, squaresWidth) {
    this.row = row;
    this.col = col;
    this.canvas = $canvas;
    this.context = context;
    this.playerImage = new Image();
    this.playerImage.src = "./../images/character-down.png";
    this.squaresHeight = squaresHeight;
    this.squaresWidth = squaresWidth;
  }

  draw() {
    const height = this.canvas.height;
    const width = this.canvas.width;

    const squaW = this.squaresWidth;
    const squaH = this.squaresHeight;

    this.playerImage.addEventListener("load", () => {
      //console.log("im load character image and im running");
      this.context.drawImage(
        this.playerImage,
        (this.col * width) / squaW,
        (this.row * height) / squaH,
        width / squaW,
        height / squaH
      );
    });
    this.context.drawImage(
      this.playerImage,
      (this.col * width) / squaW,
      (this.row * height) / squaH,
      width / squaW,
      height / squaH
    );
  }

  moveUp() {
    this.row -= 1;
    //console.log("Character Position [row,col]", this.row, this.col);
  }

  moveDown() {
    this.row += 1;
    //console.log("Character Position [row,col]", this.row, this.col);
  }

  moveLeft() {
    this.col -= 1;
    //console.log("Character Position [row,col]", this.row, this.col);
  }

  moveRight() {
    this.col += 1;
    //console.log("Character Position [row,col]", this.row, this.col);
  }
}
