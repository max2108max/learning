//минимум три числа в массиве + все кроме 1 четные или все кроме 1 не четные
//находим число
function test(arr) {
    if(arr[0]%2==0&&arr[1]%2==0&&arr[2]%2!==0||arr[0]%2!==0&&arr[1]%2!==0&&arr[2]%2==0){return arr[2]}
    if(arr[0]%2!==0&&arr[1]%2==0&&arr[2]%2==0||arr[0]%2==0&&arr[1]%2!==0&&arr[2]%2!==0){return arr[0]}
    if(arr[0]%2==0&&arr[1]%2!==0&&arr[2]%2==0||arr[0]%2!==0&&arr[1]%2==0&&arr[2]%2!==0){return arr[1]}
 
if(arr[0]%2==0&&arr[1]%2==0){  
     for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if(element%2!==0){return element}
   }}
if(arr[0]%2!==0&&arr[1]%2!==0){
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(element%2==0){return element}
       }
}

  
}

console.log(test([2, 4, 0, 100, 4, 11, 2602, 36]));
console.log(test([160, 3, 1719, 19, 11, 13, -21]));

// function findOutlier(int){
//     var even = int.filter(a=>a%2==0);
//     var odd = int.filter(a=>a%2!==0);
//     return even.length==1? even[0] : odd[0];
//   }
// КОТОРТКО НО ДВА ЦИКЛА 