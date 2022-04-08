var newHighScores = document.querySelector("#highscore");
var scoreBox = document.querySelector("#quiz-box");

var createHighscore = window.localStorage.getItem("Score");
var savedInitials = window.localStorage.getItem("Initials");

var displayHighscore = document.createElement("h3");
    displayHighscore.textContent = "Initials: " + savedInitials + " High Score is: "+ createHighscore
    scoreBox.append(displayHighscore);


    
    