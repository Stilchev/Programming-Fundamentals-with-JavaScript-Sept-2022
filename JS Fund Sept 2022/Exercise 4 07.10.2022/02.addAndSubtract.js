function addAndSubtract(firstNumber, secondNumber, thirdNumber) {
    function sumOfTwo(num1, num2){
        let sum = num1 + num2;
        return sum;
    }
    let sumOfNumbers = sumOfTwo(firstNumber, secondNumber)
    function substract(ssumOfNumbers, thirdNumber){
        let substractResult = sumOfNumbers - thirdNumber
        return substractResult
    }

    
    console.log(substract(sumOfTwo, thirdNumber));
}

addAndSubtract(23,
    6,
    10
    )