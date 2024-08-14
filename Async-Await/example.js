

const API ="https://api.github.com/users/Mscode04";

async function handle() {
   const data= await fetch(API);
   const jsonval=await data.json();
   console.log(jsonval)
}
handle()