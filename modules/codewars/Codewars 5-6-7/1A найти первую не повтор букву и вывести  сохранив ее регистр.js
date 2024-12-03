function firstNonRepeatingLetter(s) {
    if(s==''){return ''}
    let x = s.toLowerCase()
    let map = {}
    for (const item of x) {
        map[item]= map[item]+1||1
    }
    for (const key in map) {
        if(Object.values(map).includes(1)){ if(map[key]==1){ return s.indexOf(key)==-1?key.toUpperCase():key}   }
        else return ""
    }
  }


  console.log(firstNonRepeatingLetter('STress'));
  console.log(firstNonRepeatingLetter('moonmen'));
  console.log(firstNonRepeatingLetter('abba'));
  //найти первую не повтор букву и вывести  сохранив ее регистр