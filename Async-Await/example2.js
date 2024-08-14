
// handle error way2
const API ="https://api.githu";

async function handle() {
  
    const data= await fetch(API);
   const jsonval=await data.json();
   console.log(jsonval)
   
   
}


handle().catch((errr)=>console.log(errr+"  error is come"))
    
   