function first() {
  console.log("first");
}
function second() {
  console.log("second");
 first() 
}
function third() {
  console.log("third");
  second()
}
third()