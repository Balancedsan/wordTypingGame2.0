import modalHandler from "./modal";
import domCreate from "./domCreate";
import {timer} from "./timer.js";
import {generateWords} from "./words.js"


// selectors to replace elements on the dom page

const displayContent = {
    start: document.querySelector(".box__start"),
    mainContent: document.querySelector(".box__content"),
    replaceElement:document.querySelector(".game-content--hidden")
}

// gameStatus used to keep track of the game current state

const gameStatus = {
    wordInput: document.querySelector(".game-content__input"),
    currentWord:document.querySelector('.game-content__text'),
    stopButton: document.querySelector(".game-content__stop"),
    score: document.querySelector(".game-info__score"),
    message: document.querySelector(".game-content__message"),
    timeElement:document.querySelector(".game-content__timer")
}






const checkLevelIncrement = (score,multipler)=>{
    return score % multiplier === 0;
}

const startTimer = async (element)=>{
    const timeValue = timer.startCountDown(element);
    if(timeValue > 1){
        timer.startCountDown(element);
    }else{
        //TODO GAME OVER DISPLAYS MESSAGE TO THE USER
    }

}



const replaceStart =(mainContent,replaceElement)=>{
        replaceElement.classList.add("game-content--reveal");
        mainContent.textContent = "";
        mainContent.appendChild(replaceElement);
        return new Boolean(mainContent.textContent);
}

const createWords = (length)=>{
    return generateWords.generateCharacters(length);
}


// const initializeGame = (currentWord,generator)=>{
//     return (randomlength)=> {
//        currentWord.textContent =  generator.generateCharacters(randomlength);
//        return Boolean(currentWord.textContent);
//     }
// }

// // used for generating random words onto the screen
// const outputRandom = initializeGame(currentWord,generateWords);



start.addEventListener("click",replaceStart.bind(null,mainContent,replaceElement));



//     // start.addEventListener("click",()=>{
//     //     mainContent.innerHTML = "";
//     //     mainContent.appendChild(newElement);
//     //     const time = timer.countDownTimer(200,newElement,"Game will start in");

//     //     time.then(()=>{
//     //         replaceElement.classList.add("game-content--reveal");
//     //         mainContent.innerHTML ="";
//     //         const timerGame = timer.countDownTimer(500,newElement,"type the following words in")
//     //         mainContent.appendChild(replaceElement);
//     //     })



    //         /**
    //  * Generates words for the user to type and display it on the screen
    //  * 
    //  * @param length the length of word to be generated
    //  * @param element the element to generate the newWord to
    //  */
    // const showWords = ((length,element)=>{
    //     const newWord = wordGenerator.generateWords(length);
    //     return newWord;
    // })
    // /**
    //  * Checks if the current character on the screen matches the current character on the screen
    //  * 
    //  */
    // const matchWords =((message,wordInput,currentWord)=> {
    //     message.textContent = wordInput.value === currentWord.textContent ? "correct" : "";  
    //     return Boolean(message.textContent); // change output to falsy value to check if the word matches
    // })


// const mainFunc = ((domCreate)=>{

//     const start = document.querySelector(".box__start");
//     const mainContent = document.querySelector(".box__content");
//     const newElement = domCreate.createElement("h1","","timer__heading");
//     const replaceElement = document.querySelector(".game-content--hidden");






//     // start.addEventListener("click",()=>{
//     //     mainContent.innerHTML = "";
//     //     mainContent.appendChild(newElement);
//     //     const time = timer.countDownTimer(200,newElement,"Game will start in");

//     //     time.then(()=>{
//     //         replaceElement.classList.add("game-content--reveal");
//     //         mainContent.innerHTML ="";
//     //         const timerGame = timer.countDownTimer(500,newElement,"type the following words in")
//     //         mainContent.appendChild(replaceElement);
//     //     })

   


//     // })



// })(domCreate);