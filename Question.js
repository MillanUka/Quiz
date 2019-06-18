class Question {

    constructor(question, answer, dummyAnswers) {
        this.question = question;
        this.answer = answer;
        this.dummyAnswers = dummyAnswers;
        this.answersLists = [];
        this.answersLists.push(this.answer);
        this.answersLists.push(this.dummyAnswers[0]);
        this.answersLists.push(this.dummyAnswers[1]);
        this.answersLists.push(this.dummyAnswers[2]);

        this.shuffle(this.answersLists)
    }

    printQuestion = function() {
        console.log(this.question)
    }

    getQuestion = function() {
        var displayedQuestion = this.question + '\n' +
            '<p>A) ' + this.answersLists[0] +
            '</p><p>B) ' + this.answersLists[1] +
            '</p><p>C) ' + this.answersLists[2] +
            '</p><p>D) ' + this.answersLists[3] + '</p>';

        return displayedQuestion;
    }

    shuffle(arrayToShuffle) {

        for (let i = arrayToShuffle.length - 1; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1));
            [arrayToShuffle[i], arrayToShuffle[randomIndex]] = [arrayToShuffle[randomIndex], arrayToShuffle[i]];
        }
        return arrayToShuffle;
    }
}