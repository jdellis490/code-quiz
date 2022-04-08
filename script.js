var quizQuestions = [
    {
        question: "What is the element used and hidden in the code that explains things and makes the content more readable?",
        answers: ["quotations", "comments", "comparisons", "notes"],
        correctAnswer: "comments",
    },
    {
        question: "A function associated with an object is called a/an?",
        answers: ["method", "function", "link", "array"],
        correctAnswer: "method",
    },
    {
        question: "Which of these is not a logical operator?",
        answers: ["!","&&", "||", "&"],
        correctAnswer: "&",
    },
    {
        question: "To get value from user input, we use which box?",
        answers: ["confirm", "prompt", "alert", "none of the above"],
        correctAnswer: "prompt",
    },
    {
        question: "Which of the following events is used to handle the user click action?",
        answers: ["pointClick", "clicked", "onClick", "rightClick"],
        correctAnswer: "onClick",
    },
];


var quizButton = document.getElementById("quiz-btn");
var quizBox = document.querySelector("#quiz-box");
var time = document.querySelector("#time");
var timerCountdown = quizQuestions.length * 12;
var questionIndex = 0;
var timerInterval;

function endQuiz(){
    quizBox.innerHTML = "Quiz Complete!";
    scoreKeeper();
    clearInterval(timerInterval);
    $("p").empty();

    if (timerCountdown >= 0) {
        var endScore = timerCountdown;
        var createP = document.createElement("p");
        createP.textContent = "Your score is saved."

        quizBox.appendChild(createP);
    }

    
    var initials = document.createElement("label");
    initials.setAttribute("id", "initials");
    initials.textContent = "Enter initials:";

    quizBox.append(initials);

    var inputEL = document.createElement("input");
    inputEL.setAttribute("type", "text");
    inputEL.setAttribute("id", "initials");
    inputEL.textContent = "";

    quizBox.append(inputEL);
    
    var scoreSubmit = document.createElement("button");
    scoreSubmit.setAttribute("type", "submit");
    scoreSubmit.setAttribute("id", "Submit");
    scoreSubmit.textContent = "Submit";

    quizBox.append(scoreSubmit);

    scoreSubmit.addEventListener("click", function(){
        var userInitials = inputEL.value;
        var finalScores = {
                initials: userInitials,
                score: endScore,
            }
            console.log(finalScores);
            localStorage.setItem("Initials", userInitials);
            
           var createHighscore = document.createElement("h3");
            createHighscore.textContent = "Initials "+ finalScores.initials+ " " + "Score: " + finalScores.score
            quizBox.append(createHighscore);
        
        
            window.location.replace("./scores.html");
           
    });
}
  
    
    


function startTime(){
    timerCountdown--;
    time.textContent = timerCountdown;
    if (timerCountdown <= 0)
    return endQuiz();
}




function formQuestion(){
    if (questionIndex=== quizQuestions.length){
        endQuiz();
    }
    var questionEl = document.createElement("p");
    questionEl.textContent = quizQuestions[questionIndex].question;
    var possibleAnswers = document.createElement("ol");
    
    for (var i = 0; i < quizQuestions[questionIndex].answers.length; i++){
        var currentAnswer = document.createElement("li");
        currentAnswer.textContent = quizQuestions[questionIndex].answers[i];
        possibleAnswers.append(currentAnswer);
    }
    quizBox.append(questionEl);
    quizBox.append(possibleAnswers);
    

}
function answerCheck(event) {
    var currentAnswer = event.target.textContent;
    var rightAnswer = document.createElement("p");

    if (currentAnswer === quizQuestions[questionIndex].correctAnswer) {
        rightAnswer.textContent = "You are right!";
        time.append(rightAnswer);
    } else{
        rightAnswer.textContent = "Wrong!";
        timerCountdown -=5;
        time.append(rightAnswer);
    }
    quizBox.innerHTML = "";
    questionIndex++;
    formQuestion();
    
}
    
function beginQuiz(){
    quizButton.classList.add("hide");
    formQuestion();
    timerInterval = setInterval(startTime,1000);
    
}
function scoreKeeper(){
    localStorage.setItem("Score", timerCountdown);
    
}



quizButton.addEventListener("click", beginQuiz);
quizBox.addEventListener("click", answerCheck);