function simpleCalculator(firstNumber, secondNumber, operator) {
    switch (operator) {
        case 'multiply':
            let multiply = (firstNumber, secondNumber) => firstNumber * secondNumber;
            let resultM = multiply(firstNumber, secondNumber)
            console.log(resultM);
            break;
        case 'divide':
            let divide = (firstNumber, secondNumber) => firstNumber / secondNumber;
            let resultD = divide(firstNumber, secondNumber)
            console.log(resultD);
            break;
        case 'add':
            let add = (firstNumber, secondNumber) => firstNumber + secondNumber;
            let resultA = add(firstNumber, secondNumber)
            console.log(resultA);
            break;
        case 'subtract':
            let subtract = (firstNumber, secondNumber) => firstNumber - secondNumber;
            let resultS = subtract(firstNumber, secondNumber)
            console.log(resultS);
            break;
    }
}

simpleCalculator(5,
    5,
    'multiply'
)