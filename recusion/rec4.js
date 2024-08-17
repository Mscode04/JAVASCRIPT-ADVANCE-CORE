function sumOf(arr){
    if(arr.length==0){
        return 0;
    }
    return arr[0] + sumOf(arr.slice(1));
}
console.log(sumOf([5,5,5]))

// var x=[5,4,1]
// console.log(x.slice(1))
// console.log(x.slice(2))