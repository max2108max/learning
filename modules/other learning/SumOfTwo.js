// const sumofTwo=(arr,target)=>{
//     const result = [];

// for (let i=0; i<arr.length; i++){
//     for(let j = i+1; j < arr.length; j++){
//         if(arr[i]+arr[j]===target){
//            result.push(i);
//            result.push(j);
//         }
//     }
// }


//     return result;
// };
// console.log(sumofTwo([2,7,11,15], 22));

// const sumofTwo=(arr,target)=>{
//     const numObject = {};
//     for(let i = 0; i<arr.length;i++){
//         numObject[arr[i]]=i;
//     }
//     for(let i = 0; i<arr.length;i++){
//         const diff = target - arr[i];
//         if(numObject[diff]&&numObject[diff] !== i){
//             return[i,numObject[diff]];
//         }
//     }
//     return[];
// };


    
    const sumOfTwo = (arr, target) => {
        let result = [];

        arr.forEach(el=> console.log(arr.indexOf(el)))
        arr.forEach(el=> console.log(arr.indexOf(target - el)))
        arr.forEach(el => arr.indexOf(target - el) === 1 && result.push(...[el, target - el]))
        return result.length > 0 ? console.log(result)  : console.log('No matching numbers')
    }
    sumOfTwo([1,2,3], 4)
    