function foo() {
   const x = 10;
   return {
    x:20,
    bar: ()=>{
      console.log(this.x);
    },
    baz: function () {
      console.log(this.x);
    },
   };
}

// const obj1 = foo()
// obj1.bar()  // вернеться {} после return , (window.x)====>this.x = undefined
// obj1.baz()  // this.x = 20


//  const obj2 = foo.call({x:30});
//  let y = obj2.bar;
//  let z = obj2.baz;
//  y();  //30
//  z();  //undefined



//  obj2.bar();  // захватывают значение this из окружающего контекста, в котором они были определены
//              //  то есть на {x: 30}
//  obj2.baz(); // this ссылается на обьект obj2 а не на объект, переданный в call.

