const result = document.getElementById('result');

function appendToDisplay(input){
     result.value += input;
}

function clearDisplay(){
    result.value = '';
}

function calculate(){
    try {
        const expression = result.value;
        const resultValue = eval(expression);
        result.value = resultValue;
    } catch (error) {
        result.value = 'Error';
    }
}

function calculatePercentage() {
    result.value = (parseFloat(result.value) / 100).toString();
}

function changeSign() {
        result.value = (parseFloat(result.value) * -1).toString();
}