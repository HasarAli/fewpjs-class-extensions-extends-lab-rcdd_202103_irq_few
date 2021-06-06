// Your code here

class Polygon {
  constructor(sides) {
    this.sides = sides
  }
  
  get countSides() {
    return this.sides.length
  }
}

const res = new Polygon([1,2,3]).countSides
console.log(res)