// questions file: working with loops for/while
// question # 1, write a program that prints the sum of all odd numbers from 1 to 30 using a for loop.

// initialize the variable to 0
let sum = 0;

// creating the for loop and going into the numbers between 1 and 30
for (let i = 1; i <= 30; i++) {
  // if the number is odd, add it to the sum
  if (i % 2 !== 0)
    sum += i;
}

console.log(sum);

