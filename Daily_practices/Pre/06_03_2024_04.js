// Loppy Lighthouse challenge
// create a function with 3 parameters
// range, multiples, words
// range is an array of 2 numbers representing the start and end values for the loop
// multiples is an array of 2 numbers representing the multiples you want to replace with words
// words is an array of 2 strings representing the words that will replace the multiples

function loopyLighthouse (range, multiples, words) {
  for (let i = range[0]; i <= range[1]; i++) {
    console.log("i is " + i);
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);