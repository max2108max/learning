// let s = 'abcd'
// const f = (s,index = 0) => s.length - 1 === index ? s[index] : f(s,index + 1 ) + s[index]
// console.log(f(s));
// s = f(s)
// console.log(f(s));


function reverse(input) {
    let arr = Array.from(input)
    let left = 0
    let right = arr.length-1
    while (left<right) {
        [arr[left], arr[right]] = [arr[right], arr[left]]
        left +=1
        right -=1
    }
    return arr.join('')
}
console.log(reverse('abcd'));