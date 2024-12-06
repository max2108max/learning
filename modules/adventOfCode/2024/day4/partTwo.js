const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "input.txt");
const data = fs
  .readFileSync(filePath, "utf-8")
  .split("\r\n")
  .map(row => row.split(""));

function xmas(table) {
  let count = 0;
  for (let i = 0; i < table.length; i++) {
    for (let j = 0; j < table[i].length; j++) {
      if (table[i][j] === "A") {
        if (
          table?.[i - 1]?.[j - 1] === "M" &&
          table?.[i - 1]?.[j + 1] === "M" &&
          table?.[i + 1]?.[j - 1] === "S" &&
          table?.[i + 1]?.[j + 1] === "S"
        )
          count++;
        if (
          table?.[i - 1]?.[j - 1] === "M" &&
          table?.[i - 1]?.[j + 1] === "S" &&
          table?.[i + 1]?.[j - 1] === "M" &&
          table?.[i + 1]?.[j + 1] === "S"
        )
          count++;
        if (
          table?.[i - 1]?.[j - 1] === "S" &&
          table?.[i - 1]?.[j + 1] === "S" &&
          table?.[i + 1]?.[j - 1] === "M" &&
          table?.[i + 1]?.[j + 1] === "M"
        )
          count++;
        if (
          table?.[i - 1]?.[j - 1] === "S" &&
          table?.[i - 1]?.[j + 1] === "M" &&
          table?.[i + 1]?.[j - 1] === "S" &&
          table?.[i + 1]?.[j + 1] === "M"
        )
          count++;
      }
    }
  }
  return console.log(count);
}
xmas(data);
