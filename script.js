//MAIN FILE

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function deleteLast() {
    const display = document.getElementById("display");
    const currentValue = display.value;
    if (currentValue.length > 0) {
        const newValue = currentValue.slice(0, -1);
        display.value = newValue;
    }
    else{
        function deleteLast(){
            display.value = display.value.slice(0, -1);
        }
    }
}

function clearDisplay(){
    display.value = ""
}

function calculate(){
    if (display.value.includes("/0")) {
        display.value = "Error 2. Division by zero.";
    } else {
        try {
            display.value = eval(display.value);
        } catch(error) {
            display.value = "Error";
        }
    }
}

function calculateSqrt(){
    const currentValue = parseFloat(display.value);
    if (currentValue >= 0) {
        display.value = Math.sqrt(currentValue);
    } else {
        display.value = "Error";
    }
}

function showPi() {
    // Добавляем значение числа Пи к текущему содержимому дисплея
    display.value += Math.PI;
}

function addOpeningBracket() {
    display.value += "(";
}

function addClosingBracket() {
    display.value += ")";
}