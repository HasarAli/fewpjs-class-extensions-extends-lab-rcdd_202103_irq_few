// Your code here

class Polygon {
  constructor(sides) {
    this.sides = sides
  }
  
  get countSides() {
    return this.sides.length
  }
  
  get perimeter() {
    return this.sides.reduce((perimeter, side) => perimeter + side)
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.countSides !== 3) return false
    return this.side[0] + this.side[1] <= this.side[2] 
      && this.side[0] + this.side[2] <= this.side[1]
      && this.side[1] + this.side[2] <= this.side[0]
  }
}

const res = new Triangle([1,2, 3]).isValid
console.log(res)