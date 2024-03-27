






function buildCharObject(str) {
    const charObj = {}
    str = str.toLowerCase()
    // for(let char of str){
    //     charObj[char] = charObj[char]+1 || 1
    // }
    // return console.log(charObj);
    
 for(let i = 0; i<str.length;i++){
    
    if(charObj[str[i]]){
        charObj[str[i]]+=1}
        else{charObj[str[i]]=1}
}

return charObj;

}
function anagram(a,b) {
    const aChar = buildCharObject(a)
    const bChar = buildCharObject(b)
   console.log(aChar);
   console.log(bChar);
  
   
    
    if(Object.keys(aChar).length!==Object.keys(bChar).length)
    {return console.log(a+' '+b+' ='+' false')}

   

for(let index in aChar){
    if(aChar[index]!==bChar[index]){return console.log(a+' '+b+' ='+' false') }
    }

    return console.log(a+' '+b+' ='+' true')
  
}


anagram('abc','abc')
anagram('Friend','finder')
anagram('Friendd','finderr')
