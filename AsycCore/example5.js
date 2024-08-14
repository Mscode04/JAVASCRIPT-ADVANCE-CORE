const x=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Promise 1 Is appear")
    }, 3000);
})

async function handle() {
    console.log("Start")
    const data = await x;
    console.log("Await 1")
    console.log(data)
    const data1 = await x;
    console.log("Await 2")
    console.log(data1)
}

handle()


