const modalHandler = (()=>{

    const modal = document.querySelector(".modal");
    const trigger = document.querySelector(".trigger");
    const closeButton = document.querySelector(".close-button");

    /**
     *  triggers the modal on and off
     */
    const toggleModal= ()=>{
        modal.classList.toggle("show-modal");
    }

    /**
     * 
     * @param  event object by dom event listener
     * 
     * check if the user has clicked on the modal when the modal is showing and it closes the modal 
     * 
     */
    const windowOnClick  = (event)=>{
        if (event.target === modal) {
            toggleModal();
        }
    }

    // 3 events to trigger the modal , when a button is clicked , modal is clicked and the close button is clicked 
    trigger.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);
	
})();

export default modalHandler;

