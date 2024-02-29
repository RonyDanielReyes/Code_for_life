// write a statement that checks if a number is positive, if it is print a positive number to the console

let number = 1;

if (number > 0) {
  console.log("This is a positive number");
} else {
  console.log("This is a negative number");
}

// write a statement that checks if a person is old enough to vote, if their age is 18 or above, print "You are old enough to vote"
// if they are 16 and 17 print "You are almost old enough to vote"
// if they are 14 and 15 print "You are 4-5 years close to vote"
// if they are 13 or below print "You are not old enough to vote"

let age = 19;

if (age >= 18) {
  console.log("You are old enough to vote");
} else if (age >= 16 && age <= 17) {
  console.log("You are almost old enough to vote");
} else if (age >= 14 && age <= 15) {
  console.log("You are 4-5 years close to vote");
} else (age <= 13); {
  console.log("You are not old enough to vote");
}