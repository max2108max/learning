/*
https://www.codewars.com/kata/584425e1101928a1bc00003b/train/javascript
Given two 2D integer array arr1 and arr2. They have the same numbers of rows and columns. For example:

 arr1 =[[1, 3,-5],       arr2 = [[-1,-3, 5],
        [2,-4, 6]]               [-2,-4,-6]]
Then plus two integers of the same position of two array. We can got a new array:

[
    [0, 0, 0],
    [0,-8, 0]
]
Your task is to count the number of zero rows and zero columns(all elements are zero in a row or column).

In the example above, the result is 3(row 0, column 0, and column 2).
*/
let arr1 = [
  [1, 3,-5],
  [2,-4, 6]]

let arr2 = [
  [-1,-3, 5],
  [-2,-4,-6]]
function countZeroRowsAndColumns(arr1,arr2){
let count = 0
for (let i = 0; i < arr1.length; i++) {
  let inner_count = 0
  for (let j = 0; j < arr1[0].length; j++) {
    if((arr1[i][j]+arr2[i][j])!==0 ){inner_count = 0;break}
   inner_count++
  }
  if(inner_count !== 0 ){count++}
}


for (let k = 0; k < arr1[0].length; k++) {
  let inner_count2 = 0
for (let l = 0; l < arr1.length; l++) {
 
  if( (arr2[l][k] + arr1[l][k]) !==0 ){inner_count2 = 0;break}
  inner_count2 ++
}
if(inner_count2 !== 0 ){count++}
}



return count
}

console.log(countZeroRowsAndColumns(arr1,arr2));