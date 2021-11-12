var questionContainerEl= document.getElementById("question-container")
questionContainerEl.style.display="none"

var questionEl = document.getElementById("question")

var answer1El = document.getElementById("answer-1")
var answer2El = document.getElementById("answer-2")
var answer3El = document.getElementById("answer-3")
var answer4El = document.getElementById("answer-4")

answer1El.addEventListener.on("click", checkAnswer)
answer2El.addEventListener.on("click", checkAnswer)
answer3El.addEventListener.on("click", checkAnswer)
answer4El.addEventListener.on("click", checkAnswer)

document.getElementById("start").addEventListener("click", function () {
    var timeleft = 76;
    var downloadTimer = setInterval(function () {
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
    // create container to hold questions and answers
    // var questionContainerEl = document.createElement("div");
    // questionContainerEl.className = "container";

    // // create question 
    // var myQuestionsEl = document.createElement("question");
    // myQuestionsEl.className = "question";
    // questionContainerEl.appendChild(myQuestionsEl);


    // // create answer button
    // var answerButtonEl = document.createElement("button");
    // answerButtonEl.className = "answer";
    // questionContainerEl.appendChild(answerButtonEl);
questionEl.textContent = myQuestions[Qno].question
answer1El.textContent = myQuestions[Qno].answer.option1
answer2El.textContent = myQuestions[Qno].answer.option2
answer3El.textContent = myQuestions[Qno].answer.option3
answer4El.textContent = myQuestions[Qno].answer.option4
answer5El.textContent = myQuestions[Qno].answer.option5
};


document.getElementById("start").addEventListener("click",
    function checkAnswer(questionIndex) {
        var myQuestions = document.getElementById("answers");


        myQuestions.addEventListener("click", function (event) {
            if (event.target.hasAttribute("answer")) {
                event.preventDefault;
                if (answer == myQuestions[questionIndex].correctAnswer) {
                    score = timeleft;
                    console.log(score)

                }
                else if (answer = myQuestions[questionIndex].correctAnswer) {
                    timeleft = timeleft - 10;
                    console.log(score)

                }
            }

        });
    })
    document.getElementById("result").addEventListener("click"),
    function showScores() {
        
    }







