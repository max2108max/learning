const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

function rotate(arr) {
  const newMatrix = arr[0].map(() => [])
console.log(newMatrix);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j <arr.length; j++) {
      newMatrix[arr.length-1-j][arr.length - 1 - i] = arr[j][i]

    }
  }

  return newMatrix
}
function m(a) {
  a.forEach(element => {console.log(element);});
}
m(rotate(matrix))