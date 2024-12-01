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

firstColum.sort((a, b) => a - b);
secondColum.sort((a, b) => a - b);

console.log(firstColum);
console.log(secondColum);

const result = [];
for (let i = 0; i < secondColum.length; i++) {
  const num2 = secondColum[i];
  const num1 = firstColum[i];
  if (secondColum[i] > firstColum[i]) {
    result.push(secondColum[i] - firstColum[i]);
  } else result.push(firstColum[i] - secondColum[i]);
}

console.log(result.reduce((acc, curr) => acc + curr, 0));

// The smallest number in the left list is 1, and the smallest number in the right list is 3. The distance between them is 2.
// The second-smallest number in the left list is 2, and the second-smallest number in the right list is another 3. The distance between them is 1.
// The third-smallest number in both lists is 3, so the distance between them is 0.
// The next numbers to pair up are 3 and 4, a distance of 1.
// The fifth-smallest numbers in each list are 3 and 5, a distance of 2.
// Finally, the largest number in the left list is 4, while the largest number in the right list is 9; these are a distance 5 apart.
// To find the total distance between the left list and the right list, add up the distances between all of the pairs you found. In the example above, this is 2 + 1 + 0 + 1 + 2 + 5, a total distance of 11!
