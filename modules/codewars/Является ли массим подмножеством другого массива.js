function x(a,b) {
    if(a.length<b.length){
        return false
    }
    for (let i = 0; i < b.length; i++) {
       
        if(a.indexOf(b[i])===-1){return false}
        delete a[a.indexOf(b[i])]
    }
    
    return true
}
console.log(x([2,1,3],[1,2,3]));
console.log(x([2,1,1,3],[1,2,3]));  
console.log(x([1,1,1,3],[1,3,3]));
console.log(x([2,1],[1,2,3]));