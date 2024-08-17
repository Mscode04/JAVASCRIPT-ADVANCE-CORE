// is console first  sucses 
// failing of promise .any
// full faild => get agrigated error

const p1=new Promise((resolve,reject)=>{
    setTimeout(()=> reject("p2 is Fail"),5000)
})


const p2=new Promise((resolve,reject)=>{
    setTimeout(()=> reject("p2 is Fail"),2000)
})


const p3=new Promise((resolve,reject)=>{
    setTimeout(()=> reject("p2 is Fail"),1000)
})

Promise.any([p1,p2,p3])
.then((res)=>{
    console.log(res)
})
.catch((er)=>{
    console.error(er)
})