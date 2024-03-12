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

// output:
("c-style loop found: 🥔 at index 0");
("c-style loop found: 🍠 at index 1");
("c-style loop found: 🍟 at index 2");

// if u don't need the index, you can use a for-of loop
for (const potato of potatoRelatedEmoji) {
  console.log("for-of loop found:", potato);
}

// output:
("for...of loop found: 🥔");
("for...of loop found: 🍠");
("for...of loop found: 🍟");