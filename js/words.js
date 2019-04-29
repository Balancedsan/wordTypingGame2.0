
/**
 * Author: John Wee
 *
 * Description: This class is used to initialize the base character set and generate unique random characters for the user to key in 
 *              , the class allows the base characters to be extended
 */
class RandomChara{
    constructor(base){
        this._chara = [...new Set(base)].join(""); // ensure the random characters set initialized are all unique
        this._count = this._chara.length; // counts the number of chara added
    }

    addCharacters(characters){
        const oldCount = this._count;
        this._chara = [...new Set(`${this._chara}${characters}`)].join("");
        this._count = this._chara.length;
        return this._count > oldCount;
    }

    generateCharacters(length){
        let results = "";
        for(let index = 0; index < length; index++){
              results += this._chara.charAt(Math.floor(Math.random() * this._chara.length));
        }
        return results;
    }

    get base(){
          return this._chara
    }


    set base(characters){
        if(characters.length > 1){
           this._chara = [...new Set(characters)].join("");
        }else{
           throw new Error("characters cannot be empty");
        }
    }
}



export const generateWords = new RandomChara("abcdefghijklmopqrstuvwxyz1234567890")




