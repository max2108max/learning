
let x = [4,3,9,7,2,1]
function squareOrSquareRoot(array) {
  let result = []
  for (let number = 0; number < array.length; number++) {
    let y = Math.sqrt(array[number])
   if(
    Number.isInteger(y)
   ){result.push(y)}
    else {
      result.push(Math.pow(array[number],2))
    }
  }

return  console.log(result);  
  }
  squareOrSquareRoot(x)
