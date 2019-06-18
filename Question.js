/*
This class represents a question that the user will be asked
*/
class Question {

    constructor(question, answer, dummyAnswers) {
        this.question = question;
        this.answer = answer;
        this.dummyAnswers = dummyAnswers;

        //Creating an array in which the potential answers will be added 
        this.answersLists = [];

        //Adding them to the array
        this.answersLists.push(this.answer);
        this.answersLists.push(this.dummyAnswers[0]);
        this.answersLists.push(this.dummyAnswers[1]);
        this.answersLists.push(this.dummyAnswers[2]);

        //Shuffle the order that answers will be everytimes
        this.shuffleAnswers(this.answersLists)
    }

    getQuestion = function() {
        var displayedQuestion = this.question + '\n' +
            '<p>A) ' + this.answersLists[0] +
            '</p><p>B) ' + this.answersLists[1] +
            '</p><p>C) ' + this.answersLists[2] +
            '</p><p>D) ' + this.answersLists[3] + '</p>';

        return displayedQuestion;
    }

    shuffleAnswers(arrayToShuffle) {

        //Shuffling the array
        for (let i = arrayToShuffle.length - 1; i > 0; i--) {
            //Getting a random number to be the index
            const randomIndex = Math.floor(Math.random() * (i + 1));
            [arrayToShuffle[i], arrayToShuffle[randomIndex]] = [arrayToShuffle[randomIndex], arrayToShuffle[i]];
        }
        return arrayToShuffle;
    }
}