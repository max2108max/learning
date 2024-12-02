const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "input.txt");
const data = fs.readFileSync(filePath, "utf-8").split("\r\n");

let safeCount = 0;

for (let i = 0; i < data.length; i++) {
  let line = data[i].split(" ").map(Number);
  console.log(line);

  let isIncreasing = line[1] > line[0];
  let isSafe = true;

  for (let j = 0; j < line.length - 1; j++) {
    const number = line[j];
    const nextNumber = line[j + 1];

    const diff = nextNumber - number;

    if (Math.abs(diff) < 1 || Math.abs(diff) > 3) {
      isSafe = false;
      break;
    }

    if ((isIncreasing && diff < 0) || (!isIncreasing && diff > 0)) {
      isSafe = false;
      break;
    }
  }

  if (isSafe) {
    safeCount++;
  }
}

console.log(safeCount);
