let aButton = document.getElementById("aBUtton");
let bButton = document.getElementById("bBUtton");
let cButton = document.getElementById("cBUtton");
let dButton = document.getElementById("dBUtton");

let aClicked = false;
let bClicked = false;
let cClicked = false;
let dClicked = false;

const ORANGE_RED = "orangered"
const GREY = "grey"
aButton.addEventListener('click', function() {
    console.log("Line Button pressed");
    clearButtonStates()
    aClicked = true;
    aButton.style.backgroundColor = GREY;

    nextQuestion();
})

bButton.addEventListener('click', function() {
    console.log("Line Button pressed");
    clearButtonStates()
    bClicked = true;
    bButton.style.backgroundColor = "grey"

    nextQuestion();
})

cButton.addEventListener('click', function() {
    clearButtonStates()

    cClicked = true;
    cButton.style.backgroundColor = "grey"
})

dButton.addEventListener('click', function() {
    clearButtonStates()

    dClicked = true;
    dButton.style.backgroundColor = "grey"

    nextQuestion();
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