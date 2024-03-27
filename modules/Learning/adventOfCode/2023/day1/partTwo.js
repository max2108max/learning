const fs = require("fs")
const inputs = fs.readFileSync("./input.txt","utf-8").trim().split("\n")


function partTwo() {
    
    const dictionary = {
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9
      };
      const charDictionary = ["o","t","f","s","e","n"]  
      let finalSum = []
    
    for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i];
        let result = []
        for (let i = 0; i < input.length; i++) {
            const char = input[i];

                if(parseInt(char)){result.push(char)}
        
                if(char==="o" & input[i+1]=="n" & input[i+2]=="e"){result.push(1)}
                if(char==="t" & input[i+1]=="w" & input[i+2]=="o"){result.push(2)}
                if(char==="t" & input[i+1]=="h" & input[i+2]=="r" & input[i+3]=="e" & input[i+4]=="e"){result.push(3)}
                if(char==="f" & input[i+1]=="o" & input[i+2]=="u" & input[i+3]=="r"){result.push(4)}
                if(char==="f" & input[i+1]=="i" & input[i+2]=="v" & input[i+3]=="e"){result.push(5)}
                if(char==="s" & input[i+1]=="i" & input[i+2]=="x"){result.push(6)}
                if(char==="s" & input[i+1]=="e" & input[i+2]=="v" & input[i+3]=="e" & input[i+4]=="n"){result.push(7)}
                if(char==="e" & input[i+1]=="i" & input[i+2]=="g" & input[i+3]=="h" & input[i+4]=="t"){result.push(8)}
                if(char==="n" & input[i+1]=="i" & input[i+2]=="n" & input[i+3]=="e" ){result.push(9)}

        }
     if(result.length == 1){finalSum.push(String(result[0]+result[0]))}
     else finalSum.push(String(result[0])+result[result.length-1])
    }
   return console.log(finalSum.reduce((a,b)=>Number(a)+Number(b)));
}
partTwo()
