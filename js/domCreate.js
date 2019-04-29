/**
 * Used to create dom element tags in javascript
 *
 */
export default class CreateDomTag {
    /**
     * Creates the document element and sets it to the property this.element
     * @param {string} element the name of the tag to create 
     */
    constructor(element){
        this._element = document.createElement(element);
    }
    /**
     * add text in between the tag of the element created 
     * @param {string} text the text used to add inside the tag element 
     */
    addText(text){
        this._element.appendChild(document.createTextNode(text));
    }

    /**
     * adds a className to the element tag created 
     * @param {string} select the css class to add to the element
     */
    addClass(select){
        this._element.classList.add(select);
    }
  
    /**
    *  attaches the tag element to a DOM element by css class name 
     * @param {string} select the name of the class to add the element tag to 
     */
    attachToClass(select){
         document.querySelector(`.${select}`).append(this._element);
    }

}


