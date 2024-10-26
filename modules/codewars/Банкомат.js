function iWantToGet(x) {
    const a = [100,50,20,10]
    const b = []
    
    if(x>0){
    for (let i = 0; i < a.length; i++) {
        while(x-a[i]>=0)
        {
            x=x-a[i];
            b.push(a[i])
        }
        
    }
    }
    else
    {return console.log('сумма меньше нуля');}
    return b
}

console.log(iWantToGet(20));