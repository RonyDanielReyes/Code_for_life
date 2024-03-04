// creation of some exercises for arrays

// exercise 1
/* Create an empty object called someone, add properties for name 
and age after the object is created, then show the resulting object. */

/* let someone = {};
someone.name = 'Rony';
someone.age = 30;
console.log(someone); */

/* exercise 2
Create an object called gamer with properties for name, age, and highscore. 
Update the highscore property after to 9001, then show the resulting object. */
/* let gamer = {
  name: 'Rony',
  age: 30,
  highscore: 9000,
};
gamer.highscore = 9001;
console.log(gamer); */

// exercise 3
/* Create an object called car with properties for make, model, and year. Remove the key year from the object, then show the resulting object */

/* let car = {
  make: 'Toyota',
  model: 'Corolla',
  year: 2020,
};

delete car.year;

console.log(car);
 */

// exercise 4
/* Print the value of the size property of the following object using
 square bracket notation and the variable called key at your disposal. */

/* const key = "size";

const coffee = {
  type: "latte",
  size: 400,
  cupType: "paper",
};

console.log(coffee[key]); */

// exercise 5
//Print the values of the mug object using a loop and the array called keys.


const keys = ["color", "material"];

const mug = {
  size: 500,
  color: "red",
  material: "porcelain",
};

for (let i = 0; i < keys.length; i++) {
  console.log(mug[keys[i]]);
}