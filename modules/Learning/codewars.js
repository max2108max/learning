let arr = [1,2,3,4,5,6,7,8,9,10,-11,-12,-13,-14,-15]

function sum(arr) {
    let positive = 0
    let negative = 0
    for (let i = 0; i < arr.length; i++) {
       if (arr[i]>0) 
           positive++
       else  
           negative += arr[i] 
      
    }
    return console.log(positive,negative);
    
}

sum(arr)