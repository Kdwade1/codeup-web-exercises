"use strict"


/*

function firstFunction(name){
    return "Hello " + name;
}

console.log(firstFunction("Kelvin"))

function parseMyStuff (input){
    input= parseFloat(input)
    return input;
}
console.log(prompt("How much does this thing cost?"))

var price= parseMyStuff(prompt("How much does this thing cost?"))
console.log(price)




function isString (x){
return typeof x =="string"
}
console.log(isString("string"))

function isNumber (input){
    return typeof input === "number";
}
console.log(isNumber())

function isNotNumber(input){
    return isNaN(input)
}
console.log(isNotNumber())


const increment= function(x){
    return x +1
}
console.log(increment(5))

const myArrowFunction = (firstName, lastName) => firstName + "" +lastName
console.log(increment())
console.log (myArrowFunction("Kelvin", "Wade"))

const firstArrowFunction= (name) => "Hello my "+  name

let weekDays=6
function scopeTest(){
    let weekDays=5
    console.log(weekDays)
}// <-- block
scopeTest()// calling a function
*/

'use strict';

sayHello1(); // Greetings from sayHello1.
sayHello2(); // Uncaught TypeError: Property 'sayHello2' of object [object Object] is not a function

// declare a function in the global scope
function sayHello1 () {
    alert('Greetings from sayHello1.');
}

// assign a function to a variable named sayHello2
var sayHello2 = function () {
    alert('Greetings from sayHello2.');
};

