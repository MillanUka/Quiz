/**
 * This Script control the four buttons representing A, B, C, and D
 */

//Getting the buttons
let aButton = document.getElementById("aBUtton");
let bButton = document.getElementById("bBUtton");
let cButton = document.getElementById("cBUtton");
let dButton = document.getElementById("dBUtton");

let aClicked = false;
let bClicked = false;
let cClicked = false;
let dClicked = false;

let userAnswer;
const A = 0;
const B = 1;
const C = 2;
const D = 3;

const ORANGE_RED = "orangered";
const GREY = "grey";

//Adding an event listeners to the buttons

aButton.addEventListener('click', function() {
    //Clearing buttons 
    clearButtonStates();
    aClicked = true;
    aButton.style.backgroundColor = GREY;

    userAnswer = A;
    nextQuestion();
    clearButtonStates();
})

bButton.addEventListener('click', function() {
    clearButtonStates()
    bClicked = true;
    bButton.style.backgroundColor = GREY;

    userAnswer = B;
    nextQuestion();
    clearButtonStates();
})

cButton.addEventListener('click', function() {
    clearButtonStates()

    cClicked = true;
    cButton.style.backgroundColor = GREY;

    userAnswer = C;
    nextQuestion();
    clearButtonStates();
})

dButton.addEventListener('click', function() {
    clearButtonStates()

    dClicked = true;
    dButton.style.backgroundColor = GREY;

    userAnswer = D;
    nextQuestion();
    clearButtonStates();
})

function clearButtonStates() {
    aButton.style.backgroundColor = ORANGE_RED;
    aClicked = false;

    bButton.style.backgroundColor = ORANGE_RED;
    bClicked = false;

    cButton.style.backgroundColor = ORANGE_RED;
    cClicked = false;

    dButton.style.backgroundColor = ORANGE_RED;
    dClicked = false;
}