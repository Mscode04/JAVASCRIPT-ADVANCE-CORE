//  creater oder > proced to pyment > show oder summery > update wallet 
// createOrder(cart,function(){
//     proceedToPyment(orderId,function(paymentId){
//         showorderSummery(paymentId,function (){
//             updateWallet()
//         })
//     })
// })

const cart=["shoes","pants","kurtha"];
 const promise = createOrder(cart); //order id 


console.log(promise) // becouse the promise will compleate afetr 5s


setTimeout(function(){
    console.log(promise);
},8000)



promise.then(function (oderId){
    console.log(oderId)
    // proceedToPyment(orderId);
}) 

function createOrder(cart){
    const pr=new Promise(function(resolve,reject){
        //valodate
        if(!validateCart(cart)){
            const err=new Error("Cart is not Valid")
            reject(err)
        };

        const oderId="12343"
        if(oderId){
            setTimeout(function(){
                resolve(oderId);
            },5000)
        };
    })
    return pr;
}

//  just create the validate cart
function validateCart(cart){
    return true;
}