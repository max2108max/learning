const { count } = require("console");
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "input.txt");
const data = fs.readFileSync(filePath, "utf-8").toString().trim();

const firstColum = [];
const secondColum = [];

data.split("\n").forEach(line => {
  const [a, b] = line.trim().split(/\s+/).map(Number);
  firstColum.push(a);
  secondColum.push(b);
});
let result = [];
for (let i = 0; i < firstColum.length; i++) {
  const num1 = firstColum[i];
  let count = 0;
  for (let j = 0; j < secondColum.length; j++) {
    if (secondColum[j] === num1) {
      count++;
    }
  }
  result.push(num1 * count);
  count = 0;
}

console.log(firstColum);
console.log(secondColum);
console.log(result.reduce((a, b) => a + b));
