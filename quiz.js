let score = 0;
let currentQuestionIndex = -1;
let questionDisplay = document.getElementById("questionBox")
let questionList = [];

function readInQuestions() {
    var readInQuestions = JSON.parse(questions);

    for (i = 0; i < readInQuestions.length; ++i) {
        var question = readInQuestions[i].question;
        var answer = readInQuestions[i].answer;
        var dummyAnswers = readInQuestions[i].dummyAnswers;

        var currentlyReadInQuestion = new Question(question, answer, dummyAnswers)

        questionList.push(currentlyReadInQuestion);
    }

    console.log(questionList)
    for (i = 0; i < questionList.length; ++i) {
        questionList[i].printQuestion();
    }
}

function nextQuestion() {
    checkAnswer();
    if (checkEndOfQuiz()) {
        ++currentQuestionIndex;
        console.log("Next Question: " + currentQuestionIndex);
        updateUI();
    } else {
        console.log("end of quiz");
        endQuiz();
    }
}

function startQuiz() {
    ++currentQuestionIndex;
    updateUI();
}

function updateUI() {
    if (questionList[currentQuestionIndex] != null) {
        questionDisplay.innerHTML = questionList[currentQuestionIndex].getQuestion();
    }
}

function checkEndOfQuiz() {
    return (currentQuestionIndex < questionList.length - 1)
}

function endQuiz() {
    // document.location.href = "result.html";

    var myNode = document.getElementById("content");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }

    document.getElementById("title").innerHTML = "<h3>RESULTS</h3>"
    document.getElementById("content").innerHTML = '<div class = "result">Your score was ' + score + ' </div>' +
        '<button ><a href = "index.html">Main Menu</a></button>';
}

function checkAnswer() {
    var currentQuestion = questionList[currentQuestionIndex];

    if (currentQuestion.answer == currentQuestion.answersLists[userAnswer]) {
        console.log("Correct!");
        ++score;
    }
}
readInQuestions();
startQuiz();