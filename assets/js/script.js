
var questionContainerEl = document.getElementById("question-container")
questionContainerEl.style.display = "none"

var questionEl = document.getElementById("question")

var answer1El = document.getElementById("answer-1")
var answer2El = document.getElementById("answer-2")
var answer3El = document.getElementById("answer-3")
var answer4El = document.getElementById("answer-4")

answer1El.addEventListener("click", checkAnswer)
answer2El.addEventListener("click", checkAnswer)
answer3El.addEventListener("click", checkAnswer)
answer4El.addEventListener("click", checkAnswer)
var timeleft = 76;

var introEl = document.getElementById("intro")
var scoreEl = document.getElementById("score")
var checkAnswerEl = document.getElementById("check-answer")
var resultEl = document.getElementById("result")
resultEl.style.display = "none"

var textInput = document.getElementById("name")
var historyEl = document.getElementById("history")
historyEl.style.display = "none"


document.getElementById("start").addEventListener("click", function() {
    questionContainerEl.style.display = "block"
    introEl.style.display = "none"
    // resultEl.style.display = "none"
    renderQuestions()

    var downloadTimer = setInterval(function() {
        timeleft--;
        document.getElementById("time-running").textContent = timeleft;
        if (timeleft <= 0)
            clearInterval(downloadTimer);
    }, 1000);
})
var Qno = 0
var myQuestions = [
    {
        question: "Commonly used data types DO not Include:",
        answer: {
            option1: 'strings',
            option2: 'booleans',
            option3: 'alert',
            option4: 'numbers'
        },
        correctAnswer: '3'
    },
    {
        question: "The condition in an if/else statement is enclose with ____.",
        answer: {
            option1: 'quotes',
            option2: 'curly brackets',
            option3: 'parenthesis',
            option4: 'square brackers'
        },
        correctAnswer: '3'
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        answer: {
            option1: 'numbers and strings',
            option2: 'other arrays',
            option3: 'booleans',
            option4: 'all of the above'
        },
        correctAnswer: '4'
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        answer: {
            option1: 'commas',
            option2: 'curly brackets',
            option3: 'quotes',
            option4: 'parenthesis'
        },
        correctAnswer: '3'
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answer: {
            option1: 'JavaScript',
            option2: 'terminal/bash',
            option3: 'for loops',
            option4: 'console.log'
        },
        correctAnswer: '4'
    },
];

function renderQuestions() {
    questionEl.textContent = myQuestions[Qno].question
    answer1El.textContent = myQuestions[Qno].answer.option1
    answer2El.textContent = myQuestions[Qno].answer.option2
    answer3El.textContent = myQuestions[Qno].answer.option3
    answer4El.textContent = myQuestions[Qno].answer.option4
};

function checkAnswer(event) {
    event.preventDefault();

    var userAnswer = this.getAttribute("data-value")

    if (userAnswer == myQuestions[Qno].correctAnswer) {
        score = timeleft;
        console.log(score)
        checkAnswerEl.textContent = 'Correct'

    }
    else {
        timeleft = timeleft - 10
        score = timeleft
        console.log(score)
        checkAnswerEl.textContent = 'Incorrect'

    }
    // scoreEl.textContent = score
    if (Qno < myQuestions.length - 1) {
        Qno++
        renderQuestions()

    } else {
        saveUser()
        // saveScore()
    }
}
function saveUser() {
    questionContainerEl.style.display = "none"
    document.getElementById("time-running").textContent = timeleft
    if (timeleft >= 0) {
        scoreEl.style.display = "compact"
        scoreEl.textContent = ('Your final score is ' + score + ' points')
        resultEl.style.display = "block"
    }

    else
        scoreEl.textContent = ('Your final score is ' + score + ' points')
    resultEl.style.display = "block";
}

var nameBtn = document.querySelector("#name-btn");
var nameEl = document.querySelector("#name")

var getUserName = function (event) {
    event.preventDefault();
    var textInput = document.querySelector("input[name='name']");
    console.dir(textInput);
    if (!textInput) {
        alert("You need to enter your name!")
        return false;
    }
};

var saveScore = function () {
    var textInput = document.querySelector("input[name='name']");
    console.log(textInput)
    const user = {
        name: [textInput.value],
        score: [timeleft],
    }
    localStorage.setItem("name", JSON.stringify(user));
    console.log('calling saveScore')
    console.log(textInput.value)
}



nameBtn.addEventListener("click", function highScores() {

    resultEl.style.display = "none"
    historyEl.style.display = "inline"
    var nameList = document.getElementById("#name-list")
 nameList.textContent = (textInput.value + score)
saveScore();

})
var highScores =document.querySelector("#high-score")
highScores.addEventListener("click",function(loadScores) {
    var saveScore = loadScores.getItem("user");
    saveScore = JSON.parse(saveScore);

})

var backBtn= document.querySelector("#back-btn")
backBtn.addEventListener("click",function (){
    reset();
})

var clearBtn= document.querySelector("#clear-btn")
clearBtn.addEventListener("click",function(){
    localStorage.clear()
    console.log("Clear history")
})
















