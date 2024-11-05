// class Aboba {
//     constructor(name){
//         this.name = name
//     }

//     meth(){
//         console.log(this.name);
//     }
// }

// // const newlox1 = new Aboba("lox").meth()
// const newlox1 = new Aboba("lox")
// newlox1.meth()

// class Aboba {
//     constructor(name){  //constructor вызываеться в последнюю очередь!!!(если про переменные! не про super!)
//         this.name = name
//     }

//     name = "Kiril"

//     meth(){
//         console.log(this.name);
//     }
// }
// new Aboba().meth()       name будет из конструктора !!!!

// class Aboba {
//         constructor(name){
//         this.a = 123
//     }
//     b = 321

//     meth(){} 
//                        то что обьявляем через равно уходит в инстанс класса {b:321,a:123,arrow:f}
//                        а meth()уходит в протатип 
//     arrow = () =>{} 
// }

// class Aboba {
//     name = "Max"

//     static getName(){
//         return this.name  //Aboba.name this указывает на aboba
//     }
// }
// console.log(Aboba.getName()); 


// class Aboba {
//     static getName(){
//         return this.aboba()
//     }
//     static aboba(){
//         return "Абоба!" // если метод не статический то его нельзя вызвать у класса!!!!!!!!
//     }
// }
// console.log(Aboba.getName()); // Выведет "Абоба!"



// class Aboba {
//     name = "Max"

//     static getName ()=>{return this.name} нельзя стрелку в статических методах!
//           //Aboba.name this указывает на aboba
// }
// console.log(Aboba.getName()); 


// class Aboba{
//     constructor(){
//         this.a = 123
//     }

//     arrow = ()=>{
//         return this.a
//     }

// }

// const serg = new Aboba
// console.log(serg.arrow());

// console.log(new Aboba().arrow());
