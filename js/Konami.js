

let konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let songOfHealing = [37, 39, 40, 37, 39, 40]
let ben = [40, 39, 37, 40, 39, 37]
let storm = [65, 38, 40, 65, 38, 40]
let saria = [40, 39, 37, 40, 39, 37, 40]
let userInput = []


function password(userInput, cheat) {
    if (userInput.length === cheat.length) {
        for (let i = 0; i < cheat.length; i++) {
            if (cheat[i] !== userInput[i]) {
                return false;
            }
        }
        return true
    } else {
        return false
    }


}

$(document).keydown(function (e) {
    let key = e.keyCode
    console.log(key)


    if (key === 13) {

        if (password(userInput, konamiCode)) {
            alert("Konami code acheive")
            $(".Konami").css("display","inline")
            $(".cookie").append("Wow such skill")
            $(".cool").append("So cool!").repeat(2)

        }
        if (password(userInput, songOfHealing)) {
            alert("song of healing is playing")
            $("#healing").css("display","inline")
            setTimeout(()=>{
                $("#healing").css("display","none")
            },10000)


        }  if (password(userInput, ben)) {
            alert("you shouldn't of done that ....")
            setTimeout(()=>{
                alert("Why did you do that.....")
                $("body").css("background-color","black")
            },5000)
            setTimeout(()=>{
                alert("ha...ha....ha")
            },10000)
            setTimeout(()=>{
                $("#ben").css("display","inline")
            },13000)
            setTimeout(()=>{
                $("#ben").css("display","none")
                $("body").css("background-color","white")
            },15500)
            $("body").css("background-image","/img/Ben_drowned.webp")
        }  if (password(userInput, storm)) {
            alert("Is it raining?")
            $("#storm").css("display","inline")
            setTimeout(()=>{
                $("#storm").css("display","none")
            },10000)
        }  if (password(userInput, saria)) {
            alert("Look at him dance!")
            $("#goron").css("display","inline")
        }
        userInput = [];
    } else {
        userInput.push(key)

    }

})
$("h1").innerHTML(function (){
    location.reload()
})