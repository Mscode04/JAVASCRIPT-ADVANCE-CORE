const x=new Promise((resolve,reject)=>{
    resolve("Promise 1 Is appear")
})

async function handle() {
   const data = await x;
   console.log(data)
}

handle()


// function get(){
//     x.then((res)=>{
//         console.log(res)
//     })
// }
// get()