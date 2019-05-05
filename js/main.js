import modalHandler from "./modal";
import { timer } from "./timer.js";
import { generateWords } from "./words.js"
import { getCurrentBest, checkNewRecord } from "./setScore.js";
import {tracker} from "./tracker.js";

// selectors to replace elements on the dom page

// const scoreTag = document.querySelector(".game-info__score");

const displayContent = {
    start: document.querySelector(".box__start"),
    mainContent: document.querySelector(".box__content"),
    replaceElement: document.querySelector(".game-content--hidden")
}

let wordTracking = {
    currentWord: document.querySelector(".game-content__word"),
    wordInput:document.querySelector(".game-content__input"),
    message:document.querySelector(".game-content__message")
    
}
// const timeElement = document.querySelector(".game-content__timer");
const stopButton =  document.querySelector(".game-content__stop");




const createCharacters = (length)=>{
    return generateWords.generateCharacters(length);
}



/**
 * used to check if game should increase in level 
 * @param {integer} score current score of the game 
 * @param {*integer} multipler the multipler for the game state
 */
const checkLevelIncrement = (score, multipler) => {
    return score % multipler === 0;
}

const getCurrentRecord = ({score}) => {
    return checkNewRecord(score) ? score : getCurrentBest();
}






const stopGameState = ({currentWord,wordInput}) => {
    wordInput.readOnly = true;
    currentWord.textContent = "";
    wordInput.value = "";
    return Boolean(!currentWord.textContent);
}

const writeEndMessage = (tracker,wordTracking)=>{
    if(stopGameState(wordTracking)){
        const highest =  getCurrentRecord(tracker);
        wordTracking.message.textContent = `Game Over, your highest score is ${highest}`;
        stopButton.textContent = "Play Again?";
        tracker.resetTracker();
        tracker.gameStatus = false;
        return true;
    }
    return false;
}


const resetGame = ()=>{
    stopButton.textContent = "Stop";
    tracker.gameStatus = true;
    timer.timerReset();
    wordTracking.message.textContent = "";
    wordTracking.wordInput.value = "";
    startGame(wordTracking,tracker);
}

const stopGame = ()=>{
    timer.foceStop();
    writeEndMessage(tracker,wordTracking);
}

const toggleButtons = ()=>{
    tracker.gameStatus ? stopGame() : resetGame();
}


const addStopButton = ()=>{
    stopButton.addEventListener("click",toggleButtons);
}



/**
 * Used to start the timer for the game 
 * @param {dom} element the element to show the timer
 */
const startTimer = (element) => {
    timer.startCountDown(element)
        .then((timeValue) => {
            if (timeValue > 1) {
                startTimer(element);
            } else {
               writeEndMessage(tracker,wordTracking);
            }
        })
}









/**
 * Used to replace the dom page to the game when start is being clicked
 * @param {dom} mainContent the content to replace the element with
 * @param {dom} replaceElement the element to replace the mainContent with 
 */
const replaceStart = ({ mainContent, replaceElement }) => {
    replaceElement.classList.add("game-content--reveal");
    mainContent.textContent = "";
    mainContent.appendChild(replaceElement);
    return Boolean(mainContent.textContent); // return falsy value on message content to indicate start has been replaced
}

/**
 * Used to check if the words typed by the player matches the currentword shown
 * @param {*} message the message content of the result  
 * @param {*} wordInput the word typed by the user 
 * @param {*} currentWord the current word displayed
 */
const checkForMatch = ({wordInput,currentWord,message}) => {
    message.textContent = wordInput.value === currentWord.textContent ? "correct" : "";
    return Boolean(message.textContent);
}

const shouldLevelIncrease = (currentWord,tracker)=>{
     if(checkLevelIncrement(tracker.score,5)){
         tracker.baseCount+=1;
         currentWord.textContent = createCharacters(tracker.baseCount);
         tracker.incrementLevel();
     }{
        currentWord.textContent = createCharacters(tracker.baseCount);
     }
}

const continueNextStage = ({wordInput,currentWord},tracker)=> {
    timer.clearTimer();
    wordInput.value = "";
    tracker.incrementScore();
    shouldLevelIncrease(currentWord,tracker);
}




const listenKeyInput = (wordTracking,tracker)=>{
    wordTracking.wordInput.addEventListener("input",()=>{
        if(checkForMatch(wordTracking)){
            continueNextStage(wordTracking,tracker);
        }
    })

}



const startGame = (wordTracking,tracker)=>{
    wordTracking.wordInput.readOnly = false;
    tracker.baseCount = 5;
    wordTracking.currentWord.textContent = createCharacters(tracker.baseCount);
    startTimer(document.querySelector(".game-content__timer"));
    tracker.initializeTracker();
    wordTracking.wordInput.focus();
    listenKeyInput(wordTracking,tracker);
}



displayContent.start.addEventListener("click", () => {
    if (replaceStart(displayContent)) { // if the content has sucessfully replaced when the start button is clicked
        startGame(wordTracking,tracker);
        addStopButton();
    }
});

