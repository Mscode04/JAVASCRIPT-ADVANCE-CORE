// Each Element from array and add array[i-1] and sarray[i+1]

var Array=[1,2,3,4,5];
var sum=[];
for(let i=0;i<Array.length-1;i++){
    x= i>0 ? Array[i-1] : 0;
    y= i<Array.length ? Array[i+1] : 0;
    sum[i]=Array[i]+x+y;
}
console.log(sum);