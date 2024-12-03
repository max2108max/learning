const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "input.txt");
const data = fs.readFileSync(filePath, "utf-8");

function mul(a, b) {
  return a * b;
}

const regex = /do\(\)|don't\(\)|mul\([^()]*\)/g;
let enabled = true;
const matches = data.match(regex);
const result = [];

for (const match of matches) {
  if (match === "do()") {
    enabled = true; // Включаем mul
  } else if (match === "don't()") {
    enabled = false; // Отключаем mul
  } else if (enabled && match.startsWith("mul(")) {
    result.push(match); // Добавляем в результат, если mul включён
  }
}
let res = 0;
for (let i = 0; i < result.length; i++) {
  const element = result[i];
  res = eval(element) + res;
}
console.log(res);
