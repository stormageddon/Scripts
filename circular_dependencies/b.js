// b.js

var ClassB = {}



ClassB = function(A) {
  this.A = A
}

ClassB.prototype.doSomethingLater = function() {
  console.log(this.A.property);
}

module.exports = ClassB;

var a = require('./a.js');