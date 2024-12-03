puzzle = [
    [4,0,1,0],
    [0,2,0,0],
    [0,0,3,0],
    [0,0,2,0],
]



function sudoku(board) {
   const size = 4
   const boxSize = 2
   const findEmpty = (board) => {
    for (let r = 0; r < size; r++) {
        for (let c = 0; c < size; c++) {
        if(board[r][c] === 0){
            return [r,c]
        }
            
        }
        
    }
    return null
   }
   const validate = (num,pos,board) => {
    const [r,c] = pos

    for (let i = 0; i < size; i++) {
        if(board[i][c] === num && i !== r ){
            return false
        }
        
    }
    for (let i = 0; i < size; i++) {
        if(board[r][i] === num && i !== c ){
            return false
        }
    }    

        const boxRow = Math.floor(r/boxSize) * boxSize
        const boxCol = Math.floor(c/boxSize) * boxSize
     
     for (let i = boxRow; i < boxRow + boxSize; i++) {
       for (let j = boxCol; j < boxCol + boxSize; j++) {
        if(board[i][j] === num && i !== r && j !== c ){
            return false
        }
        
       }
        
     
    }
    return true
   }


   const solve = () => {
    const currPosition = findEmpty(board)
    if(currPosition===null){
        return true;    
    }
    for (let i = 1; i <= size; i++) {
        const currNum = i
        const isValid = validate(currNum,currPosition,board)
        if(isValid){
            const [x,y] = currPosition
            board [x][y] = currNum
            if (solve()){
                return true
            }
            board[x][y] = 0
        }
    }

    return false
   }
   solve()
    return board

}

console.table(sudoku(puzzle))



