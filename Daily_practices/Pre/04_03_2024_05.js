/* // creating objects:

const obj = {
  name: 'Rony', 
  age: 30, 
  highscore: 9000
};

// to print the keys and values
for (const key in obj){
  const value = obj[key];
  console.log(key, value);
}


const keys = Object.keys(obj);
const values = Object.values(obj);
console.log(keys);
console.log(values);

 */

// iterating over objects 
const steel = {
  name: "1084",
  type: "Carbon Steel",
  composition: {
    iron: 98.45,
    carbon: 0.8,
    manganese: 0.6,
    phosphorus: 0.08,
    sulfur: 0.06,
  },
  forging_min_temp: 900,
  forging_max_temp: 1200,
};

// The challenge is to provide the following output:
// ["iron", "carbon", "manganese", "phosphorus", "sulfur"];

