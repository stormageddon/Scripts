'use strict'

function palindrome(str) {
  let reverse = str.split('').reverse().join('');

  return str === reverse;
}

let testCases = ['taco', 'cat', 'racecar', 'abcddcba', 'abcdcba'];

for (let test of testCases) {
  let message = palindrome(test) ? test + ' is a palindrome' : test + ' is not a palindrome';

  console.log(message);
}