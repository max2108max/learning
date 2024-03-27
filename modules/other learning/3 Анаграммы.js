function buildCharObject(str) {
    const charObj = {}
   
 for(let i = 0; i<str.length;i++){
    
    if(charObj[str[i]]){
        charObj[str[i]]+=1}
        else{charObj[str[i]]=1}
}

return  charObj;

}


function allAnagrams(array) {
[a,b,c] = array

 aChar = buildCharObject(a)
 bChar = buildCharObject(b)
 cChar = buildCharObject(c)

if(Object.keys(aChar).length !== Object.keys(bChar).length ||Object.keys(aChar).length !== Object.keys(cChar).length){return false;}
for (const index in aChar) {
    
        if(aChar[index]!==bChar[index] || aChar[index]!==cChar[index]){return false}
    
}
return true
}


console.log(allAnagrams(['abcd', 'bdXc', 'cabd'])) 
console.log(allAnagrams(['abcd', 'bdXcf', 'cabd'])) 
console.log(allAnagrams(['abcd', 'bdXc', 'cabdf'])) 
console.log(allAnagrams(['abcd', 'bdac', 'cabd'])) 


// function allAnagrams(array) {
//         const sorted = array.map(str => str.split('').sort().join(''))
//       console.log(sorted);
//         for (let i = 1; i < sorted.length; i++) {
//           if (sorted[i] !== sorted[0]) {
//             return false
//           }
//         }
//         return true
//       }
      
//       console.log(allAnagrams(['abcd', 'bdac', 'cabd'])) // true
//       console.log(allAnagrams(['abcd', 'bdXc', 'cabd'])) // falsevar obj = {a:1, b:2, c:3};

