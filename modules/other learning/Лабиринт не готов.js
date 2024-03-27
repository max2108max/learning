const tractor = {x:0,y:0}

function createMatrix(columns,rows){
    const matrix = []
    for (let y = 0; y < rows; y++) {
       const row = []
        for (let x = 0; x < columns; x++) {
           row.push(0) 
        }
        matrix.push(row)
    }
    return matrix
}
function print(item) {
    item.forEach(item => {
     console.log(item);
    });
}

function letsGo(newMatrix) {
newMatrix = createMatrix(6,6)
console.log(newMatrix);

}
letsGo(createMatrix(6,6))
