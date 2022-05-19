let action = ['rock', 'paper', 'scissors'];
function computerPlay(){
    return randomPick = action[Math.floor(Math.random() * action.length)];
}

function playRound(playerSelection, computerSelection){

    if(playerSelection == 'rock' && computerSelection == 'rock'){
        return result = 'tie';
    } else if (playerSelection == 'rock' && computerSelection == 'paper'){
        return result = 'computer';
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return result = 'player';
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return result = 'player';
    } else if (playerSelection == 'paper' && computerSelection == 'paper'){
        return result = 'tie';
    } else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        return result = 'computer';
    } else if (playerSelection == 'scissors' && computerSelection == 'rock'){
        return result = 'computer';
    } else if (playerSelection == 'scissors' && computerSelection == 'paper'){
        return result = 'player';
    } else if (playerSelection == 'scissors' && computerSelection == 'scissors'){
        return result = 'tie';
    } else if (playerSelection != 'scissors' || playerSelection != 'paper' || playerSelection != 'rock'){
        return result = "cant do that"
    }
}


function game(){
    // set a counter for player and computer
    let playerScore = 0;
    let computerScore = 0;
    //play 5 rounds
    for(let i = 0; i < 5; i++){
        // call the computerSelection function - computerPlay() to pick random action
        const computerSelection = computerPlay();
        let playerSelection = prompt("Please pick your hand - Rock, Paper or Scissors!").toLowerCase();
        playRound(playerSelection, computerSelection)
        // log what the computer picks so it looks as real as it can
        console.log(computerSelection)
        // compare result to the strings in playRound()
        if (result === 'tie') {
            playerScore += 1;
            computerScore += 1;
            console.log('tie, point to each')
        } else if ( result === 'player'){
            playerScore += 1;
            console.log(`one point for player`)
        } else if (result === 'computer') {
            computerScore += 1;
            console.log(`one point to computer`)
        } else {
            console.log('somethings wrong')
            i--;
        }

    }
    // check to see who wins
    if (playerScore > computerScore){
        console.log(`Player scored ${playerScore} points, so he\'s the winner!`)
    } else if (playerScore === computerScore){
        console.log(`Player score: ${playerScore} ---- Computer score: ${computerScore} therefore it\'s a tie.`)
    } else {
        console.log(`Computer scored ${computerScore} points, so he\'s the winner!`)
    }
}

game()