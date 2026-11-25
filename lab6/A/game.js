// Global variables
let gameStarted = false;
let wins = 0;
let losses = 0;
let draws = 0;
let round = 0;
let results = [];

// Start Game
function startGame() {

    let name =
        document.getElementById("playerName").value;

    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    gameStarted = true;

    document.getElementById("welcome").innerHTML =
        "Welcome, " + name + "!";

    document.getElementById("startTime").innerHTML =
        "Game Started: " + new Date();
}

// Computer Choice
function getComputerChoice() {

    let choices =
        ["rock", "paper", "scissors"];

    let randomIndex =
        Math.floor(Math.random() * 3);

    return choices[randomIndex];
}

// Play one round
function playRound(playerChoice) {

    if (!gameStarted) {
        alert("Click Start Game first.");
        return;
    }

    let computerChoice =
        getComputerChoice();

    document.getElementById("playerImg").src =
        playerChoice + ".png";

    document.getElementById("computerImg").src =
        computerChoice + ".png";

    let result;

    if (playerChoice === computerChoice) {

        result = "Draw";
        draws++;

    }
    else if (
        (playerChoice === "rock" &&
            computerChoice === "scissors") ||

        (playerChoice === "paper" &&
            computerChoice === "rock") ||

        (playerChoice === "scissors" &&
            computerChoice === "paper")
    ) {

        result = "Win";
        wins++;
    }
    else {

        result = "Lose";
        losses++;
    }

    results.push(result);

    document.getElementById("wins").innerHTML =
        wins;

    document.getElementById("losses").innerHTML =
        losses;

    document.getElementById("draws").innerHTML =
        draws;

    document.getElementById("result").innerHTML =
        result;

    if (result === "Win") {
        document.getElementById("result").style.color =
            "green";
    }
    else if (result === "Lose") {
        document.getElementById("result").style.color =
            "red";
    }
    else {
        document.getElementById("result").style.color =
            "gray";
    }

    round++;

    document.getElementById("history").innerHTML +=
        "<tr>" +
        "<td>" + round + "</td>" +
        "<td>" + playerChoice + "</td>" +
        "<td>" + computerChoice + "</td>" +
        "<td>" + result + "</td>" +
        "</tr>";
}

// Show Summary
function showSummary() {

    let winCount = 0;

    for (let i = 0; i < results.length; i++) {

        if (results[i] === "Win") {
            winCount++;
        }
    }

    let totalRounds = results.length;

    let percentage = 0;

    if (totalRounds > 0) {

        percentage =
            Math.round(
                (winCount / totalRounds) * 100
            );
    }

    alert(
        "You played " +
        totalRounds +
        " rounds and won " +
        percentage +
        "%"
    );
}

// Reset Game
function resetGame() {

    wins = 0;
    losses = 0;
    draws = 0;
    round = 0;
    results = [];
    gameStarted = false;

    document.getElementById("wins").innerHTML = 0;
    document.getElementById("losses").innerHTML = 0;
    document.getElementById("draws").innerHTML = 0;

    document.getElementById("result").innerHTML = "";

    document.getElementById("welcome").innerHTML = "";

    document.getElementById("history").innerHTML =
        "<tr>" +
        "<th>Round</th>" +
        "<th>You</th>" +
        "<th>Computer</th>" +
        "<th>Result</th>" +
        "</tr>";

    document.getElementById("startTime").innerHTML =
        "";

    document.getElementById("playerImg").src =
        "rock.png";

    document.getElementById("computerImg").src =
        "rock.png";
}