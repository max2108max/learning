const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "input.txt");
const data = fs.readFileSync(filePath, "utf-8").split("\r\n");

// Функция для поиска начальных координат
const startingPosition = map => {
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] === "^") {
        return [i, j];
      }
    }
  }
  throw new Error("Символ '^' не найден.");
};

let [x, y] = startingPosition(data);

// Функции для движения охранника в разные стороны
function runGuardUP(map, x, y) {
  while (y > 129 || map[x][y] !== "#") {
    if (y > 129) {
      return [x, y];
    }
    let row = map[x];
    let chars = row.split("");
    chars[y] = "X";
    map[x] = chars.join("");
    x--;
  }
  return [x + 1, y];
}

function runGuardDOWN(map, x, y) {
  while (y > 129 || map[x][y] !== "#") {
    if (y > 129) {
      return [x, y];
    }
    let row = map[x];
    let chars = row.split("");
    chars[y] = "X";
    map[x] = chars.join("");
    x++;
  }
  return [x - 1, y];
}

function runGuardRIGHT(map, x, y) {
  while (y > 129 || map[x][y] !== "#") {
    if (y > 129) {
      return [x, y];
    }
    let row = map[x];
    let chars = row.split("");
    chars[y] = "X";
    map[x] = chars.join("");
    y++;
  }
  return [x, y - 1];
}

function runGuardLEFT(map, x, y) {
  while (y > 129 || map[x][y] !== "#") {
    if (y > 129) {
      return [x, y];
    }
    let row = map[x];
    let chars = row.split("");
    chars[y] = "X";
    map[x] = chars.join("");
    y--;
  }
  return [x, y + 1];
}

for (let i = 0; i < 100; i++) {
  [x, y] = runGuardUP(data, x, y);

  [x, y] = runGuardRIGHT(data, x, y);

  [x, y] = runGuardDOWN(data, x, y);

  [x, y] = runGuardLEFT(data, x, y);
}

console.table(data);
console.log(x, y);
const allChars = data.flatMap(str => str.split(""));

// Подсчитываем количество символов "X"
const countX = allChars.filter(char => char === "X").length;

console.log(countX);
