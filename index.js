const all = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]


const lettersNumbers = [...letters, "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const lettersSymbols = [...letters, "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]





const btnEl = document.getElementById("password-btn")
const passwordOne = document.getElementById("password-one")
const passwordTwo = document.getElementById("password-two")



btnEl.addEventListener("click", generatePassword)

function generatePassword(){

    const inputLength = document.getElementById("input-length").value
    let randomString1 = ""
    let randomString2 = ""
    let list
    const isSymbols = document.getElementById("symbols-check").checked
    const isNumbers = document.getElementById("numbers-check").checked
    
    if(inputLength == 0)alert("please enter a length")

    if(!(isSymbols && isNumbers)) list = letters
    if(isSymbols && !isNumbers) list = lettersSymbols
    if(!isSymbols && isNumbers) list = lettersNumbers
    if (isSymbols && isNumbers) list = all

    for(let i= 0; i<inputLength; i++) {
    let rand1 = Math.floor(Math.random()*list.length)
    randomString1 += list[rand1]
    
    let rand2 = Math.floor(Math.random()*list.length)
    randomString2 += list[rand2]
    }
    
    passwordOne.innerHTML = randomString1
    passwordTwo.innerHTML = randomString2
}



