const cart=["shoes","pants","kurtha"];
//  creater oder > proced to pyment > show oder summery > update wallet 
api.createOrder(cart,function(){
    api.proceedToPyment(function(){
        api.showorderSummery(function(){
            api.updateWallet()
        })
    })
})



// This is so complicated 
// This is Like a hell 
// Callback Hell
