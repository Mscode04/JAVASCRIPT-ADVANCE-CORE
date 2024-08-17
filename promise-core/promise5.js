//  creater oder > proced to pyment > show oder summery > update wallet 
// createOrder(cart,function(){
//     proceedToPyment(orderId,function(paymentId){
//         showorderSummery(paymentId,function (){
//             updateWallet()
//         })
//     })
// })


// rejection


const cart=["shoes","pants","kurtha"];


createOrder(cart)
.then(function (oderId){
    console.log(oderId)
}) 
.catch(function(err){
    console.log(err.message)
})
.then(function (oderId){
     return proceedToPyment(oderId)
}) 
.then(function (paymentId){
    console.log(paymentId)
}) 
.then(function (oderId){
    console.log('iam always Run')
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

function proceedToPyment(oderId){
    return new Promise(function (resolve,reject){
        resolve("Pyment is Sucsuss");
    })
}

//  just create the validate cart
function validateCart(cart){
    return false;
}