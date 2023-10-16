const timerEl = document.querySelector("#timerValue");
var startingEl = document.querySelector(".begText");
const startBtnEl = document.querySelector(".button");
const buttonDivEl = document.querySelector(".buttonDiv");
var mainEl = document.querySelector(".main");
var questionsEl = document.querySelector("#questions");
var answersEl = document.querySelector("#answers");
var scoreEl = document.querySelector("#scoreCountValue");
questionsEl.style.display = "none";

var questions = [
    {
        question: "Which coding language is used for the basic struture of most websites?",
        answers: [
            { text: "HTML", correct: true },
            { text: "CSS", correct: false },
            { text: "JavaScript", correct: false },
            { text: "French", correct: false },
        ]
    },
    {
        question: "Which coding language is largely responsible for giving webpages an appealing look?",
        answers: [
            { text: "HTML", correct: false },
            { text: "CSS", correct: true },
            { text: "JavaScript", correct: false },
            { text: "Dothraki", correct: false },
        ]
    },
    {
        question: "Which coding language creates interactivity and specific behaviors to applications?",
        answers: [
            { text: "HTML", correct: false },
            { text: "CSS", correct: false },
            { text: "JavaScript", correct: true },
            { text: "Simlish", correct: false },
        ]
    },
    {
        question: "What is the action of executing a command over and over?",
        answers: [
            { text: "Boolean", correct: false },
            { text: "Loop", correct: true },
            { text: "Anchor Tag", correct: false },
            { text: "Money Laundering", correct: false },
        ]
    },
    {
        question: "What is a placeholder for a piece of information that CAN change?",
        answers: [
            { text: "Constant", correct: false },
            { text: "CSS", correct: false },
            { text: "The inevitable takeover of AI technology", correct: false },
            { text: "Variable", correct: true },
        ]
    },
    {
        question: "An error in programing that prevents the program for running as expected",
        answers: [
            { text: "Bug", correct: true },
            { text: "The Univeres just having it out for you", correct: false },
            { text: "Function", correct: false },
            { text: "Algorithm", correct: false },
        ]
    },
    {
        question: "What is an instruction for the computer?",
        answers: [
            { text: "Yelling 'Alexa!'", correct: false },
            { text: "Code", correct: false },
            { text: "Command", correct: true },
            { text: "Function", correct: false },
        ]
    },
    {
        question: "What does URL stand for?",
        answers: [
            { text: "University Resource Lounge", correct: false },
            { text: "Uniform Resource Locator", correct: true },
            { text: "Underworld Representative Line", correct: false },
            { text: "Unique Rash Location", correct: false },
        ]
    },
    {
        question: "What can be used instead of the GUI to navigate through the computer's directories and files?",
        answers: [
            { text: "Chrome", correct: false },
            { text: "Prayer", correct: false },
            { text: "VS Code", correct: false },
            { text: "Command Line", correct: true },
        ]
    },
    {
        question: "What is the combination of symbols that are considered to be the correct structure for a coding language?",
        answers: [
            { text: "HTML", correct: false },
            { text: "Function", correct: false },
            { text: "Syntax", correct: true },
            { text: "Semicolons. Semicolons everywhere.", correct: false },
        ]
    }
]

let quizQuestionIndex = 0;
var timeLeft = 40;
let score = 0;


startBtnEl.addEventListener("click", function () {
    startingEl.remove();
    mainEl.remove();
    questionsEl.style.display = "block";
    quizStart(quizQuestionIndex);
    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + ' seconds left';
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + ' second left';
            timeLeft--;
        } else if (timeLeft === 0) {
            timerEl.textContent = 'Times Up!'
            timeLeft--;
        } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            endQuiz();
        }
    }, 1000);
})

function quizStart(quizQuestionIndex) {
    let quizQuestion = questions[quizQuestionIndex];
    let questionNumber = quizQuestionIndex + 1;
    questionsEl.innerHTML = questionNumber + ". " + quizQuestion.question;

    quizQuestion.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerHTML = answer.text;
        button.setAttribute("data-correct", answer.correct);
        button.classList.add("button");
        answersEl.appendChild(button);
    })

}

answersEl.addEventListener("click", function(e) {
    var correctAnswers = (e.target.getAttribute("data-correct"));

    if (quizQuestionIndex < questions.length -1) {
        quizQuestionIndex = quizQuestionIndex + 1
    } else if (quizQuestionIndex >= questions.length -1) {
        return endQuiz();
    }

    if (correctAnswers === "true") {
        answersEl.textContent = "Correct!";
    } else if (correctAnswers === null) {
        return;
    } else {
        answersEl.textContent = "Incorrect!";
        timeLeft = timeLeft - 5;
    }
    quizStart(quizQuestionIndex);
})

function endQuiz() {
    location.replace("./scores.html");
}