function highestFrequency(array) {
//    b = {}
//    for (const i of array) {
//    b[i] = b[i]+1||1
//    }
//    return   Object.entries(b).reduce((acc, curr) => acc[1] > curr[1] ? acc : curr)[0]

   b = {}
   let maxFreq = 0
   let maxFreqStr = array[0]
 for (let i = 0; i < array.length; i++) {
    if(b[array[i]]){b[array[i]]++}
    else{b[array[i]]=1}
    
 
   if(b[array[i]]>maxFreq){
    maxFreq = b[array[i]]
   
    maxFreqStr = array[i]
     
   }
   }
   return maxFreqStr
}

console.log(highestFrequency(['a', 'b', 'c', 'c', 'd', 'e'])) // -> c
console.log(highestFrequency(['abc', 'def', 'abc', 'def', 'abc'])) // -> abc
console.log(highestFrequency(['abc', 'def'])) // -> abc
console.log(highestFrequency(['abc', 'abc', 'def', 'def', 'def', 'ghi', 'ghi', 'ghi', 'ghi' ])) // -> ghi