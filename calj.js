
function appendToDisplay(input){
    const display=document.getElementById("display")
   display.value+=input
}
function clearDisplay()
{
    display.value=""
}
function calculateResult()
{
    try{
    display.value=eval(display.value)
    }
    catch{
        display.value="Error"
    }
}
function clearLastElement()
{
    display.value=display.value.slice(0,-1)
}

