// const map = new Map([['a', 1]])
// console.log(map.get('a'));
// map.set ('b',2).set(NaN,'Number').set(42,'demo')
// console.log(map.get(NaN));
// map.clear()
// console.log(map.has(42));
// map.delete('b')
// console.log(map.size);

// console.log(map.keys());
// console.log(map.values());
// console.log(map.entries());
const massiv = [1,2,3,4,5,5,5,2,3]
const set = new Set (massiv)
set.add(8)
console.log(set)
set.delete(2)
console.log(set)

console.log(set.keys());
console.log(set.values());
console.log(set.entries());