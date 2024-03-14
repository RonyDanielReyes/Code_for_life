//  creating variable
/* const treeEmoji = ["🌳"];
// printing the array
console.log(treeEmoji);
// adding to the array a push method
treeEmoji.push("🌲");
treeEmoji.push("🌴");
// priting the new array
console.log(treeEmoji);
 */
// working with tre-dimensional arrays

/* const onedimensional = [1, 2, 3];


const twodimensional = [
  [1, 2], // Each individual point has an X and a Y, so we'll store each in an array
  [3, 4],
  [5, 6], // Third element; index: 2
  [7, 8], // Fourth element; index: 3
  [9, 10],
];
const coordinatex = twodimensional[2][0];
const coordinatey = twodimensional[2][1];

console.log("This is x " + coordinatex + " This is y " + coordinatey);


 */

// working with fruit project

const fruitOpinions = [
  ["🍎", "positive", 20, "negative", 15],
  ["🍍", "positive", 2, "negative", 33],
  ["🍌", "positive", 15, "negative", 15],
];

let outputString = "FRUIT OPINION DATA:\n"; // \n means new line
outputString += "==================";

for (const fruits of fruitOpinions) {
  // This loop gets the sub-arrays
  outputString += "\n";
  for (const fruitInfo of fruits) {
    // This loop gets the info in the sub-array
    if (fruitInfo === "positive") {
      // We'll replace the word "positive" with a formatted string
      outputString += ": ✅ - ";
    } else if (fruitInfo === "negative") {
      // We'll replace the word "negative" with a formatted string
      outputString += " | ❌ - ";
    } else {
      // Everything else can just show as-is :)
      outputString += fruitInfo;
    }
  }
}

console.log(outputString);