// Дан массив: arr = [1, 2, 3, 4, 5]; С помощью функции array_splice сделайте из него следующий массив: [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']
arr = [1, 2, 3, 4, 5]
function x(arr) {
    arr.splice(1,0,'a','b')
    arr.splice(6,0,'c')
    arr.splice(8,0,'e')
    return console.log(arr);
}
x(arr)