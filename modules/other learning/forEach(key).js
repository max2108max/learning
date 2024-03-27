const person = {
    name: '4epuwilo',
    age: 30,
    isProgrammer: false,
    languages: ['ru','en','jp'],
    piska: 13
}

const logger = {
    keys1() {
        console.log('Object Keys', Object.keys(this))
    },
    keysAndValues(){
      
  Object.keys(this).forEach(key => {
    console.log(`'${key}:'${this[key]}`)
        })
    },
    keysAndValues2(){
        Object.keys(this).forEach(key =>
        console.log(`'Object Keys: '${key} ,'Object Values: '${this[key]} `))
    }
}
    

logger.keysAndValues2.call(person)

//const bound =logger.keys.bind(person)
//bound()
//logger.keys.call(person)