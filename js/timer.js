
/**
 * Use to keep track of the timer and display it to the user
 *
 */
class TimerTracker{
    constructor(time){
        this._time = time; // time in miliseconds 
        this._clear = false; // use to notify the timer to stop while the game resets 
        this._initial = time; // resets the timer when the timer resets
    }

    /**
     * Starts the countdown timer and display the time on the html element
     * @param element the dom element to display the timer to
     * 
     */
    startCountDown(element){
        const promise = new Promise((resolve,reject)=>{
        const timer= setInterval(()=> {
                if(this._time <=0){
                    clearInterval(timer);
                    this._time = 0;
                    resolve(this._time);
                }
          
                if(this._clear){ // if anytime clear is set to true , stop the timer countdown and reset the initial values
                    clearInterval(timer)
                    this._clear = false;
                    this._time = this._initial;
                    resolve(this._time);
                }
     

                this._time--;
                let res = this._time > 0 ? this._time/100 : 0;
                element.textContent = `${res.toPrecision(this._time.toString().length)}`;
            },10)
        })
        return promise;
    }

    /**
     * Stops the timer while the timer is counting down
     */
    clearTimer(){
      this._clear = true;
    }

    foceStop(){
        this._time = 0;
    }
    timerReset(){
        this._time = 500;
    }


}     
    

export const timer = new TimerTracker(500);
    