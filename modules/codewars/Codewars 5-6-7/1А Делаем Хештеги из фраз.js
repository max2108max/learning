function generateHashtag (str) {
   if(str.trim()==''){return false}
    str = str.split(" ")
    str = str.filter(word => word !=="")
    
    let Text = ['#'];
    for(let i = 0; i < str.length; i++){
     let word = str[i][0].toUpperCase() + str[i].slice(1);
     Text.push(word);
  }
   Text = Text.join('')

  return Text.length>140?false:Text
}


console.log(generateHashtag("code" + " ".repeat(40) + "wars"))
console.log(generateHashtag("           "))
 