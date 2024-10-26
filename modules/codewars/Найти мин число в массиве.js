const numbers = [-94, 87, 12, 0, -67, 32];
const minimum = Math.min(...numbers);
console.log(minimum)


const minValue = Math.min.apply(null, numbers);
console.log(minValue); 

