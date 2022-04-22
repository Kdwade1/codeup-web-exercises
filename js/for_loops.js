"use strict";
(function(){
    function showMultiplicationTable(input){
        for (let i=1; i<=10;i++){
            console.log(input + " X " + i + " = " + (input*i));

        }
    }
    showMultiplicationTable(7);

    for(let i= 1; i <=10; i++) {
        let r = Math.floor(Math.random() * 20) + 180;
        if (r % 2 === 0) {
            console.log("It's even.")
        } else {
            console.log("its odd.")
        }
        console.log(r);
    }

// #4 creating pyramid
let n = 9
    let str= ''

    for(let p = 1; p <=n; p++){
        for(let j = 1; j <= p; j++ ){
            str +=p
        }
        str += "\n"

    }
    console.log(str);
// 5
    let num = 5
    for (let i = 100; i >= 1; i-=5 ){//i-5
        // if (i>= 5){
            console.log(i)
        // }


    }


    let lo=Math.floor(Math.floor()*51)

})();

