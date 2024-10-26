
let  arr = [1,2,0,1,0,1,0,3,0,1]
let myFN = (arr) => {
  let b = []
 for (let i = arr.length-1; i >= 0; i--){
  
  if (arr[i]!==0 ) {b.unshift(arr[i])}
  else {b.push(arr[i])}
 }
 return b 
}
console.log(myFN(arr));

// let flattened = [[0,1],[2,3],[4,5]].reduce((a,b) => a.concat(b))
// console.log(flattened);

// let arr = [[3,2,1],[4,6,5],[8,9,7]]
// console.log(arr.reduce((a,b) => [...a, ...b],[]).sort((a,b)=> a - b));
// console.log(arr.reduce((a,b)=>a.concat(b)).sort((a,b)=>a -b));

