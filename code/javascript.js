    let optionsArray = ["rock", "paper", "scissors"];
    let playerScore = 0;
    let computerScore = 0;

    function getComputerChoice() {
    return optionsArray[Math.floor(Math.random() * optionsArray.length)];
    }

    function playRound(playerSelection, computerSelection) {
    //HERE WE JUST LOG THE CHOICES
    console.log(`Player chose: ${playerSelection}`);
    console.log(`Computer chose: ${computerSelection}`);

    if (playerSelection === computerSelection) {
        console.log("It's a tie! Let's play again");
        return true;
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        playerScore += 1;
        return false; //this is used so the loop for the playagain doenst happen
    } else {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        computerScore += 1;
        return false; //this is used so the loop for the playagain doenst happen
    }
    }

    let isTie = true;

    while (isTie) {
    const playerSelection = prompt(
        "Enter your choice: Rock, Paper, Scissors."
    ).toLowerCase();
    const computerSelection = getComputerChoice();
    isTie = playRound(playerSelection, computerSelection);
    }

    function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt(
        "Enter your choice: Rock, Paper, Scissors."
        ).toLowerCase();
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }

    if (playerScore >= 3) {
        console.log(`You won with ${playerScore} - ${computerScore}`);
    } else {
        console.log(`You lost ${playerScore} - ${computerScore} `);
    }
    }
    game();
