let classNames = [
    'menu','header', 'menu-item','menu-item','footer','footer','link','link','link','link','menu-item'
]
let count = {};
for(let i = 0; i<classNames.length;i++){
    
    if(count[classNames[i]]){
        count[classNames[i]]+=1}
        else{count[classNames[i]]=1}
       
}
console.log(count);
let result = Object.keys(count).sort((a,b)=>count[b]-count[a])
console.log(result);
