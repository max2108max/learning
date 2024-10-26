text1 = 'aLLoha PidoRaSiKi'

const test = text1 => text1.split('').map(item => item === item.toUpperCase()? item.toLowerCase(): item.toUpperCase()).join('');
if (text1!=test){
    console.log('ДА СУКА')
    console.log(test(text1));
}
console.log(text1)

