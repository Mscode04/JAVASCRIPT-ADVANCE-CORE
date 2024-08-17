const cart=["shoes","pants","kurtha"];
//  creater oder > proced to pyment > show oder summery > update wallet 
createOrder(cart,function(){
    proceedToPyment(orderId,function(paymentId){
        showorderSummery(paymentId,function (){
            updateWallet()
        })
    })
})

// const promise=createOrder(cart);
// promise.then(function(orderId){
//     api.proceedToPyment(orderId)
// })  sa smae as

createOrder(cart)
.then(function(orderId){
    return proceedToPyment(orderId);
})
.then(function(paymentId){
    return showorderSummery(paymentId);
})
.then(function(orderId){
    return updateWallet(orderId);
})

// New Modal with arrow function
createOrder(cart)
    .then((orderId)=> proceedToPyment(orderId))
    .then((paymentId)=>showorderSummery(paymentId))
    .then((orderId)=>updateWallet(orderId));
