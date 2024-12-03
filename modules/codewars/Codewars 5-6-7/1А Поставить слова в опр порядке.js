function order(words){
    words = words.split(' ')
    let arr = []
    arr.length = words.length
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        
        for (let j = 0; j < word.length; j++) {
            const char = word[j];
            if(Number(char)){arr[char]=word}
        }
       
    }
    return arr.slice(1).join(' ')
  }

  console.log(order("is2 Thi1s T4est 3a"));


