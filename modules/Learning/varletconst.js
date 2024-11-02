// const value = 123; // const должна быть сразу инициализирована! ( = 123)
// let value2 // в отличие от let! (undefined)


while(keepgoing){
   var value = Math.random()
   if(value>0.5){
    keepgoing = false
   }
}
// вот что происходит

var value
while(keepgoing){
    value = Math.random()
   if(value>0.5){
    keepgoing = false
   }
}
 
