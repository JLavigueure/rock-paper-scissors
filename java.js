// Logs button clicked
const btns = document.querySelectorAll(".btn");
btns.forEach((button) => {
    button.addEventListener('click', playerPlay);
});

// results display
const playerscorediv = document.querySelector('.player');
const computerscorediv = document.querySelector('.computer');
const resultsmessage = document.querySelector('.result');


// vvv GAME FUNCTIONS vvv

// set rounds won to 0
let playerscore = 0;
let computerscore = 0;

// get user input function
let player;
function playerPlay(e) {
    if (playerscore > 4 || computerscore > 4) {return;} //check if game over
    player = (e.target.id);
    playRound (player, computerPlay());
}

// get computer input function
    // randomnumber variable = random number between 1 and 3
    // Assign rock, paper or scissors to computer variable with if statements. 1 = rock. 2 = paper. 3 = scissors.
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
    // display score. Had to
    playerscorediv.textContent = `You ${playerscore}`;
    computerscorediv.textContent = `Computer ${computerscore}`;

    // Show overall winner 
    if (playerscore > 4) {
        resultsmessage.textContent =`You won! ${playerscore} to ${computerscore}`;
    }
    else if (computerscore > 4) {
        resultsmessage.textContent = `You lost! ${playerscore} to ${computerscore}`
    }
}

//display winner and increase winners score by 1

function win(player, computer) {
    resultsmessage.textContent = `You win! ${player} beats ${computer}\n\n`;
    playerscore++;
}

function lose(player, computer) {
    resultsmessage.textContent = `You lose! ${computer} beats ${player}\n\n`;
    computerscore++;
}

function tie(player, computer) {
    resultsmessage.textContent = `It's a tie! You both chose ${player}\n\n`;
}