// You've been given access to a database that contains all of the users for the PlentyOfDevs dating site. 
//This database contains every user's date of birth, but people are finding it tricky to know someone's age 
// using just their birth date. Your task is to write a function that can tell how old someone is based on their birth date.

function ageCalculator (name, yearOfBirth, currentYear) {
  return name + " is " + (currentYear - yearOfBirth) + " years old.";
}


console.log(ageCalculator("Suzie", 1983, 2015));