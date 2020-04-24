class Background {
  constructor($canvas, context, squaresHeight, squaresWidth) {
    this.canvas = $canvas;
    this.context = context;
    this.squaresHeight = squaresHeight;
    this.squaresWidth = squaresWidth;
  }

  draw() {
    const height = this.canvas.height;
    const width = this.canvas.width;

    const col = width / this.squaresWidth;
    this.context.beginPath();
    for (let i = 0; i <= this.squaresWidth; i++) {
      this.context.moveTo(col * i, 0);
      this.context.lineTo(col * i, height);
      this.context.stroke();
    }

    const row = height / this.squaresHeight;
    for (let i = 0; i <= this.squaresHeight; i++) {
      this.context.moveTo(0, row * i);
      this.context.lineTo(width, row * i);
      this.context.stroke();
    }
    this.context.closePath();
  }
}
