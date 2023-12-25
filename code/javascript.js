    let playerScore = 0;
    let computerScore = 0;
    let roundWinner = '';


    function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {

        roundWinner = 'tie';
    }
    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {

        playerScore++
        roundWinner = 'player'
    }
    if (
        (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
        (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
        (computerSelection === 'PAPER' && playerSelection === 'ROCK')
    ){

        computerScore++;
        roundWinner = "computer";
    }
    updateScoreMessage(roundWinner,playerSelection,computerSelection)
    }

    function getRandomChoice() {
      let randomNumber = Math.floor(Math.random() * 3);
        switch (randomNumber) {
            case 0:
            return "rock";
            case 1:
            return "paper";
            case 2:
            return "scissors";
        }
    }

    function gameOver() {
        return playerScore ===3 || computerScore === 3
    }

    //ui get variable from html to js script
    const scoreInfo = document.getElementById("scoreInfo");
    const scoreMessage = document.getElementById("scoreMessage");
    const playerScorePara = document.getElementById("playerScore");
    const computerScorePara = document.getElementById("computerScore");
    const playerSign = document.getElementById("playerWeapon");
    const computerSign = document.getElementById("computerWeapon");
    const rockBtn = document.getElementById("rockBtn");
    const paperBtn = document.getElementById("paperBtn");
    const scissorsBtn = document.getElementById("scissorsBtn");
    const endgameModal = document.getElementById("endgameModal");
    const endgameMsg = document.getElementById("endgameMsg");
    const overlay = document.getElementById("overlay");
    const restartBtn = document.getElementById("restartBtn");
