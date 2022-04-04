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


var quizButton = document.getElementById("quiz-button");
var quizBox = document.querySelector("#quiz-container");
var timer = document.querySelector("#timer");
var countdownTimer = quizQuestions.lenth * 12;
var questionIndex = 0;


function formQuestion(){
    var questionEl = document.createElement("p");
    questionEl.textContent = quizQuestions[questionIndex].question;
    var possibleAnswers = document.createElement("ol");
    
    for (var i = 0; i < quizQuestions[questionIndex].answers.length; i++){
        var currentAnswer = document.createElement("li");
        currentAnswer.textContent =quizQuestions[questionIndex].correctAnswer[i];
        possibleAnswers.append(currentAnswer);
    }
    quizBox.append(questionEl);
    quizBox.append(possibleAnswers);
    

}
function answerCheck(event) {
    var currentAnswer = event.target.textContent;
    // console.log(currentAnswer);
    if (currentAnswer === quizQuestions[questionIndex].correctAnswer){
        var rightAnswer = document.createElement("p");
        rightAnswer.textContent = "You are right";
        timer.append(rightAnswer);

    }
    currentQuestion++;
}
    
function beginQuiz(){
    formQuestion();
    timer.textContent = countdownTimer;
}




quizButton.addEventListener("click", beginQuiz);
quizBox.addEventListener("click", answerCheck);