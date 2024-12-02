const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "input.txt");
const data = fs.readFileSync(filePath, "utf-8").split("\r\n");

let safeCount = 0;

function isLineSafe(line) {
  const isIncreasing = line[1] > line[0];

  for (let j = 0; j < line.length - 1; j++) {
    const diff = line[j + 1] - line[j];

    if (
      Math.abs(diff) < 1 ||
      Math.abs(diff) > 3 ||
      (isIncreasing && diff < 0) ||
      (!isIncreasing && diff > 0)
    ) {
      return false;
    }
  }
  return true;
}

for (let i = 0; i < data.length; i++) {
  let line = data[i].split(" ").map(Number);

  if (isLineSafe(line)) {
    safeCount++;
    continue;
  }

  let isSafeWithOneRemoval = false;

  for (let j = 0; j < line.length; j++) {
    const modifiedLine = line.slice(0, j).concat(line.slice(j + 1));
    if (isLineSafe(modifiedLine)) {
      isSafeWithOneRemoval = true;
      break;
    }
  }

  if (isSafeWithOneRemoval) {
    safeCount++;
  }
}

console.log(safeCount);
