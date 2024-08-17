// Azumi is an object representing the eventual completion or failure of an 
// axyrshranous operation Since most people are consumers of already- created promises,
//  this guide will explain consumption of retumed promises before explaining how to create them



const cart=["shoes","pants","kurtha"];
//  creater oder > proced to pyment > show oder summery > update wallet 
// api.createOrder(cart,function(){
//     api.proceedToPyment(function(){
//         api.showorderSummery(function(){
//             api.updateWallet()
//         })
//     })
// })

// old version
// createOrder(cart,function(orderId){
//     api.proceedToPyment(orderId)
// });


const promise=createOrder(cart);
// {data : undefined}  // initial time 
// {data : oderdatils}  // after api comes and executeing time 

promise.then(function(orderId){
    api.proceedToPyment(orderId)
})


