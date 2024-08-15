var cart=["pizza","berger","coffee","pasta"]

function validateCart(item){
    if (cart.includes(item)){
        return true;
        
    }
    else{
        return false;
    }
}
function idGenerate(item){
    const id = cart.indexOf(item);
    return id+"2024"; 
}


function createOrder(item){
    const pr=new Promise(function(resolve,reject){
        if(!validateCart(item)){
            const err=new Error("Item  is not in Cart")
            reject(err)
        }
        else{
            resolve(idGenerate(item))
        } 
    })
    return pr;
}


createOrder("pizza")
.then(function (oderId){
    console.log(oderId)
}) 
.catch(function(err){
    console.log(err.message)
})

