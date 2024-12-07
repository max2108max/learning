const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "input.txt");
const data = fs.readFileSync(filePath, "utf-8").split("\r\n");

function evaluateLeftToRight(numbers, operators) {
  let result = numbers[0];
  for (let i = 0; i < operators.length; i++) {
    if (operators[i] === "+") {
      result += numbers[i + 1];
    } else if (operators[i] === "*") {
      result *= numbers[i + 1];
    }
  }
  return result;
}

function generateOperators(length) {
  const results = [];
  const ops = ["+", "*"];

  function helper(current, depth) {
    if (depth === length) {
      results.push(current);
      return;
    }
    for (let i = 0; i < ops.length; i++) {
      helper(current + ops[i], depth + 1);
    }
  }
  helper("", 0);
  return results;
}

function calculateCalibration(input) {
  let total = 0;

  for (const line of input) {
    const [testValue, numbers] = line.split(":").map(s => s.trim());
    const target = parseInt(testValue, 10);
    const nums = numbers.split(" ").map(Number);
    const operatorCombinations = generateOperators(nums.length - 1);

    let found = false;

    for (const ops of operatorCombinations) {
      const operators = ops.split("");
      if (evaluateLeftToRight(nums, operators) === target) {
        found = true;
        break;
      }
    }

    if (found) {
      total += target;
    }
  }

  return total;
}

// Рассчитываем результат
const result = calculateCalibration(data);
console.log(result);
