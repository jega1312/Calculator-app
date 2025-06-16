const display = document.getElementById("display");

function appendToDisplay(input){

    display.value += input;  /* .value is a property where it extracts the input */

}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{ /* try runs the code even it fails */
    display.value = eval(display.value); /* eval() is for evaluate the passed string value as a code */
    }
    catch(error){ /* catch grabs and handles the error if it occurs */
        display.value = "Error";
    }
}