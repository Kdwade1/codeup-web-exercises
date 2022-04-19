"use strict"

let five = 5;

if(five === 5) {
    console.log("That was indeed 5.")
 }
 // function isItaNumber(num){
 //     if(typeof num === "number"){
 //         return "That is a number"
 //
 //     }
 // }
console.log(isItaNumber(5))
console.log(isItaNumber("Sheep"))
console.log(isItaNumber(true))

let ownsCow = false;
if(ownsCow === true){
    console.log("Going to milk Bessie!")
} else{
    console.log ("Going to H-E-B to go get some milk!")
}

// function isItaNumber(num){
//     if(typeof num === "number"){
//         return "That is a number"
//     } else{
//         return "That is not a number."
//     }
// }

let hasCow = true
let hasGoat = true

if (hasCow === true){
    console.log("Milking Martha!")
} else if(hasGoat === true) {
    console.log("Milking Billie!")
}else{
    console.log("Going to h-e-b")

    }
function isThisThirtyFive (num){
    if (num === 35){
        return "Yup! " + num + " sure is the number 35!"
    }else if(num > 35){
        return "Nope! " + num + " is greater than 35!"
    }else if(num < 35) {
        return "Nope! " + num + " is less than 35!"
    }else{
        return "Nope! " + num + " is not a number"
    }
}
console.log(isThisThirtyFive(34))
console.log(isThisThirtyFive(35))
console.log(isThisThirtyFive(36))
console.log(isThisThirtyFive("bananas"))
console.log(isThisThirtyFive("35"))
console.log(isThisThirtyFive(NaN))

let doWeHaveMilk = true
function makePunchBowlOfCereal(){
console.log("Chomping down on sugar smacks!")
}
function goToStore (){
    return "Going to Auchan!"
}

let action =(doWeHaveMilk) ? makePunchBowlOfCereal () : goToStore

function isItaNumber(num) {
    return (typeof num === "number") ? "That is a number!" : "That is not a number."
}

let pizzaPreference = prompt("What kind of pizza do you like?");

switch(pizzaPreference) {
    case "pineapple and hot sauce":
        alert("What a coincidence, that's my favorite!");
        break;
    case "cheese":
        alert("Just plain cheese? Okay...");
        break;
    default:
        alert(pizzaPreference + " isn't my favorite, but let's order some!");
        break;
}

let animalOwned= "cat";

switch(animalOwned){
    case "cow":
        console.log("Milking the cow!");
        break;
    case"goat":
        console.log ("Milking the G.O.A.T.");
        break;
    case "camel":
        console.log("Milking the camel....I guess");
        break;
    default:
            console.log("Alright fine, i'm heading to the store.");
        break;
}

function sandwitchPreference(str){
    switch(str){
        case"olive loaf":
            return "Congratulations on your bold choice";
        case "brisket":
            return "Congratulations on the correct choice";
        default:
            return" Not huge on " + str +" , but hey whatever makes you happy";

    }
    alert(sandwitchPreference(prompt("Hey what kind of sandwitch do you like?")).toLowerCase().trim())
}




