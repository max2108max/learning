function add(a, b) {
  
  
  if(a.length<11 && b.length<11){
  let answer = Number(a)+Number(b)
    return answer.toString()}

  let i = 10
  let k = 0
  let count = 0
  let result = ""
  let mostBig = a.length>b.length?a:b
  let iterationsCount = Math.round(mostBig.length/10)

for (let index = 0; index < iterationsCount; index++) {
  let x = a.substring(a.length-i,a.length-k)
  let y = b.substring(b.length-i,b.length-k) 
 
  let res = Number(x)+Number(y)
  
  if(index!==0){res=Number(res)+count}
 
        if(res>9999999999){
          count=1
          res =res.toString().substring(1)}
        else {count=0}  
        
        i= i + 10  
        k= k + 10

        result = res+result
        
        if(res.toString().length!==10 && index!==iterationsCount-1){result="0".repeat(10 - res.toString().length)+result}

        }
       
        if(count==1){result='1'+result}
        console.log(`результат Сложения = ${result}`);
    
    return result
  }

 


  function test(object) {
   object = generateRandomBigInt(1100,23000000590403560956000000000589305468)
    let a = object.aa
    let b = object.bb
    let res = (BigInt(a)+BigInt(b)).toString()
    // console.log(`test = ${a} ${b}`);
    console.log(`результат BigInt =   ${res}`);
    if(add(a,b)==res){return  console.log(`Проверка = TRUE`);}
    else {return  console.log(`Проверка = FALSE`); }
    
  }

function generateRandomBigInt(lowBigInt, highBigInt) {
  if (lowBigInt >= highBigInt) {
    throw new Error('lowBigInt must be smaller than highBigInt');
  }

  const difference = BigInt(highBigInt - lowBigInt)
  const differenceLength = difference.toString().length;
  let multiplier = '';
  while (multiplier.length < differenceLength) {
    multiplier += Math.random()
      .toString()
      .split('.')[1];
  }
  multiplier = multiplier.slice(0, differenceLength);
  const divisor = '1' + '0'.repeat(differenceLength);

  const randomDifference = (difference * BigInt(multiplier)) / BigInt(divisor);
let a =(BigInt(lowBigInt) + randomDifference).toString()
let b = BigInt(highBigInt).toString()
  return {aa:a,bb:b}
}

function start() {
  for (let i = 0; i < 10; i++) {
    test()
  }

}
start()