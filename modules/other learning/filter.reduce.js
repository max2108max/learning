const people = [
    {name:'Govno', piska: 13,  deneg:2000},
    {name:'Ivan',  piska: 17,  deneg:1300},
    {name:'Stas',  piska: 20,  deneg:200},
    {name:'Anna',  piska: -15, deneg:1500},

]
const moneyMan = people.filter(person => person.piska > 0).reduce((acc,person)=>{
    //сначало фильтруем по письке больше 0, затем сладываем бабосики 
        acc+=person.deneg
        return acc
},0)
console.log(moneyMan)

//посчитали бабки тех у кого писька больше 0
