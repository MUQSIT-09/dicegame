// index.js
function rollDice() {
    var player1Name = document.getElementById("player1Name").value;
    var player2Name = document.getElementById("player2Name").value;

    var player1Dice = document.getElementById("player1Dice");
    var player2Dice = document.getElementById("player2Dice");

    var p1 = Math.floor(Math.random() * 6) + 1;
    var p2 = Math.floor(Math.random() * 6) + 1;

    var p1ImagePath = "./images/dice" + p1 + ".png";
    var p2ImagePath = "./images/dice" + p2 + ".png";

    player1Dice.setAttribute("src", p1ImagePath);
    player2Dice.setAttribute("src", p2ImagePath);

    var resultElement = document.getElementById("result");
    var player1Label = document.getElementById("player1Label");
    var player2Label = document.getElementById("player2Label");

    player1Label.textContent = player1Name + ": ";
    player2Label.textContent = player2Name + ": ";

    if (p1 > p2) {
        resultElement.textContent = player1Name + " wins!";
    } else if (p2 > p1) {
        resultElement.textContent = player2Name + " wins!";
    } else {
        resultElement.textContent = "It's a draw!";
    }
}
