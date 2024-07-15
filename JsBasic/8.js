function guessNumberGame() {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    let userGuess = prompt("Guess the number between 1 and 10:");
    userGuess = parseInt(userGuess);

    if (userGuess === randomNumber) {
        alert("Good Work");
    } else {
        alert("Not matched");
    }
}

guessNumberGame();