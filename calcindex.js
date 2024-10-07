const result = document.getElementById("result");

function appendToDisplay(input) {
  result.value += input;
}

function clearDisplay() {
  result.value = "";
}

function calculate() {
  try {
    const calculation = result.value;
    const resultValue = eval(calculation);
    result.value = parseFloat(resultValue).toFixed(5);
  } catch (error) {
    result.value = "Error";
  }
}

function calculatePercentage() {
  result.value = (parseFloat(result.value) / 100).toString();
}

function changeSign() {
  result.value = (parseFloat(result.value) * -1).toString();
}
