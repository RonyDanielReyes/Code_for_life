// creating objects:

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



