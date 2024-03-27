function first() {
  console.log("first");
}
function second() {
  first() 
  console.log("second");
}
function third() {
  second()
  console.log("third");
}
third()