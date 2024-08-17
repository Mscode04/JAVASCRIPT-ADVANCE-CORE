x=[1,2,3,4,5,2,2,3,1,1,1,1,1]
function find(arr) {
    let fre= {};
    for (let i = 0; i < arr.length; i++) {
        
        let num = arr[i];
        if (fre[num] != undefined) {
            fre[num]=fre[num]+1;
        } 
        else {
            fre[num] = 1;
        }
    }
    return fre;
}
console.log(find(x))