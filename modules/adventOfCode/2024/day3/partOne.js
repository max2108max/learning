const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "input.txt");
const data = fs.readFileSync(filePath, "utf-8");

const matches = data.match(/mul\([^()]*\)/g);
console.log(matches);
function mul(a, b) {
  return a * b;
}
let res = 0;
for (let i = 0; i < matches.length; i++) {
  const element = matches[i];
  res = eval(element) + res;
}
console.log(res);
