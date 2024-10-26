// function average (arr) {
// return arr.reduce((acc,i) => acc +=i,0) /arr.length
// }
// console.log(average([10,20,30]));



// function average () {
//     return Array.from(arguments).reduce((acc,i) => acc +=i,0) /arguments.length
//     }
//     console.log(average(10,20,30));


function average (a,b,...args) {          //a, b первый и второй аргумент тоесть 10 и 20
        return args.reduce((acc,i) => acc +=i,0) /args.length
        }
        console.log(average(10,20,30,40)); //поэтому args это 30 и 40 