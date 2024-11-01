
const x = (x) => x * 2;
const y = (y) => y * 2;
const z = (z) => z * 2;

//x(y(z)) 16

function compose(...functions) {
    return (arg) => {
        return functions.reduceRight((result, fn) => fn(result), arg);
    };
}

const composedFunction = compose(x, y, z);
console.log(composedFunction(2)); // Выведет 64


