//rograma da clculadora 
const display = document.getElementById("display");
function ToDisplay(input){
    display.value +=input; 
}
function Clear(){
    display.value=" ";

}
function Calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }

}
function deleteLastChar() {
    let currentValue = display.value;
    if (currentValue === '0' || currentValue === '') {
        return;
    }
    let newValue = currentValue.slice(0, -1);
    if (newValue === '') {
        newValue = '0';
    }
    
    display.value = newValue;
}
document.addEventListener('keydown', function(event) {
    if (event.key === 'Backspace') {
        event.preventDefault();
        deleteLastChar();
    }
    if (event.key === 'Enter') {
        event.preventDefault();
        calculate();
    }

    if (event.key === 'Escape') {
        clearDisplay();
    }
});
display.value = '0';