const fs = require("fs");
const inputs = fs.readFileSync("./input.txt", "utf-8").trim().split("\n");

function partOne() {
  let result = [];
  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    let numbers = [];

    for (let i = 0; i < input.length; i++) {
      let char = input[i];
      if (parseInt(char)) {
        numbers.push(char);
      }
    }

    if (numbers.length === 1) {
      result.push(numbers[0] + numbers[0]);
    } else {
      result.push(numbers[0] + numbers[numbers.length - 1]);
    }
  }
  return result.reduce(
    (previous, current) => Number(previous) + Number(current)
  );
}

console.log(partOne());
