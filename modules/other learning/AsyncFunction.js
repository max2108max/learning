const myFN = async () => 10

myFN() // сначала создается промис затем он возвращает результат 10 

const asyncFN = async () => {
    throw new Error('ОЩИБКА ДОЛБОБЕБ');
}

asyncFN()
.then(value => console.log(value))
.catch(error => console.log(error.message))       // следовательно можно использовать методы промисов к этой функции