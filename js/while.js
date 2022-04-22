"use strict";
(function(){
let n = 1
    while(n< 65536){
    n =n * 2
        console.log(n)
    }
    let iceCream =Math.floor(Math.random()*51)+50
    let halfSold=iceCream / 2

    do{
        let customer = Math.floor(Math.random()*5)+1
        console.log("Customer has ordered " +customer + " pieces of candy.\nWe have " + iceCream + "left in stock.")
        if (customer > iceCream) {
            console.log("We cannot fulfill this order...Whoopies")
            continue;
        }else {
            console.log("Order fulfilled " + iceCream + "pieces of candy left in stock.")
        }
    }while(iceCream > halfSold)
    console.log("Time to close up shop! Whew.....what a day.")
})()