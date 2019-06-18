class Question {

    constructor(question, answer, dummyAnswers) {
        this.question = question;
        this.answer = answer;
        this.dummyAnswers = dummyAnswers;

        console.log('Inside of constructor');
        console.log(question)
        console.log(answer)
        console.log(dummyAnswers)
    }

    printQuestion = function() {
        console.log(this.question)
    }

    getQuestion = function() {

        console.log(this.dummyAnswers);
        var displayedQuestion = this.question + '\n' +
            '<p>A) ' + this.dummyAnswers[0] +
            '</p><p>B) ' + this.dummyAnswers[1] +
            '</p><p>C) ' + this.dummyAnswers[2] + "</p>";

        return displayedQuestion;
    }
}