'use strict'

// () -> valid
// (()) -> valid
// (()()) -> valid
// (())) -> invalid
// ( -> invalid
// )( -> invalid

function checkForParens(str) {
  let numOpen = 0;
  let numClosed = 0;

  for (let c of str) {
    if (c === '(') {
      numOpen++;
    }
    else if (c === ')') {
      numClosed++;
      if (numClosed > numOpen) return false;
    }
  }

  return numOpen === numClosed;

}

let testCases = ['()', '(())', '(()())', '(()))', '(', ')('];

for (let test of testCases) {
  let result = checkForParens(test);
  let message = test + ' validity is ' + result;
  console.log(message);
}