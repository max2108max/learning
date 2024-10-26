function balance(str) {
    const start = '{[('
    const end = '}])'
    const map = {
        '}':'{',
        ']':'[',
        ')':'('
    }
    const queue = []
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if(start.includes(char)){
            queue.push(char)
        }else if(end.includes(char)) {
            const item = queue.pop() 
            if (map[char]!==item){return false}}
            
    }
    return !queue.length
}
console.log(balance('(x+y)-(4)'));
console.log(balance('(((x+y)))-(3)(4)'));
console.log(balance('(((x+y)))-(3+{4})([2]+4)'));
console.log(balance('[{]}'));
console.log(balance('(40)('));