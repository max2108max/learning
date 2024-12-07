//CHAT GPT SOLVE THIS (instead of brute force)

const fs = require("fs");
const path = require("path");

// Read the input map from the file
const filePath = path.join(__dirname, "input.txt");
const data = fs.readFileSync(filePath, "utf-8").split("\r\n");

function findObstructionPositions(mapInput) {
  const map = mapInput.map(row => row.split(""));
  const rows = map.length;
  const cols = map[0].length;

  // Directions and their movements
  const directions = ["up", "right", "down", "left"];
  const moves = {
    up: { x: 0, y: -1 },
    right: { x: 1, y: 0 },
    down: { x: 0, y: 1 },
    left: { x: -1, y: 0 },
  };

  // Find the initial position of the guard
  let guardStart = { x: -1, y: -1 };
  let startDirection = 0;

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (map[y][x] === "^") {
        guardStart = { x, y };
        startDirection = 0; // Facing 'up'
        break;
      }
    }
  }

  // Function to simulate the guard's movement
  function simulate(map, start, direction) {
    const visited = new Set();
    let current = { ...start };
    let currentDirection = direction;

    while (true) {
      const key = `${current.x},${current.y},${currentDirection}`;
      if (visited.has(key)) {
        // Loop detected
        return true;
      }
      visited.add(key);

      // Calculate next position
      const move = moves[directions[currentDirection]];
      const next = { x: current.x + move.x, y: current.y + move.y };

      // Check if next position is an obstacle or out of bounds
      if (
        next.x < 0 ||
        next.x >= cols ||
        next.y < 0 ||
        next.y >= rows ||
        map[next.y][next.x] === "#"
      ) {
        // Turn right
        currentDirection = (currentDirection + 1) % 4;
      } else {
        // Move forward
        current = next;
      }

      // Guard exits the map
      if (next.x < 0 || next.x >= cols || next.y < 0 || next.y >= rows) {
        return false;
      }
    }
  }

  // Find all possible positions for the new obstruction
  let obstructionPositions = 0;

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      // Skip invalid positions
      if (map[y][x] !== "." || (x === guardStart.x && y === guardStart.y)) {
        continue;
      }

      // Add obstruction and simulate
      map[y][x] = "#";
      const causesLoop = simulate(map, guardStart, startDirection);
      map[y][x] = "."; // Remove the obstruction

      if (causesLoop) {
        obstructionPositions++;
      }
    }
  }

  return obstructionPositions;
}

// Call the function and output the result
const result = findObstructionPositions(data);
console.log(result);
