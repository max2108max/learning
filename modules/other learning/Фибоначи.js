// 1 1 2 3 5 8 13 21
//вызовем (n) чисел фибоначи 
function fib(n) {
    let result = [1,1]
    
    
if(n<=2){return result.slice(0,n)}

while (result.length<n) {
    let sum = result[result.length-1] + result[result.length-2]
    result.push(sum)
}
return result
}
console.log(fib(7));

// найдем конретный элемент под индексом 
function findFib(num) {
    let a = 1
    let b = 1
    for (let i = 3; i <= num; i++) {
        let c =  a + b
        a = b 
        b = c
    
    }
    return b
}
console.log(findFib(7));