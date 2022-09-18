const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let rand

const btnEl = document.getElementById("password-btn")
const passwordOne = document.getElementById("password-one")
const passwordTwo = document.getElementById("password-two")

btnEl.addEventListener("click",() =>{
    let randomString1 = ""
    let randomString2 = ""
    
    
    for(let i= 0; i<15; i++) {
    rand = Math.floor(Math.random()*characters.length)
    randomString1 += characters[rand]
    
    rand = Math.floor(Math.random()*characters.length)
    randomString2 += characters[rand]
    }
    
    passwordOne.innerHTML = randomString1
    passwordTwo.innerHTML = randomString2


})

