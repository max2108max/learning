for (let num of range(6,3)) {
    console.log(num);
}

function range(a,b) {
    if(a==b){return [a]}
    if(a<b) {return arr = Array(b-a+1).fill(0).map((_,i) =>a+i)}
    if(b<a) {return arr = Array(a-b+1).fill(0).map((_,i) =>b+i).reverse()}
    }
    


