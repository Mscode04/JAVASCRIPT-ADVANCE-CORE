// is console first one whether sucses or error
// failing of promise .race


const p1=new Promise((resolve,reject)=>{
    setTimeout(()=> resolve("p1 is sucses"),3000)
    
    
})


const p2=new Promise((resolve,reject)=>{
    setTimeout(()=> reject("p2 is Fail"),6000)
})


const p3=new Promise((resolve,reject)=>{
    setTimeout(()=> resolve("p3 is sucses"),2000)
})

Promise.race([p1,p2,p3])
.then((res)=>{
    console.log(res)
})
.catch((er)=>{
    console.error(er)
})