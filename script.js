'use strict';

const rpsArray = [
    'Rock', 'Paper', 'Scissors'
]
const computerPlay = function () {
    return rpsArray[Math.floor(Math.random() * rpsArray.length)]
}

// let computerSelection = computerPlay()
// let playerSelection = prompt("Rock Paper or Scissors")

const playRound = function (computerSelection, playerSelection) {

    // TIE 
    if (playerSelection === computerSelection) {
        return `Both players selected ${playerSelection}`
    }
    // ROCK
    if (playerSelection === "Rock") {
        if (computerSelection === "Scissors") {
            return ` ${playerSelection} beats ${computerSelection} Player you win`
        } else {
            return ` ${computerSelection} beats ${playerSelection}Computer wins`
        }
    }
    // Paper
    else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            return ` ${playerSelection} beats ${computerSelection} Player you win`
        } else {
            return ` ${computerSelection} beats ${playerSelection}Computer wins`
        }
    }
    // scissors
    else {
        if (computerSelection === "Paper") {

            return ` ${playerSelection} beats ${computerSelection} Player you win`
        } else {
            return ` ${computerSelection} beats ${playerSelection}Computer wins `
        }
    }
}

let playerSelection = prompt("Rock Paper or Scissors")
const computerSelection = computerPlay()
console.log(playRound(playerSelection, computerSelection))


const game = function () {
    for (let i = 0; i < 5; i++) {


        console.log(playRound(), 'Round', i)

    }

}

game()

