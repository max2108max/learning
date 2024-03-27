function createPhoneNumber(a){
    return `(${a[0]}${a[1]}${a[2]} ${a[3]}${a[4]}${a[5]}-${a[6]}${a[7]}${a[8]}${a[9]})`
  }
  createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])

//   function createPhoneNumber(numbers){
//     var format = "(xxx) xxx-xxxx";
    
//     for(var i = 0; i < numbers.length; i++)
//     {
//       format = format.replace('x', numbers[i]);
//     }
    
//     return format;
//   }