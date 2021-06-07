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
    for (let i = 0; i < this.countSides; i++) {
      for (let j = i+1; i < this.countSides; j++) {
        if (this.sides[i] + this.sides[j])
      }
    }
    return true
  }
}

const res = new Triangle([1,2]).isValid
console.log(res)