var newHighScores = document.querySelector("#highscore");
var scoreBox = document.querySelector("#quiz-box");
var clear = document.querySelector("#clear");

var createHighscore = window.localStorage.getItem("Score");
var displayHighscore = document.createElement("h3");
            displayHighscore.textContent = "Your High Score is: "+ createHighscore
            scoreBox.append(displayHighscore);

    // var createHighscore = document.createElement("h3");
    // createHighscore.textContent = Object.initials + Object.score
    // newHighScores.append(createHighscore);

    clear.addEventListener("click", function(){
        document.getElementById("quiz-box").innerHTML = "";
    });
    