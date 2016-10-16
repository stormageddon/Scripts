'use strict'

function findPrimes(num) {
  let isPrime = true;
  let numPrimesFound = 0;

  for( let i = 2; i <= num; i++ ) {
    isPrime = true;
    for( let j = 2; j <= Math.sqrt(i); j++ ) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(i);
      numPrimesFound++;
    }
  }

  return numPrimesFound
}

let startTime = Date.now()
let numPrimes = findPrimes(1000000);
let endTime = Date.now()
console.log('Total primes found:', numPrimes)
console.log('total time: ' + (endTime - startTime) + 'ms');




/* Performance profiling (num = 100000)
 *
 * No break, full i: 24689ms
 * full i with break: 2847ms
 * sqrt i, no break: 205ms
 * sqrt i with break: 98ms
 */