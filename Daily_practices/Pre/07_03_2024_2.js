// javascript Arrays

const potatoRelatedEmoji = ["🥔", "🍠", "🍟"];

[
  "🥔", // The first item is at index: 0
  "🍠", // The first item is at index: 1
  "🍟", // The first item is at index: 2
];

console.log("I like:", potatoRelatedEmoji[0]);

// output:
("I like: 🥔")

for (let i = 0; i < potatoRelatedEmoji.length; i++) {
  const emoji = potatoRelatedEmoji[i];
  console.log("c-style loop:", emoji, "at index:", i);
}