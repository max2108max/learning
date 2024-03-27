const fs = require("fs")
const inputs = fs.readFileSync("./input.txt","utf-8").trim().split("\n")

function partOne() {
    let  red = 12
    let  green = 13
    let  blue = 14
    var  result = []
for (let k = 0; k < inputs.length; k++) {
    const line = inputs[k];
    let x = k + 1
    for (let i = 8; i < line.length; i++) {
        
        if(parseInt(line[i])){
                 
            if(parseInt(line[i+1])|| line[i+1] === "0" ){
                let string = line[i]+line[i+1]
                console.log(string);
                if(line[i+3]==="r"){if(Number(string)>red)    {x = 0;break}}
                if(line[i+3]==="g"){if(Number(string)>green)  {x = 0;break}}
                if(line[i+3]==="b"){if(Number(string)>blue)   {x = 0;break}}
            } else {
                if(line[i+2]==="r"){if(Number(line[i])>red )  {x = 0;break}} 
                if(line[i+2]==="g"){if(Number(line[i])>green) {x = 0;break}}
                if(line[i+2]==="b"){if(Number(line[i])>blue)  {x = 0;break}}
                
            }
        }
        
    }
    result.push(x)
    
}
console.log(result);
return result.reduce((a,b) => a+b)
}
console.log(partOne());



