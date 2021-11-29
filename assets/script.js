//questions for assessment
const questions = [
    {
        question: "What is the correct syntax to close the <title> element?",
        options: ["A: <?title>", "B: <!title>", "C: </title>", "D: <title>"],
        answer: "C: </title>"
    },
    {
        question: "What are the git commands for pushing files to github to MAIN?",
        options: ["A: git pull origin develop", "B: git push origin main", "C: git push origin develop", "D: git merge main"],
        answer: "B: git push origin main"
    },
    {
        question: "What is the purpose of the alt attribute for images?",
        options: ["A: To make the image load faster", "B: To make it easier to style the image with CSS", "C: To prevent search engines from indexing the image", "D: To provide context for the image"],
        answer: "D: To provide context for the image"
    },
    {
        question: "Which of the following is NOT a good reason for version control?",
        options: ["A: Version control allows the codebase to be modified and tested without interrupting the user experience", "B: Version control allows changes to the codebase to be tested individually", "C: Version control allows teams to work on individual features synchronously", "D: Version control allows features to ship directly to the main branch"],
        answer: "D: Version control allows features to ship directly to the main branch"
    },
    {
        question: "Which statement correctly stores data into the Web Storage API?",
        options: ["A: localStorage.getItem('lunch', 'sandwich');", "B: localStorage.setItem('lunch', 'sandwich');", "C: getItem.localStorage.('lunch', 'sandwich');", "D: setItem.localStorage('lunch', 'sandwich');" ],
        answer: "B: localStorage.setItem('lunch', 'sandwich');"
    },
    {
        question: "Which statement does NOT guarantee that number will be non-negative?",
        options: ["A: number = Math.max(1, highScore);", "B: if (number < 0) {number = 1;}", "C: number = Math.random();", "D: number = Math.min(10, highScore);"],
        answer: "D: number = Math.min(10, highScore);"
    },
    {
        question: "How do we use JavaScript to get the information entered into a form’s input field?",
        options: ["A: We can select the form’s input element and use the value property to read its data", "B: We can select the form itself and use the value property to read all of its data", "C: We can select the form’s input element and use the textContent or innerHTML properties to read its data", "D: None of the above"],
        answer: "A: We can select the form’s input element and use the value property to read its data"
    },
    {
        question: "What does the $() function allow you to do?",
        options: ["A: Push DOM elements into an array", "B: Add a class to an element on the page", "C: Create an element that can later be appended to the page", "D: All of the above"],
        answer: "C: Create an element that can later be appended to the page"
    },
    {
        question: "What is the purpose of the blur Javasript event in JQuery?",
        options: ["A: Blurs an image when clicked on", "B: Blurs an image when hovered over", "C: Prompts event when specified element loses focus", "D: Prompts event when specified element is focused on"],
        answer: "C: Prompts event when specified element loses focus"
    },
    {
        question: "Which of the following CANNOT be accomplished using Bootstrap utility classes?",
        options: ["A: Drag-and-drop functionality", "B: Image replacement", "C: Border changing", "D: Display an element on screen readers only"],
        answer: "A: Drag-and-drop functionality"
    },
];

//references to elements in DOM
var timer = document.getElementById("timer");
var timeRemains = document.getElementById("timeRemains");
var timesUp = document.getElementById("timesUp");

var assessment = document.getElementById("assessment");
var begin = document.getElementById("begin");
var beginBtn = document.getElementById("beginBtn");

var questionsTemplate = document.getElementById("questionsTemplate");
var questionsUsed = document.getElementById("questions");
var optionA = document.getElementById("btn0");
var optionB = document.getElementById("btn1");
var optionC = document.getElementById("btn2");
var optionD = document.getElementById("btn3");
var answerShow = document.getElementById("answerShow");

var scores = document.getElementById("scores");
var initialsInput = document.getElementById("initialsInput");
var submitInitialsBtn = document.getElementById("submitInitialsBtn");

var highScoreSection = document.getElementById("highScoreSection");
var finalScore = document.getElementById("finalScore");

var viewHighScores = document.getElementById("viewHighScores");
var listOfHighScores = document.getElementById("listOfHighScores");
var goBackBtn = document.getElementById("goBackBtn");
var clearHighScoresBtn = document.getElementById("clearHighScoresBtn");

//variables not on DOM
var questionNum = 0;
var correctAns = 0;
var questionInv = 0;
var scoreResults;

//making beginning screen only display intro
timesUp.style.display = "none"
questionsTemplate.style.display = "none";
timer.style.display = "block";
scores.style.display = "none"
highScoreSection.style.display = "none"

//timer starts countdown when assessment begins
var totalTime = 181;

function startAssessment() {
    questionInv = 0;
    totalTime = 180;
    timeRemains.textContent = totalTime;
    initialsInput.textContent = "";

    questionsTemplate.style.display = "block";
    begin.style.display = "none";
    timer.style.display = "block";

    var startTimer = setInterval(function() {
        totalTime--;
        timeRemains.textContent = totalTime;
        if (totalTime <= 0) {
            clearInterval(startTimer);
            if (questionInv < questions.length - 1) {
                gameOver();
            }
        }
    },1000);

    showAssessment();
};


//questions and options
function showAssessment() {
    nextQuestion();
};

function nextQuestion() {
    questionsUsed.textContent = questions[questionInv].question;
    optionA.textContent = questions[questionInv].options[0];
    optionB.textContent = questions[questionInv].options[1];
    optionC.textContent = questions[questionInv].options[2];
    optionD.textContent = questions[questionInv].options[3];
};

//answers
function answerVerify(answer) {
    var linebreak = document.getElementById("linebreak");
    linebreak
    answerShow.style.display = "block";

    if (questions[questionInv].answer === questions[questionInv].options[answer]) {
        //correct answers adds 1 point to score
        correctAns++;
        answerShow.textContent = "Correct!";
    } else {
        //incorrect answers subtracts 10 secs from timer
        totalTime -= 10;
        timeRemains.textContent = totalTime;
        answerShow.textContent = "Incorrect! The correct answer is: " + questions[questionInv].answer;
    }

    questionInv++;
    //same for other questions
    if (questionInv < questions.length) {
        nextQuestion();
    } else {
        //if no more questions, game over
        gameOver();
    }
};

function pickA() { answerVerify(0); };

function pickB() { answerVerify(1); };

function pickC() { answerVerify(2); };

function pickD() { answerVerify(3); };

//if timers reaches 0, game over
function gameOver() {
    finalScore.style.display = "block";
    questionsTemplate.style.display = "none";
    timer.style.display = "none";
    timesUp.style.display = "block";
    scores.style.display = "block";
    answerShow.style.display = "none";

    //show final results
    finalScore.textContent = correctAns;
};

//input initials while storing score in localStorage
function saveHighScores() {

    scores.style.display = "block";
    //stops function if initials is left black
    if (initialsInput.value === "") {
        alert("Please enter your initials!");
        return;
    }

    begin.style.display = "none";
    timer.style.display = "none";
    timesUp.style.display = "none";
    scores.style.display = "none";
    highScoreSection.style.display = "block";

    //stores scores in localStorage
    var storedHighScores = localStorage.getItem("high scores");
    var scoresList;

    if (storedHighScores === null) {
        scoresList = []
    } else {
        scoresList = JSON.parse(storedHighScores)
    }

    var playerScore = {
        initials: initialsInput.value,
        score: finalScore.textContent
    };

    console.log(playerScore);
    scoresList.push(playerScore);

    //making the objects into stringified arrays in localStorage
    var scoresObjArray = JSON.stringify(scoresList);
    window.localStorage.setItem("high scores", scoresObjArray);

    displayHighScores();
};

//shows high scores
var i = 0
function displayHighScores() {
    begin.style.display = "none";
    timer.style.display = "none";
    questionsTemplate.style.display = "none";
    timesUp.style.display = "none";
    finalScore.style.display = "block";
    highScoreSection.style.display = "block";

    var storedHighScores = localStorage.getItem("high scores");

    if (storedHighScores === null) {
        return;
    }
    console.log(storedHighScores);

    var savedHighScores = JSON.parse(storedHighScores);

    for (; i < savedHighScores.length; i++) {
        var multipleHighScores = document.createElement("p");
        multipleHighScores.innerHTML = savedHighScores[i].initials + ": " + savedHighScores[i].score;
        listOfHighScores.appendChild(multipleHighScores);
    }
};

//Event listeners
beginBtn.addEventListener("click", startAssessment);
optionA.addEventListener("click", pickA);
optionB.addEventListener("click", pickB);
optionC.addEventListener("click", pickC);
optionD.addEventListener("click", pickD);

submitInitialsBtn.addEventListener("click", function() {
    scores.style.display = "none";
    saveHighScores();
});

viewHighScores.addEventListener("click", function(event) {
    displayHighScores(event);
});

goBackBtn.addEventListener("click", function() {
    begin.style.display = "block";
    scores.style.display = "none";
    highScoreSection.style.display = "none";
});

clearHighScoresBtn.addEventListener("click", function() {
    window.localStorage.removeItem("high scores");
    listOfHighScores.innerHTML = "";
    // listOfHighScores.setAttribute("style", "font-family: 'Helvetica', sans-serif; font-style: italic;")
});