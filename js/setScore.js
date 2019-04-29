
    /**
     * gets the current score 
     */
    const getlocalStorage = (name)=> {
        const getCurrentScore = localStorage.getItem(name);
        if(!getCurrentScore){
                 localStorage.setItem(name,0);
        }
        return ()=>{
            return getCurrentScore;
        }
    }

    export const getCurrentBest = getlocalStorage("score");

    /**
     */
    const setLocalStorage = ((name)=>{
        return (score)=>{
             if(score > getCurrentBest()){
                 localStorage.setItem(name,score);
                 return true;
             }
            return false;
        }
    })

  export const checkNewRecord = setLocalStorage("score");
 