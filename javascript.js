    let playerScore = 0;
    let computerScore = 0;
    let roundWinner = '';


    function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {

        roundWinner = 'tie';
    }
    if (
        (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
        (playerSelection === "PAPER" && computerSelection === "ROCK") ||
        (playerSelection === "SCISSORS" && computerSelection === "PAPER")
    ) {

        playerScore++;
        roundWinner = 'player';
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

    //FUNCTION GENERATE COMPUTER PLAY
    function getRandomChoice() {
      let randomNumber = Math.floor(Math.random() * 3);
        switch (randomNumber) {
            case 0:
            return "ROCK";
            case 1:
            return "PAPER";
            case 2:
            return "SCISSORS";
        }
    }

    //FUNCTION TO SET HOW MANY ROUND NEEDED TO WIN A GAME
    function isGameOver() {
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

    //CLICK EVENT TO THE BTNS FOR RETURN THE VALUE OF THE CHOICE MAD
    restartBtn.addEventListener("click", restartGame);
    overlay.addEventListener("click", closeEndgameModal);
    rockBtn.addEventListener("click", (event) => handleClick("ROCK"));
    paperBtn.addEventListener("click", (event) => handleClick("PAPER"));
    scissorsBtn.addEventListener("click", (event) => handleClick("SCISSORS"));

    //FUNCTION TO HANLDE IF GAME IS OVER OR NOT
    function handleClick(playerSelection) {
        if (isGameOver()) {
        openEndgameModal();
        return;
        }

        const computerSelection = getRandomChoice();
        playRound(playerSelection, computerSelection);
        updateChoices(playerSelection, computerSelection);
        updateScore();

        if (isGameOver()) {
        openEndgameModal();
        setFinalMessage();
        }
    }

    //FUNCTION TO SHOW WHAT PLAYERS CHOOSE
    function updateChoices(playerSelection, computerSelection) {
        const playerWeapon = document.getElementById('playerWeapon');
        const computerWeapon = document.getElementById('computerWeapon');

            function createImageElement(src, alt) {
                const img = document.createElement("img");
                img.src = src;
                img.alt = alt;
                return img;
            }

        switch (playerSelection) {
        case "ROCK":
            playerWeapon.textContent = '';
            playerWeapon.appendChild(
            createImageElement("assets/rockWhite.png", "Rock")
            );
            break;
        case "PAPER":
            playerWeapon.textContent = "";
            playerWeapon.appendChild(
            createImageElement("assets/paperWhite.png", "Paper")
            );            break;
        case "SCISSORS":
            playerWeapon.innerHTML = "";
            playerWeapon.appendChild(
            createImageElement("assets/scissorsWhite.png", "Scissors")
            );            break;
        }

        switch (computerSelection) {
            case "ROCK":
            computerWeapon.textContent = "";
            computerWeapon.appendChild(
            createImageElement("assets/rockWhite.png", "Rock")
            );
            break;
            case "PAPER":
            computerWeapon.innerHTML = "";
            computerWeapon.appendChild(
            createImageElement("assets/paperWhite.png", "Paper")
            );
            break;
            case "SCISSORS":
            computerWeapon.innerHTML = "";
            computerWeapon.appendChild(
            createImageElement("assets/scissorsWhite.png", "Scissors")
            );
            break;
        }
    }

    //FUNCTION UPDATE SCORE
    function updateScore() {
        if (roundWinner === "tie") {
        scoreInfo.textContent = "It's a tie!";
        } else if (roundWinner === "player") {
        scoreInfo.textContent = "You won!";
        } else if (roundWinner === "computer") {
        scoreInfo.textContent = "You lost!";
        }

        playerScorePara.textContent = `Player: ${playerScore}`;
        computerScorePara.textContent = `Computer: ${computerScore}`;
    }

    //FUNCTION TO UPDATE SCORE MESSAGE TO SEE WHO WON THE ROUND
    function updateScoreMessage(winner, playerSelection, computerSelection) {
        if (winner === "player") {
        scoreMessage.textContent = `${capitalizeFirstLetter(playerSelection)} beats ${capitalizeFirstLetter(computerSelection)}`;
        return;
        }
        if (winner === "computer") {
        scoreMessage.textContent = `${capitalizeFirstLetter(playerSelection)} is beaten by ${capitalizeFirstLetter(computerSelection)}`;
        return;
        }

        scoreMessage.textContent = `${capitalizeFirstLetter(playerSelection)} ties with ${capitalizeFirstLetter(computerSelection)}`;
    }

    //FUNCTION TO CAPITALIZE FIRST LETTER
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    //FUNCTION TO OPEN MODAL IF GAME ENDEND
    function openEndgameModal() {
        endgameModal.classList.add("active");
        overlay.classList.add("active");
    }

    //FUNCTION TO CLOSE MODAL 
    function closeEndgameModal() {
        endgameModal.classList.remove("active");
        overlay.classList.remove("active");
    }

    //FUCNTION TO SAY WHO WON THE GAME
    function setFinalMessage() {
        return playerScore > computerScore
        ? (endgameMsg.textContent = "You won!")
        : (endgameMsg.textContent = "You lost...");
    }

    //FUNCTION TO RESTART GAME
    function restartGame() {
        playerScore = 0;
        computerScore = 0;
        scoreInfo.textContent = "Choose your weapon";
        scoreMessage.textContent = "First to score 5 points wins the game";
        playerScorePara.textContent = "Player: 0";
        computerScorePara.textContent = "Computer: 0";
        playerSign.textContent = "❔";
        computerSign.textContent = "❔";
        endgameModal.classList.remove("active");
        overlay.classList.remove("active");
    }
