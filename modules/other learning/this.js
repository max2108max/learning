const person = {name:'Max',age:18,sex:'pidor'}
const logger = {
    keys(){
        console.log('Object.keys',Object.keys(this))
    },
    keysAndValues(){
        // Object.keys(this).forEach( key => {
        // console.log(`'${key}':${this[key]}`)
        Object.keys(this).forEach( function(key) {
            console.log(`'${key}':${this[key]}`)
        }.bind(this))                                 // без стрелочной функции контест this изменится поэтому биндим его что бы остался
    }
}
// const bound =logger.kyes.bind(person)  // bind передает то что мы хотим подставить в this 
// bound()                                // но нужно вызывать функцию
//logger.keys.call(person)                  // call сразу вызывает результат

logger.keysAndValues.call(person)