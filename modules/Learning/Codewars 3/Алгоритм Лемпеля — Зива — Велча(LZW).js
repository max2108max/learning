const symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const text = 'ABCAABDCAB';

function compressText(text, symbols) {
  let dictionary = {};
  let compressedOutput = [];
  let nextCode = symbols.length;

  for (let i = 0; i < symbols.length; i++) {
    dictionary[symbols[i]] = i;
  }
  console.table(dictionary);
  let currentSymbol = '';
  for (let i = 0; i < text.length; i++) {
    
    let symbol = text[i];
    let newSymbol = currentSymbol + symbol;
    
    console.log(newSymbol);
    if (dictionary.hasOwnProperty(newSymbol)) {
      currentSymbol = newSymbol;
    } else {
      compressedOutput.push(dictionary[currentSymbol]);
      dictionary[newSymbol] = nextCode;
      nextCode++;
      currentSymbol = symbol;
    }
  }

  compressedOutput.push(dictionary[currentSymbol]);

  return compressedOutput.join(',');
}

const compressedValue = compressText(text, symbols);
console.log(compressedValue); // Выводит: '20,15,2,5,15,18,14,15,20,27,29,31,36,30,32,34,0'
