/*-------------------------------- Constants --------------------------------*/
const state = {
    boredom: 0,
    hunger: 0,
    sleepiness: 0
};


/*---------------------------- Variables (state) ----------------------------*/
let timer;
let gameOver;


/*------------------------ Cached Element References ------------------------*/

const boredomStatEl = document.querySelector('#boredom-stat');
const hungerStatEl = document.querySelector('#hunger-stat');
const sleepinessStatEl = document.querySelector('#sleepiness-stat');

const playBtnEl = document.querySelector('#play');
const feedBtnEl = document.querySelector('#feed');
const sleepBtnEl = document.querySelector('#sleep');

const gameMessageEl = document.querySelector('#message');
const resetBtnEl  = document.querySelector('#restart');

/*-------------------------------- Functions --------------------------------*/

function init() {
    resetBtnEl.classList.add("hidden")
    gameMessageEl.classList.add("hidden")
    state.boredom = 0;
    state.hunger = 0;
    state.sleepiness = 0;
    gameOver = false;
    timer = setInterval(runGame, 200);
    console.log("game is initialized")
}

function updateStates() {
    state.boredom += Math.floor(Math.random()*3);
    state.hunger += Math.floor(Math.random()*3)
    state.sleepiness += Math.floor(Math.random()*3)
}

function runGame() {
    updateStates();
    checkGameOver();
    render();
}

function render() {
    if (gameOver) {
        timer.clearInterval;
        resetBtnEl.classList.remove("hidden")
        gameMessageEl.classList.remove("hidden")
    }
    boredomStatEl.textContent = state.boredom;
    hungerStatEl.textContent = state.hunger;
    sleepinessStatEl.textContent = state.sleepiness;
}

function checkGameOver(){
    if (state.boredom > 9 || state.hunger > 9 || state.sleepiness > 9) {
        gameOver = true;
        gameMessageEl.textContent = "Game Over!";
    }
}

function playBtnClick(){
    state.boredom = 0;
    render()
}
function feedBtnClick(){
    state.hunger = 0;
    render()
}
function sleepBtnClick(){
    state.sleepiness = 0;
    render()
}

init();

/*----------------------------- Event Listeners -----------------------------*/

playBtnEl.addEventListener('click', playBtnClick);
feedBtnEl.addEventListener('click', feedBtnClick);
sleepBtnEl.addEventListener('click', sleepBtnClick);
resetBtnEl.addEventListener('click', init);