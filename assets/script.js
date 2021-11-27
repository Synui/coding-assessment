//questions for assessment
const questions = [
    {
        question: "What is the correct syntax to close the <title> element?",
        choices: ["<?title>", "<!title>", "</title>", "<title>"],
        answer: "</title>"
    },
    {
        question: "What are the git commands for pushing files to github to MAIN?",
        choices: ["git pull origin develop", "git push origin main", "git push origin develop", "git merge main"],
        answer: "git push origin main"
    },
    {
        question: "What is the purpose of the alt attribute for images?",
        choices: ["To make the image load faster", "To make it easier to style the image with CSS", "To prevent search engines from indexing the image", "To provide context for the image"],
        answer: "To provide context for the image"
    },
    {
        question: "Which of the following is NOT a good reason for version control?",
        choices: ["Version control allows the codebase to be modified and tested without interrupting the user experience", "Version control allows changes to the codebase to be tested individually", "Version control allows teams to work on individual features synchronously", "Version control allows features to ship directly to the main branch"],
        answer: "Version control allows features to ship directly to the main branch"
    },
    {
        question: "Which statement correctly stores data into the Web Storage API?",
        choices: ["localStorage.getItem('lunch', 'sandwich');", "localStorage.setItem('lunch', 'sandwich');", "getItem.localStorage.('lunch", "sandwich');", "setItem.localStorage('lunch', 'sandwich');" ],
        answer: "localStorage.setItem('lunch', 'sandwich');"
    },
    {
        question: "Which statement does NOT guarantee that number will be non-negative?",
        choices: ["number = Math.max(1, highScore);", "if (number < 0) {number = 1;}", "number = Math.random();", "number = Math.min(10, highScore);"],
        answer: "number = Math.min(10, highScore);"
    },
    {
        question: "How do we use JavaScript to get the information entered into a form’s input field?",
        choices: ["We can select the form’s input element and use the value property to read its data", "We can select the form itself and use the value property to read all of its data", "We can select the form’s input element and use the textContent or innerHTML properties to read its data", "None of the above"],
        answer: "We can select the form’s input element and use the value property to read its data"
    },
    {
        question: "What does the $() function allow you to do?",
        choices: ["Push DOM elements into an array", "Add a class to an element on the page", "Create an element that can later be appended to the page", "All of the above"],
        answer: "Create an element that can later be appended to the page"
    },
    {
        question: "What is the purpose of the blur Javasript event in JQuery?",
        choices: ["Blurs an image when clicked on", "Blurs an image when hovered over", "Prompts event when specified element loses focus", "Prompts event when specified element is focused on"],
        answer: "Prompts event when specified element loses focus"
    },
    {
        question: "Which of the following CANNOT be accomplished using Bootstrap utility classes?",
        choices: ["Drag-and-drop functionality", "Image replacement", "Border changing", "Display an element on screen readers only"],
        answer: "Drag-and-drop functionality"
    },
];

//references to elements in DOM
var timer = document.getElementById("timer");
var timeRemains = document.getElementById("timeRemains");
var timesUp = document.getElementById("timesUp");

var begin = document.getElementById("begin");
var beginBtn = document.getElementById("beginBtn");

var 