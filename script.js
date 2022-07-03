const rpsArray = [
    'Rock', 'Paper', 'Scissors'
]
const computerPlay = function () {
    return rpsArray[Math.floor(Math.random() * rpsArray.length)]
}

// let computerSelection = computerPlay()
// let playerSelection = prompt("Rock Paper or Scissors")

const playRound = function (computerSelection, playerSelection) {
    if (computerSelection === 'Rock' && playerSelection === 'Scissors') {
        //Computer win scenarioues 
        return `You lose! ${computerSelection} beats ${playerSelection}`
    } else if (computerSelection === 'Paper' && playerSelection === 'Rocks') {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    } else if ((computerSelection === 'Scissors' && playerSelection === 'Paper')) {
        return `You lose! ${computerSelection} beats ${playerSelection}`
        // Tie Game Scenarioes 
    } else if ((computerSelection === 'Rock' && playerSelection === 'Rock')) {
        return `Tie Computers ${computerSelection} is the same as Players ${playerSelection}`
    } else if ((computerSelection === 'Paper' && playerSelection === 'Paper')) {
        return `Tie Computers ${computerSelection} is the same as Players ${playerSelection}`
    } else if ((computerSelection === 'Scissor' && playerSelection === 'Scissor')) {
        return `Tie Computers ${computerSelection} is the same as Players ${playerSelection}`
        // Player win scenarioues 
    } else if (playerSelection === 'Scissor' && computerSelection === 'Paper') {
        return ` ${playerSelection} beats ${computerSelection} Player wins `
    } else if (playerSelection === 'Paper' && computerSelection === 'rock') {
        return ` ${playerSelection} beats ${computerSelection} Player wins `
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissor') {
        return ` ${playerSelection} beats ${computerSelection} Player wins `
    }

}

const playerSelection = 'Rock'
const computerSelection = computerPlay()
console.log(playRound(playerSelection, computerSelection))