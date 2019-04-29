class ScoreTracker{

    constructor(){
        this._score = 0;
    }

    incrementScore(){
        this._score++; 
    }

    resetScore(){
        this._score = 0;
    }

    get Score(){
        return this._score;
    }


}

export  const scoreTrack = new ScoreTracker();