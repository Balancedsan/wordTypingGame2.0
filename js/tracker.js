export const tracker = {
    score: 0,
    level: 1,
    baseCount:5, 
    gameStatus:true,
    currentLevel:document.querySelector(".game-content__level"),
    scoreCount:document.querySelector(".game-content__score-count"),
    incrementScore() {
        this.score++;
        this.scoreCount.textContent = this.score;
    },
    incrementLevel(){
         this.level ++;
         this.currentLevel.textContent = `Level ${this.level}`;
    },
    resetTracker() {
        this.score = 0;
        this.level = 1;
    },
    initializeTracker(){
        this.currentLevel.textContent = `Level ${this.level}`;
        this.scoreCount.textContent = this.score;
    },
}

