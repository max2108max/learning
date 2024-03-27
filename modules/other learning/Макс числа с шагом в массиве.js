

function find(array,step) {
    for(let i = 0; i < array.length-step+1; i++)
    {   
        let max_array = []
        k = 0
     while (k < step) {
        max_array.push(array[k+i])
        k++
     }
        console.log( Math.max.apply(null,max_array))
        max_array = []
    }


}

find([6,2,9,3,7,0,6,8,2],3)
