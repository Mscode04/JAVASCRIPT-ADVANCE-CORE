const x=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Promise 1 Is appear")
    }, 3000);
})



function get(){
    x.then((res)=>{
        console.log(res)
    })
    console.log("last code")
}
get()