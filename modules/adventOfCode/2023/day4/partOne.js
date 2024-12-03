const fs = require("fs")
const inputs = fs.readFileSync("./example.txt","utf-8").trim().split("\n")

function totalPoints(lines) {
    let arrlines = lines.map(line=>{
        let [cardNumber,numbers] = line.split(":",[])
        tries = tries.split(';')
    })
    console.log(lines);
}

totalPoints(inputs)