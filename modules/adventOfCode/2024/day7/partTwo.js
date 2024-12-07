const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "input.txt");
const data = fs.readFileSync(filePath, "utf-8").split("\r\n");
