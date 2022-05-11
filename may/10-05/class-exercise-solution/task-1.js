/**
 * Create a class rectangle
 *
 * The class contains 3 properties:
 *
 * - width
 * - height
 * - color
 *
 * The class contains the following methods:
 *
 * - `perimeter`: calculates and returns the perimeter of the rectangle
 * - `area`: calculates and returns the area of the rectangle
 * - `description`: returns a string describing the rectangle, stating the color, height and width.
 *
 *     For example:
 *    `This is a green rectangle 3cm wide and 4cm high`
 */

class Rectangle {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  perimeter() {
    return this.width * 2 + this.height * 2;
  }

  area() {
    return this.width * this.height;
  }

  description() {
    return `This is a ${this.color} rectangle ${this.width}cm wide and ${this.height}cm high.`;
  }
}

const rectangle1 =  new Rectangle(2, 4, "green");
const rectangle2 =  new Rectangle(80, 15, "yellow");

console.log(rectangle1.perimeter());
console.log(rectangle1.area());
console.log(rectangle1.description());

console.log(rectangle2.perimeter());
console.log(rectangle2.area());
console.log(rectangle2.description());