// function createPoint(x,y) {
//   return{
//     x,
//     y,
//     getX(){return this.x},
//     getY(){return this.y},
//     translate(a,b){this.x += a;this.y += b},
//     scale(percent){this.x *= 1 + percent / 100;this.y *= 1 + percent / 100}
//   }
// }



// const createPointPrototype = {
//   getX(){return this.x},
//   getY(){return this.y},
//   translate(a,b){this.x += a;this.y += b},
//   scale(percent){this.x *= 1 + percent / 100;this.y *= 1 + percent / 100}
// }
// function createPoint(x,y){
//   const result = {x,y}
//   Object.setPrototypeOf(result,createPointPrototype)
//   return result
// }



// class CreatePoint {
//   constructor (x,y){
//     this.x = x
//     this.y = y
//   }
//   getX(){return this.x}
//   getY(){return this.y}
//   scale(percent){this.x *= 1 + percent / 100;this.y *= 1 + percent / 100}
//   translate(a,b){this.x += a;this.y += b}
// }




// function createPoint(x, y) {
//   let _x = x;
//   let _y = y;

//   return {
//     get x() {return _x},
//     set x(value) {
//       if (typeof value !== 'number') {
//         throw new TypeError('x must be a number');
//       }
//       _x = value;
//     },
//     get y() {return _y},
//     set y(value) {
//       if (typeof value !== 'number') {
//         throw new TypeError('y must be a number');
//       }
//       _y = value;
//     },
//     translate(dx, dy) {
//       this.x += dx;
//       this.y += dy;
//     },
//     scale(percent) {
//       this.x *= 1 + percent / 100;
//       this.y *= 1 + percent / 100;
//     },
//   };
// }


function createGreetable(str) {
  const result = new String(str)
  result.greet = function(greeting) { return `${greeting}, ${this}!` }
  return result
 }

 const g = createGreetable('World')
 console.log(g.greet('Hello'))
 