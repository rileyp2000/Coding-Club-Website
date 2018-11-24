var row = 10;
var col = 10;
//var selColor = color(200,200,200);
var squares = [];
var reds = [];
var yellow = [];

function setup() {
  createCanvas((row * 30) + 1, (col * 30) + 1);

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

  squares[x][y].selected = (squares[x][y].selected + 1) % 3;
}

function buttonSave() {
  for (var r = 0; r < row; r++) {
    for (var c = 0; c < col; c++) {
      if(squares[r][c].selected != 0){
        if(squares[r][c].selected == 1){
          reds.push(new Array(r,c));
        }
        else{
          yellow.push(new Array(r,c));
        }
      }
    }
  }
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
  this.color2 = color(255, 10, 10);
  this.color3 = color(255,255,0);
  this.selected = 0;

  this.draw = function() {
    if (this.selected == 0) {
      fill(this.color);
    } else {
      if (this.selected == 1) {
        fill(this.color2);
      }
      else {
        fill(this.color3);
      }
    }
    rect(x * 30, y * 30, 30, 30);
  };

}
