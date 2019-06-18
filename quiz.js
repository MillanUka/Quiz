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

    ++currentQuestionIndex;
    console.log("Next Question: " + currentQuestionIndex);
    updateUI();
}

function startQuiz() {
    nextQuestion();
}

function updateUI() {
    questionDisplay.innerHTML = questionList[currentQuestionIndex].getQuestion();
}

readInQuestions();
startQuiz();