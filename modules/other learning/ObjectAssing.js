const first = {a:1}
const second = {b:2}
console.log(Object.assign([],first,second,{c:3,d:4})) 
console.log(Object.assign({},first,second,{c:3,d:4})) 
console.log(first);

// соединяем обьекты в один массив или обьект добавляя свои данные

// Object.keys() ключи
// Object.values() значения
// Object.entries() двумерный массив со значениями и ключами