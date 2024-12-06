const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "input.txt");
const data = fs
  .readFileSync(filePath, "utf-8")
  .split("\r\n")
  .map(row => row.split(""));

function xmas(table) {
  const word = "XMAS".split("");
  let count = 0;
  for (let i = 0; i < table.length; i++) {
    for (let j = 0; j < table[i].length; j++) {
      if (word.every((char, index) => char === table?.[i]?.[j + index]))
        count++;
      if (word.every((char, index) => char === table?.[i]?.[j - index]))
        count++;
      if (word.every((char, index) => char === table?.[i + index]?.[j]))
        count++;
      if (word.every((char, index) => char === table?.[i - index]?.[j]))
        count++;
      if (word.every((char, index) => char === table?.[i + index]?.[j + index]))
        count++;
      if (word.every((char, index) => char === table?.[i - index]?.[j - index]))
        count++;
      if (word.every((char, index) => char === table?.[i - index]?.[j + index]))
        count++;
      if (word.every((char, index) => char === table?.[i + index]?.[j - index]))
        count++;
    }
  }
  return count;
}
console.log(xmas(data));
