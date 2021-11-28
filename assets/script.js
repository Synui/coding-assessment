//questions for assessment
const question = [
    {
        question: "What is the correct syntax to close the <title> element?",
        choices: ["A: <?title>", "B: <!title>", "C: </title>", "D: <title>"],
        answer: "C: </title>"
    },
    {
        question: "What are the git commands for pushing files to github to MAIN?",
        choices: ["A: git pull origin develop", "B: git push origin main", "C: git push origin develop", "D: git merge main"],
        answer: "B: git push origin main"
    },
    {
        question: "What is the purpose of the alt attribute for images?",
        choices: ["A: To make the image load faster", "B: To make it easier to style the image with CSS", "C: To prevent search engines from indexing the image", "D: To provide context for the image"],
        answer: "D: To provide context for the image"
    },
    {
        question: "Which of the following is NOT a good reason for version control?",
        choices: ["A: Version control allows the codebase to be modified and tested without interrupting the user experience", "B: Version control allows changes to the codebase to be tested individually", "C: Version control allows teams to work on individual features synchronously", "D: Version control allows features to ship directly to the main branch"],
        answer: "D: Version control allows features to ship directly to the main branch"
    },
    {
        question: "Which statement correctly stores data into the Web Storage API?",
        choices: ["A: localStorage.getItem('lunch', 'sandwich');", "B: localStorage.setItem('lunch', 'sandwich');", "C: getItem.localStorage.('lunch", "sandwich');", "D: setItem.localStorage('lunch', 'sandwich');" ],
        answer: "B: localStorage.setItem('lunch', 'sandwich');"
    },
    {
        question: "Which statement does NOT guarantee that number will be non-negative?",
        choices: ["A: number = Math.max(1, highScore);", "B: if (number < 0) {number = 1;}", "C: number = Math.random();", "D: number = Math.min(10, highScore);"],
        answer: "D: number = Math.min(10, highScore);"
    },
    {
        question: "How do we use JavaScript to get the information entered into a form’s input field?",
        choices: ["A: We can select the form’s input element and use the value property to read its data", "B: We can select the form itself and use the value property to read all of its data", "C: We can select the form’s input element and use the textContent or innerHTML properties to read its data", "D: None of the above"],
        answer: "A: We can select the form’s input element and use the value property to read its data"
    },
    {
        question: "What does the $() function allow you to do?",
        choices: ["A: Push DOM elements into an array", "B: Add a class to an element on the page", "C: Create an element that can later be appended to the page", "D: All of the above"],
        answer: "C: Create an element that can later be appended to the page"
    },
    {
        question: "What is the purpose of the blur Javasript event in JQuery?",
        choices: ["A: Blurs an image when clicked on", "B: Blurs an image when hovered over", "C: Prompts event when specified element loses focus", "D: Prompts event when specified element is focused on"],
        answer: "C: Prompts event when specified element loses focus"
    },
    {
        question: "Which of the following CANNOT be accomplished using Bootstrap utility classes?",
        choices: ["A: Drag-and-drop functionality", "B: Image replacement", "C: Border changing", "D: Display an element on screen readers only"],
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
var questions = document.getElementById("questions");
var optionA = document.getElementById("btn0");
var optionB = document.getElementById("btn1");
var optionC = document.getElementById("btn2");
var optionD = document.getElementById("btn3");
var answerShow = document.getElementById("answerShow");

var scores = document.getElementById("scores");
var initialsInput = document.getElementById("intialsInput");
var submitInitialsBtn = document.getElementById("submitInitialsBtn");

var highScoreSection = document.getElementById("highScoreSection");
var finalScore = document.getElementById("finalScore");

var highScoreSection = document.getElementById("highScoreSection");
var listOfHighScores = document.getElementById("listOfHighScores");
var goBackBtn = document.getElementById("goBackBtn");
var clearHighScoresBtn = document.getElementById("clearHighScoresBtn");

//variables not on DOM
var questionNum = 0;
var correctAns = 0;
var questionInv = 0;
var scoreResults;

//timer starts countdown when assessment begins
var totalTime = 181;
function startAssessment() {
    questionInv = 0;
    totalTime = 180;
    timeRemains.textContent = totalTime
    initialsInput.textContent = "";

    begin.style.display = "none";
    questionsTemplate.style.display = "block";
    timer.style.display = "block";
    timesUp.style.display = "none";

    var startTimer = setInterval(function() {
        totalTime--;
        timeRemains.textContent = totalTime;
        if(totalTime <= 0) {
            clearInterval(startTimer);
            if (questionInv < question.length -1) {
                gameOver();
            }
        }
    },1000);

    showAssessment();
};

