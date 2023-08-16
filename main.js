
    
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

class Game {
    constructor() {
        this.playerScore = 0;
        this.computerScore = 0;
    }
    playRound(playerChoice) {
        this.playerChoice = playerChoice;
        this.computerChoice = getComputerChoice();
        this.outcome = determineOutcome(this.playerChoice, this.computerChoice);
        if (this.outcome === Outcome.Win){
            this.playerScore++;
            return  `You won! ${this.playerChoice} beats ${this.computerChoice}`;
        } else if (this.outcome === Outcome.Loss){
            this.computerScore++;
            return `You lose! ${this.computerChoice} beats ${this.playerChoice}`;
        } else {
            return `You drew!`;
        }
    }
    isGameOver() {
        return (this.playerScore >= 5 || this.computerScore >= 5);
    }
    gameOverMessage() {
        if (this.playerScore >= 5){
            return  "Game over - You Won!";
        } else if (this.computerScore >= 5){
            return  "Game over - You Lost.";
        }
    }
}
 
const game = new Game();

const outcome = document.querySelector(".outcome");
const playerScoreSpan = document.querySelector("#player-score");
const computerScoreSpan = document.querySelector("#computer-score");

function playRound(e){

    if (game.isGameOver()) return null;

    const playerChoice = e.target.id;
    outcome.innerHTML = game.playRound(playerChoice);

    playerScoreSpan.innerText = game.playerScore;
    computerScoreSpan.innerText = game.computerScore;

    if (game.isGameOver()){
        outcome.innerText = game.gameOverMessage();
        outcome.style.fontSize = "24px";
        outcome.style.color = "red";
    }
}

document
    .querySelectorAll("button")
    .forEach(btn => btn.addEventListener("click", playRound));


