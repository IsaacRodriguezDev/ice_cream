"use strict"
window.onload = function(){
    let iceCreamform = document.querySelector('#iceCreamform')
        let toppingsList = document.querySelector('#toppingsList')
        toppingsList.style.display = 'none'
    
    iceCreamform.addEventListener('submit',  calculateIceCreamOrder)
    iceCreamform.addEventListener('click', function(){
        if(document.querySelector('#yesCup').checked){
            toppingsList.style.display = 'block'
        }else{
            toppingsList.style.display = 'none'

        }
    })
}

function calculateIceCreamOrder(event){
    event.preventDefault()
    let theForm = event.target
    let results = document.querySelector('#results')
    let totalnumberOfScoops =  Number(theForm.numberOfScoops.value) 
    let totalnumberOfScoopsPrice = 2.25
    let toppings = 0
    let message 
    
    console.log(totalnumberOfScoopsPrice)
   
    if (totalnumberOfScoops > 1){
        totalnumberOfScoopsPrice +=  ((totalnumberOfScoops -1)* 1.25)
        console.log(totalnumberOfScoopsPrice)
   
    }
    if(theForm.yesCup.checked){
        console.log(theForm.yesCup.checked)
        if(theForm.sprinkles.checked){
            toppings += 0.50
        }
        if(theForm.whippedCream.checked){
            toppings += 0.25
        }
        if(theForm.hotFudge.checked){
            toppings += 1.25
        }
        if(theForm.cherry.checked){
            toppings += 0.25
        }
        let totalCost = totalnumberOfScoopsPrice + toppings
        message = `
        <div>Number of scoops: ${totalnumberOfScoops}</div>
       <div>You ordered a cup</div>
       <div>Toppings price: $${toppings.toFixed(2)}</div>
       <div >Total Due: $${totalCost.toFixed(2)}</div>
        `
        results.innerHTML = message
    }
    if(theForm.yesCone.checked){
        let totalCost = totalnumberOfScoopsPrice + toppings
       
        
        message = `
        <div>Number of scoops: ${totalnumberOfScoops}</div>
       <div>You ordered a cone</div>
      
       <div >Total Due: $${totalCost.toFixed(2)}</div>
        `
       
    }
   results.innerHTML = message
}