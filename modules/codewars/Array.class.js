const numbers = [1,2,3,4]
Array.prototype.square = function () {
    return  this.map((x)=> x*x)
}
Array.prototype.cube = function (){
    return this.map((x)=> x*x*x)
}
Array.prototype.average = function (){
if (this.length === 0){return NaN}
let sum = this.reduce((acc,val)=>(acc+val),0)
return sum/this.length
}
Array.prototype.sum = function(){
return this.reduce((acc,val)=>(acc+val),0)
} 
Array.prototype.even = function(){
return this.filter(num => num % 2 == 0)
} 
 Array.prototype.odd = function(){
 return this.filter(num => num % 2 !== 0)
} 
console.log(numbers.square());
console.log(numbers.cube());
console.log(numbers.average());
console.log(numbers.sum());
console.log(numbers.even());
console.log(numbers.odd());