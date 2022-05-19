let action = ['rock', 'paper', 'scissors'];
const playerSelection = prompt("Please pick your hand - Rock, Paper or Scissors!").toLowerCase();

function computerPlay(){
    return randomPick = action[Math.floor(Math.random() * action.length)];
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == 'rock' && computerSelection == 'rock'){
        return result = 'a tie';
    } else if (playerSelection == 'rock' && computerSelection == 'paper'){
        return result = 'computer wins - paper beats rock';
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return result = 'player wins - rock beats scissors';
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return result = 'player wins - paper beats rock';
    } else if (playerSelection == 'paper' && computerSelection == 'paper'){
        return result = 'a tie';
    } else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        return result = 'computer wins - scissors beat paper';
    } else if (playerSelection == 'scissors' && computerSelection == 'rock'){
        return result = 'computer wins - rock beats scissors';
    } else if (playerSelection == 'scissors' && computerSelection == 'paper'){
        return result = 'player wins - scissors beat paper';
    } else if (playerSelection == 'scissors' && computerSelection == 'scissors'){
        return result = 'a tie';
    } else if (playerSelection != 'scissors' || playerSelection != 'paper' || playerSelection != 'rock'){
        return result = "cant do that"
    }
}

const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
