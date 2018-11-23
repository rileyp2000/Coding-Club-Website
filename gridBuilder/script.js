var row = 5;
var col = 5;
//var selColor = color(200,200,200);
var squares = [];

function setup() {
  createCanvas(301, 301);

  for (var r = 0; r < row; r++) {
    squares[r] = [];
    for (var c = 0; c < col; c++) {
      squares[r][c] = new Square(r, c);
    }
  }


}

function determineRow(x) {
  return Math.trunc(x / 30);
}

function determineCol(y) {
  return Math.trunc(y / 30);
}

function mousePressed() {
  var x = determineRow(mouseX);
  var y = determineCol(mouseY);

  squares[x][y].selected = !squares[x][y].selected;
}

function draw() {
  background(51);

  for (var r = 0; r < row; r++) {
    for (var c = 0; c < col; c++) {
      squares[r][c].draw();
    }
  }
}

function Square(x, y) {
  this.x = x;
  this.y = y;
  this.color = color(0, 220, 88);
  this.other = color(255, 10, 10);
  this.selected = false;

  this.draw = function() {
    if (!this.selected) {
      fill(this.color);
    } else {
      fill(this.other);
    }
    rect(x * 30, y * 30, 30, 30);
  };

}
