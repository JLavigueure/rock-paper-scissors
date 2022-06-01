// get computer input function
    // randomnumber variable = random number between 1 and 3
    // Assign rock, paper or scissors to computer variable with if statements. 1 = rock. 2 = paper. 3 = scissors.
    // return computer variable.
function computerPlay() {
    let randomInt = Math.floor(Math.random() * (4-1) + 1);
    let computer;
    if (randomInt == 1) {
        computer = "rock";
    }
    else if (randomInt == 2) {
        computer = "paper";
    }
    else {
        computer = "scissors";
    }
    return computer;
}

// get user input function
    // convert to all lowercase
    // if not equal to rock, paper or scissors, give error message and ask again
    // return players choice

function playerPlay() {
    let player = window.prompt("Rock, paper or scissors?").toLowerCase();
    if (player == "rock" || player == "paper" || player == "scissors") {
        return player;
    }
    else {
        console.log(`You entered ${player}, please enter rock, paper or scissors`);
        playerPlay();
    }
}

// Temp remove BO5 rounds function

// set rounds won to 0
let playerscore = 0;
let computerscore = 0;

// create iefe function game that will keep playing rounds until one player wins 3 rounds(best 3 out of 5)
(function game() {
    console.log("Game started\n\n\n")
    let i = 0;
    while(playerscore < 5 && computerscore < 5) {
        i++;
        console.log(`Player: ${playerscore} Computer: ${computerscore} Round: ${i}`);
        // get user and computer input;
        let player = playerPlay();
        let computer = computerPlay();
        // call playRound function  
        playRound(player, computer);
    }
})()

// create function to play single round of rock, paper, scissors
    //compare player input to each possible computer input
    // call win, lose or tie function depending on players results
function playRound(player, computer) {
    if (computer == "rock") {
        switch (player) {
            case "rock": 
                tie(player, computer);
                break;
            case "paper":
                win(player, computer);
                break;
            case "scissors":
                lose(player, computer);
                break;
        }
    }
    else if (computer == "paper") {
        switch (player) {
            case "rock": 
                lose(player, computer);
                break;
            case "paper":
                tie(player, computer);
                break;
            case "scissors":
                win(player, computer);
                break;
        }
    }
    else {
        switch (player) {
            case "rock": 
                win(player, computer);
                break;
            case "paper":
                lose(player, computer);
                break;
            case "scissors":
                tie(player, computer);
                break;
            }
    }   
}

//display winner and increase winners score by 1

function win(player, computer) {
    console.log(`You win! ${player} beats ${computer}\n\n`);
    playerscore++;
}

function lose(player, computer) {
    console.log(`You lose! ${computer} beats ${player}\n\n`);
    computerscore++;
}

function tie(player, computer) {
    console.log(`It's a tie! You both chose ${player}\n\n`);
}

// create win statement if playerscore = 3
// create lose statement if computerscore = 3

if (playerscore == 5) {
    console.log(`You won! ${playerscore} to ${computerscore}`);
}
else if (computerscore == 5) {
    console.log(`You lost! ${playerscore} to ${computerscore}`)
}