let homescore = 0
let guestscore = 0

var hometext = document.getElementById("hometext")
var guesttext = document.getElementById("guesttext")

hometext.textContent = homescore
guesttext.textContent = guestscore

function addOne(team){
    if(team == "home")
    {    
        homescore +=1 
        hometext.textContent = homescore
    } 
    else
    {
        guestscore +=1
        guesttext.textContent = guestscore
    }
}

function addTwo(team){
if(team == "home")
    {    
        homescore +=2 
        hometext.textContent = homescore
    } 
    else
    {
        guestscore +=2
        guesttext.textContent = guestscore
    }
}

function addThree(team){
if(team == "home")
    {    
        homescore +=3 
        hometext.textContent = homescore
    } 
    else
    {
        guestscore +=3
        guesttext.textContent = guestscore
    }
}