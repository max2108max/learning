


//  s = 'abba'

//  for (let i=0;i<=s.length/2;i++){
//    if (s[i]!= s[s.length-1-i]){
//    return console.log(false)
//    }
//    return console.log(true) 
//  }  





x = 'а роза упала на лапу Азора'
const test = function (x) {return x.trim().split(' ').join('').split('').map(item => item.toLowerCase()).reverse().join('') === x.trim().split(' ').join('').split('').map(item => item.toLowerCase()).join('').trim()}

console.log(test(x)) 
 
