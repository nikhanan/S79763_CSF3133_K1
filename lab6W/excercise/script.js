// Questions Array
const questions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "Home Tool Markup Language",
            "Hyperlink Text Language",
            "Hyper Transfer Markup Language"
        ],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Which tag is used to create a hyperlink?",
        options: ["<a>", "<link>", "<href>", "<url>"],
        answer: "<a>"
    },
    {
        question: "Which tag is used for the largest heading?",
        options: ["<h6>", "<h4>", "<h1>", "<head>"],
        answer: "<h1>"
    },
    {
        question: "Which tag is used to insert an image?",
        options: ["<img>", "<image>", "<pic>", "<src>"],
        answer: "<img>"
    },
    {
        question: "Which attribute is used to specify a link address?",
        options: ["src", "alt", "href", "link"],
        answer: "href"
    }
];

let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 15;

// shuffleQuestions()
function shuffleQuestions() {
    questions.sort(() => Math.random() - 0.5);
}

// displayQuestion()
function displayQuestion() {

    let q = questions[currentQuestion];

    document.getElementById("question").textContent = q.question;

    let optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    q.options.forEach(option => {
        let button = document.createElement("button");

        button.textContent = option;
        button.classList.add("option");

        button.onclick = function () {
            checkAnswer(option);
        };

        optionsDiv.appendChild(button);
    });
}

// startTimer()
function startTimer() {

    clearInterval(timer);

    timeLeft = 15;

    document.getElementById("time").textContent = timeLeft;

    timer = setInterval(() => {

        timeLeft--;

        document.getElementById("time").textContent = timeLeft;

        if (timeLeft <= 0) {

            clearInterval(timer);

            document.getElementById("feedback").textContent =
                "Time's Up!";

            nextQuestion();
        }

    }, 1000);
}

// checkAnswer()
function checkAnswer(selectedOption) {

    clearInterval(timer);

    if (selectedOption === questions[currentQuestion].answer) {

        score++;

        document.getElementById("feedback").textContent =
            "Correct Answer!";

    } else {

        document.getElementById("feedback").textContent =
            "Wrong Answer!";
    }
}

// nextQuestion()
function nextQuestion() {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        displayQuestion();
        startTimer();

    } else {

        document.getElementById("question").textContent =
            "Quiz Completed!";

        document.getElementById("options").innerHTML = "";

        document.getElementById("feedback").textContent = "";

        document.getElementById("score").textContent =
            "Final Score: " + score + " / " + questions.length;

        document.getElementById("nextBtn").style.display = "none";
    }
}

// startQuiz()
function startQuiz() {

    shuffleQuestions();
    displayQuestion();
    startTimer();
}

document.getElementById("nextBtn").addEventListener("click", nextQuestion);

startQuiz();