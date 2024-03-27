const A = () => {
    throw new Error('Some error')
}
try {
A()
} catch (error) {
    console.error(error)
    console.log(error.message)

}
console.log("Продолжить")