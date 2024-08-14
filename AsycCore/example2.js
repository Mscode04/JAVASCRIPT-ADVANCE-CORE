const x=new Promise((resolve,reject)=>{
    resolve("Promise 1 Is appear")
})


async function Name() {
    return x;
}


let data=Name();
console.log(data)
data.then((res)=>console.log(res))