// const timerPromise = () => 
//     new Promise ((resolve,reject) => 
//         setTimeout(()=>resolve()),4000)

// const asyncFN = async () => {
//     console.log('Timer starts')
//     const startTime = performance.now()
//     await timerPromise()
//     const endTime = performance.now()

//     console.log('Timer ended',endTime - startTime)
// }       
    
// asyncFN()


const getData = async(url) => {
    const res = await fetch(url)
    const json = await res.json()
    return json
}
const url = 'https://jsonplaceholder.typicode.com/todos/1'
try{
    const data = await getData(url)               // await можно только внутри асинхр функций или в браузере 
    console.log(data)
}
catch (error){
    console.log(error.message)
}