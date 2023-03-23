// Constants

const rock = "🪨"
const paper = "📄"
const scissors = "✂️"
const choices = [paper, scissors, rock]

const playerWinsMessage = "Player wins!"
const computerWinsMessage = "Computer wins!"
const tieMessage = "It's a tie!"

//Main code

let shuffleIntervalId = startShufflingChoices()
registerPlayerChoiceEventListener()

//Function definitions

function startShufflingChoices() {
    return setInterval(shuffleChoices, 150)
}

function shuffleChoices() {
    setChoice(nextChoice())
}

function nextChoice() {
    let index = nextChoiceIndex()
    return choices[index]
}

function nextChoiceIndex() {
    let choiceIndex = choices.indexOf(computerChoice())
    if (choiceIndex < choices.length - 1) {
        return ++choiceIndex
    } else {
        return 0
    }
}

function computerChoice() {
    let choiceShuffle = document.querySelector("#choice-shuffle")
    return choiceShuffle.textContent
}

function setChoice(choice) {
    document.querySelector("#choice-shuffle").textContent = choice
}

function registerPlayerChoiceEventListener() {
    let playerChoiceContainer = document.querySelector("#player-choice-container")
    playerChoiceContainer.addEventListener("click", handlePlayerChoice)
}

function handlePlayerChoice(event) {
    if (event.target.classList.contains("choice")) {
        let playerChoice = event.target.textContent
        setPlayerChoice(playerChoice)
        clearInterval(shuffleIntervalId)
        determineGameWinner(playerChoice, computerChoice())
        document.querySelector("#play-again").style.display = "block"
    }
}

function setPlayerChoice(playerChoice) {
    let playerChoiceContainer = document.querySelector("#player-choice-container")
    playerChoiceContainer.innerHTML = `<p class="choice">${playerChoice}</p>`
}

function determineGameWinner(playerChoice, computerChoice) {
    let gameResultMessageElement = document.querySelector("#game-result-message")
    gameResultMessageElement.textContent = gameResultMessage(playerChoice, computerChoice)
}

function gameResultMessage(playerChoice, computerChoice) {
    /* 
      Implement winner determination algorithm:
          * If the player's choice is the same as the computer's choice, then it's a tie;
          * If the player's choice is scissors and the computer's choice is paper, then the player wins;
          * If the player's choice is rock and the computer's choice is scissors, then the player wins;
          * If the player's choice is paper and the computer's choice is rock, then the player wins;
          * In all the other cases, the computer wins.
    */
    return ""
}
