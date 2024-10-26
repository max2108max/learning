function highestRank(arr){
let map = {}
maxFreq = 0
maxFreqKey = arr[0]
for(let i = 0; i<arr.length;i++){
    let num = arr[i]
   if   (map[num]) {map[num]++;}
   else            {map[num] = 1;}
  
   if(map[num]>maxFreq){
      maxFreq = map[num]
      maxFreqKey = arr[i]
       
     }
  
}

return console.log(`Число ${maxFreqKey} встречается ${maxFreq} раза`);
}
highestRank([10,5,5,5,5,16,29,14,14,14,4,3,14])

// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

