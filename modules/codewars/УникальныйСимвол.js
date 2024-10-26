function isUnique(arr) {
   
//     let b = {}
//    for (let i = 0; i < arr.length; i++) {
//     b[arr[i]]?b = false:b[arr[i]]=1
//    }
//     b!=false? b = true: b = false
//    return b




// const set = new Set()
// for (let i = 0; i < arr.length; i++) {
//     if(set.has(arr[i])){return false}
//     set.add(arr[i])
// }
// return true

return new Set(arr).size === arr.length



}


console.log(isUnique('abcdef')) // -> true
console.log(isUnique('1234567')) // -> true
console.log(isUnique('abcABC')) // -> true
console.log(isUnique('abcadef')) // -> false