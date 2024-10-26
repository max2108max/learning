
function get(obj, path){

}
const obj = {
    a:{
        b:{
            c:"d"
        },
        e:"f"
    }
};
get(obj,"a.b")//c:d
get(obj,"a.b.x")// undefined