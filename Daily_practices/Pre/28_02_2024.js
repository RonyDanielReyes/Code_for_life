// You have been tasked by the Space Agency to design a simulator for an upcoming mission. Your task is to design a program to simulate the countdown of a rocket launch starting at 60. Your program will print the countdown to the console with the following conditions:

/* If the number is equal to 60, print the number followed by ": One Minute to Liftoff.".
If the number is greater than 10, print the number followed by ": All Systems Green.".
If the number is between 6 and 10, print the number followed by ": Starting Ignition Sequence.".
If the number is between 3 and 5, print the number followed by ": Ignition Complete.".
If the number is between 1 and 2, print the number followed by ": Full Power.".
If the number is equal to 0, print the number followed by ": Liftoff!" and then exit the program. */

// first step writing a loop that counts down from 60 to 0
// second step write if statements for each condition

for (let i = 60; i >= 0; i--) {
  if (i === 60) {
    console.log(i + ": One Minute to Liftoff.");
  } else if (i >= 10) {
    console.log(i + ": All Systems Green.");
  } else if (i >= 6 && i <= 10) {
    console.log(i + ": Starting Ignition Sequence.");
  } else if (i >= 3 && i <= 5) {
    console.log(i + ": : Ignition Complete.");
  } else if (i >= 1 && i <= 2) {
    console.log(i + ": Full Power.");
  } else if (i === 0) {
    console.log(i + ": Liftoff!");
  } 
}