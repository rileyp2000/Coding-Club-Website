class Cube {
  constructor(xx, yy, zz) {
    this.x = xx;
    this.y = yy;
    this.z = zz;
  }

}

function fillColored() {
  var c = []

  for (var x = 0; x < 5; x++) {
    for (var y = 0; y < 5; y++) {
      for (var z = 0; z < 5; z++) {
        if ((x + y) % 2 == 0) {
          c.push(new Cube(x, y, z));
        }
      }
    }
  }
  return c;
}
