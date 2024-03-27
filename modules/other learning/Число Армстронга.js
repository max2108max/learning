function narcissistic(value) {
let arr = String(value).split('').map(Number)
let x = 0
let sum = 0;
for (let i = 0; i < arr.length; i++) {
   x = arr[i]**arr.length
   sum = sum + x
  if(sum==value){return true}
}
    return false
}
  
  console.log(narcissistic(153));

  // function narcissistic( value ) {
  //   return ('' + value).split('').reduce(function(p, c){
  //     return p + Math.pow(c, ('' + value).length)
  //     }, 0) == value;
  // }