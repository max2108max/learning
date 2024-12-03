const fs = require("fs")
const inputs = fs.readFileSync("./input.txt","utf-8").trim().split("\n").map((str) => str + ".")

function numbersFinder(text) {
   


   
   var result = []
   var dictionary = "$@#%^&*()_+=-/"

   for (let i = 0; i < text.length; i++) {
      const line = text[i]
      let currentNumber = []
      
         for (let k = 0; k < line.length; k++) {
            const char = line[k]
            if(parseInt(char)){
               // определяем сколько цифр в числе и затем проскакиваем 
               // остальные цифры в этом числе на цикле выше
               let count = 0
               let number = ""
               
              for (let j = k; j < line.length; j++) {
            
               if(!isNaN(parseInt(line[j]))){count++,number = number + line[j]}
               else {k = k + count;break;}
              }
              currentNumber.push(Number(number))
              
            }
           
         }
         
      
         for (let f = 0; f < currentNumber.length; f++) {
         let flag = false
         let x = String(currentNumber[f])
         let pattern = new RegExp(`\\b${x}\\b`);
         let numberLength = currentNumber[f].toString().length
         let index = text[i].search(pattern) 
         // если цифра будет повторяться нужна еще проверка
         // например ...6.....@6....
      
  
         //для боковой проверки
          
               if(dictionary.includes(text[i][index-1])){result.push(currentNumber[f]);continue}
               if(dictionary.includes(text[i][index+numberLength])){result.push(currentNumber[f]);continue}
   
        // для верхней строки
         for (let v = index-1; v < index+numberLength+1; v++) {
          
            
            if(text[i-1]){if(dictionary.includes(text[i-1][v])){flag=true;result.push(currentNumber[f])}}
         } 
        if(flag){flag=false;continue}
           // для нижней строки
         for (let v = index-1; v < index+numberLength+1; v++) {
            flag = true
            if(text[i+1]){if(dictionary.includes(text[i+1][v])){flag=true;result.push(currentNumber[f])}}
         }
         if(flag){flag=false;continue}
      }
  
     
       
      
    
      
  }
  
  
  return console.log(result.reduce((a,b)=>a+b));
}
numbersFinder(inputs)