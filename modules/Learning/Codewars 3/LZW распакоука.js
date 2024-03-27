const symbols = '#ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const code = '20,15,2,5,15,18,14,15,20,27,29,31,36,30,32,34,0';
function decode (symbols,code){
    const indexArray = code.split(',').map(Number);
    let dictionary = symbols.split('');
    let result = [dictionary[indexArray[0]]];
    
    let currentCode = indexArray[0];
    let previousCode = indexArray[0];
    
    for (let i = 1; i < indexArray.length; i++) {
      currentCode = indexArray[i];
      
      if (currentCode < dictionary.length) {
        result.push(dictionary[currentCode]);
        dictionary.push(dictionary[previousCode] + dictionary[currentCode]);
      } else {
        const newEntry = dictionary[previousCode] + dictionary[previousCode][0];
        result.push(newEntry);
        dictionary.push(newEntry);
      }
      
      previousCode = currentCode;
    }
    
    console.log(result.join(''));
}

decode(symbols,code)