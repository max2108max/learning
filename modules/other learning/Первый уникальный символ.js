const input1 = 'leetcode'
const input2 = 'loveleetcode'
const input3 = 'aabb'

// function findFirstUniq(str) {
//    let x = {}
//    for (const char of str) {
//     x[char] = x[char]+1 || 1
//    }
//    for (const key in x) {
//     if (x[key]==1) {
//         return key
        
//     }
//    }
//    return false
// }

function findFirstUniq(s){
    let map = new Map()
    for (let i = 0; i < s.length; i++) {
        const current = s[i];
        if(map.has(current)){
            map.set(current,map.get(current)+1)
        } else {
            map.set(current,1)
        }
        
    }
    for (let i = 0; i < s.length; i++) {
        if(map.get(s[i])===1){return i}
        
    }
    return -1
}

console.log(findFirstUniq(input1));
console.log(findFirstUniq(input2));
console.log(findFirstUniq(input3));
