let score = 0;
let currentQuestionIndex = -1;
let questionDisplay = document.getElementById("questionBox")
let questionList = [];

function readInQuestions() {
    //Parsing in the JSON file with the questions
    var readInQuestions = JSON.parse(questions);

    //Loop goes through the enture JSON file and generates all the questions
    for (i = 0; i < readInQuestions.length; ++i) {
        var question = readInQuestions[i].question;
        var answer = readInQuestions[i].answer;
        var dummyAnswers = readInQuestions[i].dummyAnswers;

        var currentlyReadInQuestion = new Question(question, answer, dummyAnswers)

        questionList.push(currentlyReadInQuestion);
    }
}

function nextQuestion() {
    //CHecking if the user is correct
    checkAnswer();
    //Checking whether or not to end the quiz
    if (checkEndOfQuiz()) {
        //Going to the next question
        ++currentQuestionIndex;
        updateUI();
    } else {
        endQuiz();
    }
}

function startQuiz() {
    //Add one as the starting index is -1
    ++currentQuestionIndex;
    updateUI();
}

function updateUI() {
    questionDisplay.innerHTML = questionList[currentQuestionIndex].getQuestion();
}

function checkEndOfQuiz() {
    //Return whether or not if this is the last question in the quiz
    return (currentQuestionIndex < questionList.length - 1)
}

function endQuiz() {
    //Removing all the content so the results can be displayed
    var contentNode = document.getElementById("content");
    while (contentNode.firstChild) {
        contentNode.removeChild(contentNode.firstChild);
    }

    //Adding a title saying RESULTS rather than QUIZ
    document.getElementById("title").innerHTML = "<h3>RESULTS</h3>";

    //Replacing the quiz content with the score and a button that links back to the main menu
    document.getElementById("content").innerHTML = '<div class = "result">Your score was <b>' + score + '</b> </div>' +
        '<button ><a href = "index.html">Main Menu</a></button>';
}

function checkAnswer() {
    var currentQuestion = questionList[currentQuestionIndex];

    if (currentQuestion.answer == currentQuestion.answersLists[userAnswer]) {
        ++score;
    }
}

readInQuestions();
startQuiz();