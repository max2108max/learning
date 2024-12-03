const fs = require("fs")
let condition = {red:12,green:13,blue:14}
// Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green

function partTwo() {
    var res = []
        fs.readFile("./input.txt","utf-8",(err,data)=>{
            const input = 
            data
            .split("\n")
            .map(row=>{
               
                let [, tries] = row.split(":");
                
                tries = tries.split(';')
                .map(x => x.trim())
                .map(x =>  
                    x.split(",")
                    .reduce((acc,x) =>{
                        
                        let [number,colour] = x.trim().split(" ")
                        acc[colour] = Number(number)
                        return acc
                    },{})
                    )
                    .reduce((acc, obj) => {
                        for (const key in obj) {
                          if (!(key in acc) || obj[key] > acc[key]) {
                            acc[key] = obj[key];
                          }
                        }
                        return acc
                      }, {})
                   
               let values = Object.values(tries)
               let result = values.reduce((a,b)=>a*b)
               res.push(result)
             
            })
         console.log(res.reduce((a,b)=> a+b));
        })
    
   
}
partTwo();