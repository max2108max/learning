function duplicateEncode(word){
let map = {}
word = word.toLowerCase()
word = word.split('')
for (const item of word) {
   map[item] = map[item]+1||1
}
word = word.map((i)=>{if(map[i]&&map[i]>1){return ')'}else return '('})
return word.join('')
}
console.log(duplicateEncode("abcc"));
//              меняем буквы на скобки
//     ) если не повторяеться больше 1 го раза
//     ( если повторяеться больше 1 го раза
