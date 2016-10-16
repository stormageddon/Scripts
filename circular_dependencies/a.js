// a.js

var ClassA = function(b) {
  console.log("b:", b);
  this.bInstance = new b();
  this.property = 5;
}

var a = new ClassA();

module.exports = a;
