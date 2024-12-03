function comp(array1, array2){
let x = array1.map(item=>item*item).sort((a,b)=>a-b)
let y  = array2.sort((a,b)=>a-b)


return x.toString()===y.toString()
}
console.log(comp([2, 2, 3] ,[4, 9, 4]));

// console.log(comp([2,3,5],[9,25,]));