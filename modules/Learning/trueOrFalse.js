console.log([].map === Array.prototype.map);

console.log({}.__proto__ === Object.prototype);

console.log(Object.getPrototypeOf({}) === Object.prototype);
console.log(Object.getPrototypeOf([]) === Array.prototype);


console.log(Object.getPrototypeOf(Array) === Function.prototype);
console.log(Object.getPrototypeOf(Array) === Array.constructor.prototype);
console.log(Object.getPrototypeOf(Function) === Function.prototype);


console.log({}.prototype === Object.__proto__); // undefined === {}
console.log({}.__proto__ === Object.prototype); // [Object: null prototype] {} === [Object: null prototype] {}
console.log({}.prototype === Object.prototype); // undefined === [Object: null prototype] {}
console.log({}.__proto__ === Object.__proto__); // [Object: null prototype] {} === {}



