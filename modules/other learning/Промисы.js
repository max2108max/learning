// fetch('https://jsonplaceholder.typicode.com/todos/55')
// .then(response => response.json())
// .then(json =>  console.log(json))
// .then(error => console.log(error))

const getData = url =>
new Promise ( (resolve,reject) => 
fetch(url)
.then(response => response.json())
.then(json =>  resolve(json))
.catch(error => reject(error))    // сюда будет ссылаться нижний error
 )
 getData('https://jsonplaceholder.typicode.com/todos/55')
 .then(data => console.log(data))                                    //console.log(data) указывает на resolve(json)
 .catch(error => console.log(error.message))                         //erro будет ссылаться на error которая вверху