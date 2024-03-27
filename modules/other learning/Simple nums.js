function isPrime(num){
    for(let i=2, max = Math.sqrt(num);i <= max; i++){
        if(num % i === 0 ){return false}
    }
     return num > 1
}
console.log('1',isPrime(1));
console.log('2',isPrime(2));
console.log('3',isPrime(3));
console.log('4',isPrime(4));
console.log('5',isPrime(5));
console.log('6',isPrime(6));