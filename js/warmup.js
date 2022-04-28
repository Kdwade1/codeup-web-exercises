"use strict"

console.log("Yay! I completed the warmup.")

for(let i = 1; i<101; i++){
    if(i % 15  ===0){
        console.log("FizzBuzz")
    }else if(i % 3 === 0){
        console.log("Fizz")
    }else if(i % 5 ==0){
        console.log("Buzz")
    }else{
        console.log(i)
    }
}
//
// function allFirstLetters ([x]){
//    return x.map()
// }
// console.log(allFirstLetters(["dog","cat","frog","bat"]))

function allFirstletters(arr){
    let bucket = "";
    for(let el of arr){
        bucket+=el[0]
    }
    return bucket;
}
//<--- use substring for  better result.

function inorder(x){
    return x.split("").sort().join('')
}
console.log(inorder("Codeup"))