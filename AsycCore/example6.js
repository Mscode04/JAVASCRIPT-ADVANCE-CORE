const x1=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Promise 1 Is appear")
    }, 10000);
})


const x2=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Promise 2 Is appear")
    }, 5000);
})

async function handle() {
    console.log("Start 1")
    const data = await x1;
    console.log("Await 1")
    console.log(data)

    console.log("Start 1")
    const data1 = await x2;
    console.log("Await 2")
    console.log(data1)
}

handle()
