// is console first  sucses 
// failing of promise .any

const p1=new Promise((resolve,reject)=>{
    setTimeout(()=> resolve("p1 is sucses"),3000)
    
    
})


const p2=new Promise((resolve,reject)=>{
    setTimeout(()=> reject("p2 is Fail"),1000)
})


const p3=new Promise((resolve,reject)=>{
    setTimeout(()=> resolve("p3 is sucses"),2000)
})

Promise.any([p1,p2,p3])
.then((res)=>{
    console.log(res)
})
.catch((er)=>{
    console.error(er)
})