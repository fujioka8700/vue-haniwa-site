'use strict';

// const Point = function(x, y) {
//   this.x = x;
//   this.y = y;
// }

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

const point = new Point(3, 4);
console.log(point);

class MyClass {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    return {x, y};
  }
}

// const myclass = class {
//   constructor() {

//   }
// }

// class Myclass2 {

// }

const myClass = new MyClass(1,2);
console.log(myClass);
console.log(myClass instanceof MyClass);

class Thing {}
const thing = new Thing();

const thing2 = class {};
