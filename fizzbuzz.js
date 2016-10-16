var reverseStr = function(str) {
  return str.split('').reverse().join('')
}

var fizzbuzz2 = function(index, max) {
  if (index > max) return;

  console.log( (index % 3 === 0) ? ((index % 5 === 0) ? 'FizzBuzz' : 'Fizz') : ((index % 5 === 0) ? 'Buzz' : index) )

  fizzbuzz2(index+=1, 100);
}

var fizzbuzz = function(num) {
  var is3 = null
  var is5 = null
  for(var i = 1; i <= num; i++) {
    is3 = i % 3 === 0;
    is5 = i % 5 === 0;
    var str = '';

    if (is3) {
      str += 'Fizz';
    }

    if (is5) {
      str += 'Buzz';
    }

    if (!is5 && !is3) {
      str = i;
    }

    console.log(str);
  }
}

//fizzbuzz(100);
fizzbuzz2(1, 100);
//console.log(reverseStr('taco'));