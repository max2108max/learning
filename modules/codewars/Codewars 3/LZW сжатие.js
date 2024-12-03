const symbols = '#ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const text = 'TOBEORNOTTOBEORTOBEORNOT#';

function encode(symbols, stop, text) {


let dictionary = {}
let compressedOut = []
let count = symbols.length

for (let i = 0; i < symbols.length; i++) {
   dictionary[symbols[i]] = i
}
let currentSymbol = ""

for (let i = 0; i < text.length; i++) {

  let newSymbol = text[i]+currentSymbol

  if(dictionary.hasOwnProperty(newSymbol)){currentSymbol = newSymbol}
  else {
    compressedOut.push(dictionary[currentSymbol]);
    dictionary[newSymbol] = count
    count++
    currentSymbol = text[i];
  }
  
  if(text[i]=="#"){compressedOut.push(0); return compressedOut.join(",") ;}
}

}

console.log(encode(symbols,"#",text));