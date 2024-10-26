function removeDupes(str) {
    // b={}
//    for (let i = 0; i < str.length; i++) {
//    if(!b[str[i]]){b[str[i]]=1}
   
//    }
//    return Object.keys(b).join('')


return Array.from (new Set(str)).join('')

}


console.log(removeDupes('abcd')) // -> 'abcd'
console.log(removeDupes('aabbccdd')) // -> 'abcd'
console.log(removeDupes('abcddbca')) // -> 'abcd'
console.log(removeDupes('abababcdcdcd')) // -> 'abcd'