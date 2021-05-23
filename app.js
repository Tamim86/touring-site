let destination = prompt('Tell us where you would like to go? ')
let budget = prompt('Would you detemine a range for budget?')
let duration = prompt('How long would you like to stay at' + destination)
let residence = prompt('What type of residence you prefere, Luxury or Cajual mid range?')
alert (destination + 'Amazing choice')
function myBudget (){
    if (budget<='1000' && duration<='10')
        alert ('We have great options for you that fit your budget!')
    else {
        alert ('You have a great spirit, Lets find something fits your taste!')
    }    
}

myBudget()

alert('You are going to '+ destination)
alert('You are staying in ' + residence)
alert('Wish you a great travel')
