
// const x = (x) => x * 2;
// const y = (y) => y * 2;
// const z = (z) => z * 2;

// //x(y(z)) 16

// function compose(...functions) {
//     return (arg) => {
//         return functions.reduceRight((result, fn) => fn(result), arg);
//     };
// }

// const composedFunction = compose(x, y, z);
// console.log(composedFunction(2)); // Выведет 64


// function CustomArray() {
    
// }

// const myArray = new CustomArray();
// myArray.push(1,2,3,4)
// myArray.hi() // "length = 4" 

// Array.prototype.myForEach = function () {
    
// }

// написать свои map push reduce

// const key = {a:1}
// const key2 = {b:2}
// let obj = {}
// obj[key] = 123
// obj[key2] = 456
// console.log(obj[key]);
// console.log(key);


// let obj3 = {
//     b: 2,
//        set b(value) {
//         this._prevB = this.b;
//         this._b = value;
//     },
//     get b() {
//         return  `${this._prevB} и ${this._b}`
//     }
// };

// obj3.b = 3;       
// console.log(obj3.b); // 3

// let obj3 = {
//     b: 2,
//     set b(value) {
//         this._prevB = this.b;
//         this._b = value;    
//     },
//     get b() {
//         return `${this._prevB} и ${this._b}`;
//     }
// };

// obj3.b = 3;       
// console.log(obj3.b); // 2 и 3


let obj3 = {
    _b: 2, 
    _prevB: null, 
    set b(value) {
        this._prevB = this._b; 
        this._b = value;       // если просто b без _b - то срабатывает сеттер!!!!
    },
    get b() {
        return `${this._b} и ${this._prevB}`; // Возвращаем новое и старое значения
    }
};

// Устанавливаем новое значение b
obj3.b = 3;

// Теперь выводим новое и старое значения
console.log(obj3.b); // 3 и 2


