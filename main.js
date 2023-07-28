
const Choices = {
    Rock: "Rock",
    Paper: "Paper",
    Scissors: "Scissors",
};

const Outcome = {
    Loss: -1,
    Draw: 0,
    Win: 1,
};

function getComputerChoice(){
    const u = Math.random();
    if (u < 1/3){
        return Choices.Rock;
    } else if (u < 2/3) {
        return Choices.Paper;
    } else {
        return Choices.Scissors;
    }
}

function cleanChoice(s){
   let out = s.trim().toLowerCase();
   return out.slice(0, 1).toUpperCase() + out.slice(1);
}

function getPlayerChoice(){
    let choice = "";
    const valid_choices = Object.keys(Choices); 
    while (!valid_choices.includes(choice)){
        choice = prompt("Enter rock, paper or scissors");
        choice = cleanChoice(choice);
    }
    return Choices[choice];
}

function determineOutcome(player, computer){
    if (player === computer){
        return Outcome.Draw;
    } else if (player === Choices.Rock & computer === Choices.Scissors) {
        return Outcome.Win;
    } else if (player === Choices.Paper & computer === Choices.Rock) {
        return Outcome.Win;
    } else if (player === Outcome.Scissors & computer === Choices.Paper) {
        return Outcome.Win;
    } else {
        return Outcome.Loss;
    }
}

function playRound(player, computer){
    const outcome = determineOutcome(player, computer);
    if (outcome === Outcome.Loss) {
        console.log(`You lose! ${computer} beats ${player}`);
    } else if (outcome === Outcome.Draw) {
        console.log(`You drew!`);
    } else {
        console.log(`You won! ${player} beats ${computer}`);
    }
    return outcome;
}

function game(){
    let score = 0;
    let round = 0;
    while (round < 5) {
        round += 1;
        console.log("Round ", round);
        const player_choice = getPlayerChoice();
        const computer_choice = getComputerChoice();
        score += playRound(player_choice, computer_choice);
    }
    if (score > 0) {
        console.log("Game over - you won!");
    } else if (score < 0) {
        console.log("Game over - you lost.");
    } else {
        console.log("Game over - you drew.");
    }
}

