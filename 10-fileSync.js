
const { readFileSync, writeFileSync } = require("fs");

const one = readFileSync("./folder/first.txt", "utf8");
const two = readFileSync("./folder/second.txt", "utf8");

console.log(one, two);

writeFileSync(
  "./folder/file-sync.txt",
  `Here is the result => ${one} ${two}`,
  {flag:'a'}
);
