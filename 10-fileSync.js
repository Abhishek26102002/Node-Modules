
const { readFileSync, writeFileSync } = require("fs");

const one = readFileSync("./folder/first.txt", "utf8");
const two = readFileSync("./folder/second.txt", "utf8");

console.log(one, two);

writeFileSync( // takes 3 val => kaha pe dalna hai , kya dalna hai , flag
  "./folder/file-sync.txt",
  `Here is the result => ${one} ${two}`,
  {flag:'a'}
);

// this method might arise prob as it executed line by line so unless one task completed thhe next wnt start
 