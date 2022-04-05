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
    
    
}

function startTime(){
    timerCountdown--;
    time.textContent = timerCountdown;
}

function timerZero(){
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
    localStorage.setItem("Score",timerCountdown);
}

timerZero();

quizButton.addEventListener("click", beginQuiz);
quizBox.addEventListener("click", answerCheck);