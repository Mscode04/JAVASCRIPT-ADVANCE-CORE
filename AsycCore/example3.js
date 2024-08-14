const x=new Promise((resolve,reject)=>{
    resolve("Promise 1 Is appear")
})

function get(){
    x.then((res)=>{
        console.log(res)
    })
}
get()