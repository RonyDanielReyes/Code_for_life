// working on Odd Checker
// create a function that checks if a number is odd or not
// if the number is odd, return true
// if the number is even, return false

function isOdd(num) {
  if (num % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

console.log("Is odd " + isOdd(4));