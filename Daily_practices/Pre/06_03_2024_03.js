//As humanity gets closer to living on Mars, we must start 
// sending supplies to the red planet now to prepare for our arrival. Canada wants to send maple syrup, 
// and each container on the spaceship can hold exactly 100 bottles of maple syrup. But, we can only send a container if it's full.

// Given a certain number of bottles, your job is to figure out how many containers can be filled and sent. 
// In this challenge, you will write a function that determines how many groups of 100 bottles can be made from a given number.

function howManyHundreds (num) {
  return Math.floor(num / 100);
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);