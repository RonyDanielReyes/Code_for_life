// Imagine you have a grocery list 
// of fruits with varying quantities and you
// would like to know how many fruits in total there are.

const fruits = {
  apple: 42,
  banana: 20,
  cranberry: 13
};

let total = 0;
for (const key in fruits){
 total += fruits[key];
}
console.log(total);

