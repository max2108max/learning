// function checkComments(input, markers) {
   
//   let arr = input.split('\n')
//   for (let i = 0; i < markers.length; i++) {
//     arr = arr.map(function(e){
//         let index = e.indexOf(markers[i]);
//         if(index !== -1){return e.substring(0,index)}
//         else return e.replace(/\s*$/,'')
//     })

//   }
//   return arr.join('\n').trim()
// };



function solution(input, markers)
{
  let lines = input.split("\n");
  for (let i = 0; i < lines.length; ++i)
    for (let j = 0; j < markers.length; ++j)
        lines[i] = lines[i].split(markers[j])[0].trim();
    
        
  return lines.join("\n");
}

// console.log(checkComments("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]));
// console.log('--------');
console.log(solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]));

