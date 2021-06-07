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
  // 
}

const res = new Triangle([1,2,3]).perimeter
console.log(res)