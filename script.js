const questions = [
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        answers: [
            {text: 'var', correct: true},
            {text: 'int', correct: false},
            {text: 'string', correct: false},
            {text: 'declare', correct: false},
        ]
    },
    {
        question: "What is the purpose of the console.log() function in JavaScript?",
        answers: [
            {text: 'Display a message box', correct: false},
            {text: 'Print output to the console', correct: true},
            {text: 'Write to a file', correct: false},
            {text: 'Create a new variable', correct: false},
        ]
    },
    {
        question: "What does the NaN stand for in JavaScript?",
        answers: [
            {text: 'Not a Number', correct: true},
            {text: 'No and Not', correct: false},
            {text: 'Null and NaN', correct: false},
            {text: 'Negative and Null', correct: false},
        ]
    },
    {
        question: "How do you declare a constant variable in JavaScript?",
        answers: [
            {text: 'const', correct: true},
            {text: 'let', correct: false},
            {text: 'var', correct: false},
            {text: 'constant', correct: false},
        ]
    },
    {
        question: "What is the correct way to write an IF statement in JavaScript?",
        answers: [
            {text: 'if i = 5 then', correct: false},
            {text: 'if (i == 5)', correct: true},
            {text: 'if i == 5', correct: false},
            {text: 'i = 5;', correct: false},
        ]
    },
    {
        question: "Which of the following is a correct way to comment in JavaScript?",
        answers: [
            {text: '// This is a comment', correct: true},
            {text: '/* This is a comment */', correct: false},
            {text: '# This is a comment', correct: false},
            {text: '-- This is a comment', correct: false},
        ]
    },
    {
        question: "What does the 'typeof' operator in JavaScript return for an array?",
        answers: [
            {text: 'array', correct: false},
            {text: 'object', correct: true},
            {text: 'string', correct: false},
            {text: 'number', correct: false},
        ]
    },
    {
        question: "What is the purpose of the 'addEventListener' method in JavaScript?",
        answers: [
            {text: 'Adds a new element to the DOM', correct: false},
            {text: 'Listens for a specified event on an element', correct: true},
            {text: 'Adds a class to an element', correct: false},
            {text: 'Creates a new event in JavaScript', correct: false},
        ]
    },
    {
        question: "How do you check if a variable is null in JavaScript?",
        answers: [
            {text: 'if (myVar === null)', correct: false},
            {text: 'if (myVar == null)', correct: true},
            {text: 'if (myVar === undefined)', correct: false},
            {text: 'if (myVar == undefined)', correct: false},
        ]
    },
    {
        question: "What does the JSON acronym stand for in JavaScript?",
        answers: [
            {text: 'JavaScript Object Notation', correct: true},
            {text: 'JavaScript Ordered Networt', correct: false},
            {text: 'Java Standard Object Notation', correct: false},
            {text: 'Java Syntax Object Naming', correct: false},
        ]
    },
    {
        question: "Which method is used to remove the last element from an array in JavaScript?",
        answers: [
            {text: 'pop()', correct: true},
            {text: 'shift()', correct: false},
            {text: 'slice()', correct: false},
            {text: 'remove()', correct: false},
        ]
    },
    {
        question: "How can you prevent the default behavior of an HTML form submission in JavaScript?",
        answers: [
            {text: 'event.preventDefault()', correct: true},
            {text: 'form.cancelSubmit()', correct: false},
            {text: 'stopFormSubmission()', correct: false},
            {text: 'preventDefaultSubmission()', correct: false},
        ]
    },
    {
        question: "What does the ++ operator do in JavaScript?",
        answers: [
            {text: 'Decreases the value by 1', correct: false},
            {text: 'Increases the value by 1', correct: true},
            {text: 'Doubles the value', correct: false},
            {text: 'Halves the value', correct: false},
        ]
    },
    {
        question: "How do you declare a function in JavaScript?",
        answers: [
            {text: 'function myFunction() {}', correct: false},
            {text: 'var myFunction = function() {}', correct: false},
            {text: 'const myFunction = () => {}', correct: false},
            {text: 'All of the above', correct: true},
        ]
    },
    {
        question: "What is the purpose of the splice method in JavaScript?",
        answers: [
            {text: 'Adds elements to an array', correct: false},
            {text: 'Removes elements from an array', correct: true},
            {text: 'Sorts the elements of an array', correct: false},
            {text: 'Reverses the elements of an array', correct: false},
        ]
    },
    {
        question: "Which operator is used for strict equality in JavaScript?",
        answers: [
            {text: '==', correct: false},
            {text: '===', correct: true},
            {text: '!=', correct: false},
            {text: '!==', correct: false},
        ]
    },
    {
        question: "How do you access the first element of an array in JavaScript?",
        answers: [
            {text: 'arr.first()', correct: false},
            {text: 'arr[0]', correct: true},
            {text: 'arr.getFirst()', correct: false},
            {text: 'arr.element(1)', correct: false},
        ]
    },
    {
        question: "What does the fetch function in JavaScript primarily do?",
        answers: [
            {text: 'Fetches data from a server', correct: true},
            {text: 'Fetches a local file', correct: false},
            {text: 'Fetches images from the internet', correct: false},
            {text: 'Fetches user input from a form', correct: false},
        ]
    },
    {
        question: "How do you convert a string to lowercase in JavaScript?",
        answers: [
            {text: 'str.lowerCase()', correct: true},
            {text: 'str.toLowerCase()', correct: false},
            {text: 'str.toLower()', correct: false},
            {text: 'str.caseLower()', correct: false},
        ]
    },
    {
        question: "Which of the following is a valid way to declare a variable in JavaScript?",
        answers: [
            {text: 'variable x = 10;', correct: false},
            {text: 'let x = 10;', correct: true},
            {text: 'var x: 10;', correct: false},
            {text: 'const x : 10;', correct: false},
        ]
    }
];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const timerElement = document.getElementById('timer-value');
const playAgainButton = document.getElementById('play-again-btn');

let currentQuestionIndex = 0;
let score = 0;
let timer;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('title-screen').style.display = 'none';
    document.getElementById('quiz-screen').style.display = 'block';
    nextButton.innerHTML = 'Next';
    playAgainButton.style.display = 'none';
    showQuestion();

    startTimer(60);
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        button.onclick = () => selectAnswer(index);
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
    });
}

function resetState() {
    nextButton.style.display = 'none';
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(index) {
    const selectedBtn = answerButtons.children[index];
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if (isCorrect) {
        selectedBtn.classList.add('correct');
        score++;
    } else {
        selectedBtn.classList.add('incorrect');
    }
    Array.from(answerButtons.children).forEach((button) => {
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextButton.style.display = 'block';
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.style.display = 'none';
    playAgainButton.style.display = 'block';

    clearInterval(timer);
    
}

function handleNextButton() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
        currentQuestionIndex = 0;
        score = 0;
        nextButton.style.display = 'none';
    }
}

function startTimer(seconds) {
    let time = seconds;
    timer = setInterval(() => {
        timerElement.innerHTML = time;
        time--;

        if (time < 0) {
            clearInterval(timer);
            showScore();
        }
    }, 1000);
}

function resetQuiz() {
    document.getElementById('title-screen').style.display = 'block';
    document.getElementById('quiz-screen').style.display = 'none';
    currentQuestionIndex = 0;
    score = 0;
    resetState();
    clearInterval(timer);
    timerElement.innerHTML = '0';
}
