let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
let x=[];
let ind=0
for (let i=(arr.length)-1;i>=0;i--){
  x[ind]=arr[i]
  ind++
}
console.log(x)