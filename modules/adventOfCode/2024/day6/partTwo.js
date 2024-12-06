const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "input.txt");
const data = fs.readFileSync(filePath, "utf-8").split("\r\n");

// Directions: right, down, left, up
const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
let x = 0;
let y = 0;
let directionIndex = 3; // Start facing up (index 3 in the directions array)
let visited = new Set();

function isObstacle(map, x, y) {
  return map[x] && map[x][y] === "#";
}

function moveForward(map, x, y, dx, dy) {
  if (!isObstacle(map, x + dx, y + dy)) {
    return [x + dx, y + dy];
  }
  return [x, y];
}

function turnRight(directionIndex) {
  return (directionIndex + 1) % directions.length;
}

// Parse the map and find the starting position
const map = data.map(line => line.split(""));
data.forEach((line, i) => {
  line.split("").forEach((char, j) => {
    if (char === "^") {
      x = i;
      y = j;
    }
  });
});

visited.add(`${x},${y}`);

// Simulate the guard's patrol
while (true) {
  const [dx, dy] = directions[directionIndex];
  let nextPosition = moveForward(map, x, y, dx, dy);

  if (
    nextPosition[0] < 0 ||
    nextPosition[0] >= map.length ||
    nextPosition[1] < 0 ||
    nextPosition[1] >= map[nextPosition[0]].length
  ) {
    // Guard has left the mapped area
    break;
  }

  visited.add(`${nextPosition[0]},${nextPosition[1]}`);

  if (isObstacle(map, nextPosition[0], nextPosition[1])) {
    directionIndex = turnRight(directionIndex);
  } else {
    [x, y] = nextPosition;
  }
}

// Output the number of distinct positions visited
console.log(visited.size);
