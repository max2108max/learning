function test() {
   
    let x = [0,1,3,0,0];
    let count = 0
  for (let i = 0; i < x.length; i++) {
    if(x[i]==0){
  
  for (let j = 0; j < 10; j++) {
  x[i] = j
  if(x.reduce((a,b)=>a+b)==10){console.log(x);count++}
  for (let k = 0; k < 10; k++) {
  x[x.length-2] = k
    if(x.reduce((a,b)=>a+b)==10){console.log(x);count++}
    for (let r = 0; r < 10; r++) {
      x[x.length-1] = r
      if(x.reduce((a,b)=>a+b)==10){console.log(x);count++}
      
    }
  }
    
  }
    }
   }
   return console.log(`${count} Вариантов`);
  }
(test());
  