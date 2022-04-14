"use strict"
console.log("Hello from external.js")

alert("Welcome to my website!")
let color = alert(prompt("What is your favorite color?") + " is my favorite color too!");

let littleMermaid =parseInt((prompt("How many days would you like to rent The Little Mermaid for?")));
let brotherBear= parseInt((prompt("How many days would you like to rent brother bear for?")));
let hercules= parseInt((prompt("How many days would you like to rent Hercules for?")));
let totalPrice = 3*(littleMermaid+brotherBear+hercules);
alert("The total rental is: " + totalPrice);


let facebookHours = parseInt(prompt("How many hours did you work at Facebook? "));
let facebookPay = parseInt(prompt("How much do we pay?"));
let googleHours = parseInt(prompt("How many hours did you work this week at Google? ")) ;
let googlePay = parseInt(prompt("How much do we pay? "));
let amazonHours= parseInt(prompt("How many hours did you work this week at Amazon"));
let amazonPay= parseInt(prompt("How much do we pay?"));
let weekSalary = (facebookPay* facebookHours) + (googleHours*googlePay)+ (amazonHours*amazonPay);
alert("This is your salary " +weekSalary);



let enrollment = false;
let copacity = confirm("Press okay if the class is full.");
let conflict = confirm("Press okay if there's conflict");
enrollment = (!copacity && !conflict);
alert("You can enroll! "+ enrollment);


let premium = confirm("Press okay if you're a premium memeber.");
let product = confirm("Press okay if you brought more than two items.");
let expired= confirm ("Press okay if offer has expired.");
let offer = premium || (product && !expired);
alert(" You qualify for the offer "+ offer );






