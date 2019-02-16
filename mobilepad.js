(function() {
    /**declaring and assigning private variables 
     * iTimeDelay = delay for considering next user input in seconds
    */

    var sCurrentKeyPressed = null,
        sLastKeyPressed = null,
        oLastKeyPressTime = null,
        oCurrentKeyPressTime = null,
        bTimeDifference = null,
        iCurrentLetterIndex = null,
        iTimeDelay = 2;               

    /**getting references of input field, table and reset button */

    let oResult = document.getElementById("result");
    let oPhone = document.getElementById("phone");
    let oResetButton = document.getElementById("reset");

    /**attaching event listener on table instead of each button */
    oPhone.addEventListener("click", function(e) {
        let arrCurrentKeyLetters = null;
        let oButtonClicked = e.target.closest('button');

        /** if no button clicked then return */

        if (!oButtonClicked) return;

        /**getting all child nodes of button */

        let oChildNodes = oButtonClicked.childNodes;

        /**storing input field value */

        let sInputFieldValue = oResult.value;

        /** if child nodes are more than one it means button has span element else not 
         * store all letters present in the current pressed key based on the presence of span element
         */

        if (oChildNodes.length > 1) {
            arrCurrentKeyLetters = oButtonClicked.children[0].innerText.split(" ");
        } else {
            arrCurrentKeyLetters = oButtonClicked.innerText.split("");
        }

        oCurrentKeyPressTime = (new Date).getTime();
        bTimeDifference = Math.floor((oCurrentKeyPressTime - oLastKeyPressTime) / 1000) >= iTimeDelay;
        sCurrentKeyPressed = oButtonClicked.getAttribute("data-value");

        /**
         * time difference check to identify that user has clicked another key after specified(iTimeDelay) seconds 
         */


        if (bTimeDifference || (sCurrentKeyPressed != sLastKeyPressed)) {
            iCurrentLetterIndex = 0;
            oResult.value = sInputFieldValue + arrCurrentKeyLetters[iCurrentLetterIndex];
        } else {
            iCurrentLetterIndex = iCurrentLetterIndex % arrCurrentKeyLetters.length;
            sInputFieldValue = sInputFieldValue.split("");
            sInputFieldValue = sInputFieldValue.slice(0, sInputFieldValue.length - 1).join("");
            oResult.value = sInputFieldValue + arrCurrentKeyLetters[iCurrentLetterIndex];
        }

        /** finally reassigning variables for next key presses */
        oLastKeyPressTime = oCurrentKeyPressTime;
        sLastKeyPressed = sCurrentKeyPressed;
        iCurrentLetterIndex++;
    })

    /** handling click on reset button by resetting value of input field */

    oResetButton.addEventListener("click", function(e){
        oResult.value = "";
    })

})();