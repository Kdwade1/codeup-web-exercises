

let konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let songOfHealing = [37, 39, 40, 37, 39, 40]
let ben = [40, 39, 37, 40, 39, 37]
let storm = [65, 38, 40, 65, 38, 40]
let saria = [40, 39, 37, 40, 39, 37, 40]
let userInput = []


function password(userInput, cheat) {
    if (userInput.length === cheat.length) {
        for (i = 0; i < cheat.length; i++) {
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
        } else if (password(userInput, songOfHealing)) {
            alert("song of healing is playing")
        } else if (password(userInput, ben)) {
            alert("you shouldn't of done that ....")
        } else if (password(userInput, storm)) {
            alert("Is it raining?")
        } else if (password(userInput, saria)) {
            alert("Look at them dance!")
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