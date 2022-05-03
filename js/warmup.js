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


function sumOfElements(arr){
    let sum=0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

    }
    return sum

}
console.log(sumOfElements([1,2,3,4,5]));


function returnProductDetail(product){
    let obj={
        name: product.name,
        priceInCents:product.priceInCents
    }
return obj
}
let product1 = {
    name: 'Hammar',
    priceInCents: 400,
    description: 'It is a a hammar.',
    inventory: 25034
}
console.log(returnProductDetail(product1));