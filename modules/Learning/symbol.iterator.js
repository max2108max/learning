 
class NumberRange {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
    
    *[Symbol.iterator]() {
        for (let i = this.start; i <= this.end; i++) {
            yield i;
        }
    }
}

// Использование
const range = new NumberRange(1, 5);
for (const num of range) {
    console.log(num);
}