// creation of some exercises for objects

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

let car = {
  make: 'Toyota',
  model: 'Corolla',
  year: 2020,
};

delete car.year;

console.log(car);
