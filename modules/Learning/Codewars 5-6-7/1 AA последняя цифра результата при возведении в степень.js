  // [1],      ---> 1
  // [4,8,6,2],--->
  // [9,7,1,3],--->
  // [6,4],    --->odd 4 even 6
  // [5],      ---> 5
  // [6],      ---> 6
  // [9,3,1,7],--->
  // [4,2,6,8],--->
  // [1,9]     --->odd 1 even 9


  let lastDigit = function(str1, str2){  
    if(str1==0){return 0}
    if(str2==0){return 1}
    str1 = str1.toString()
    str2 = str2.toString().slice(-2)
    let x = str1[str1.length -1]
    if(x%10==0){return 0}
    console.log(str2);
    console.log(x);
    if(x==1){return 1}
    if(x==2){ 
      let y = str2%4 
      if(y==1){return 2}
      if(y==2){return 4}
      if(y==3){return 8}
      if(y==0){return 6}}
    if(x==3){ 
      let y = str2%4 
      if(y==1){return 3}
      if(y==2){return 9}
      if(y==3){return 7}
      if(y==0){return 1}
      }
    if(x==4){ 
      let y = str2%2 
      if(y==0){return 6}
      else    {return 4}}
    if(x==5){return 5}
    if(x==6){return 6}
    if(x==7){ 
      let y = str2%4 
      if(y==1){return 7}
      if(y==2){return 9}
      if(y==3){return 3}
      if(y==0){return 1}}
    if(x==8){ 
      let y = str2%4 
      if(y==1){return 8}
      if(y==2){return 4}
      if(y==3){return 2}
      if(y==0){return 6}}
    if(x==9){
      let y = str2%2 
      if(y==0){return 1}
      else    {return 9}}
   
  
  }
console.log(lastDigit('62785870758130660671993388611983734022772781858682182587830778360399332129947623349882160630','139416219269818849419658691876207825963829071280839901453561873714220970544389759523341'));
