
// handle error way1 
const API ="https://api.githu";

async function handle() {
   try{
    const data= await fetch(API);
   const jsonval=await data.json();
   console.log(jsonval)
   }
   catch(errr){
    console.log(errr+"  error is come")
   }
}


handle()