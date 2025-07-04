
const x = document.getElementById('number1');
const y = document.getElementById('number2');
const result = document.getElementById('result');



//make the switch case first
function calculate(operator) {
    const num1 = parseFloat(x.value);
    const num2 = parseFloat(y.value);
    // Validate input
    if (isNaN(num1) || isNaN(num2)) {
        result.innerText = 'Please enter valid numbers.';
        return;
    }
    switch (operator) {
        case '+':
            result.innerText = num1 + num2;
            break;
        case '-':
            result.innerText = num1 - num2;
            break;
        case '*':
            result.innerText = num1 * num2;
            break;
        case '/': //divide 
            if (num2 === 0) {
                result.innerText = 'Division by zero is not allowed.';
            } else {
                result.innerText = num1 / num2;
            }
            break;
        default:
}

}