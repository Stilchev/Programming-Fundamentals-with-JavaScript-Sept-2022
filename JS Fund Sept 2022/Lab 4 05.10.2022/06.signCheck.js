function signCheck(firstNumber, secondNumber, thirdNumber) {


    function multyplyOfTwo(firstNumber, secondNumber) {
        let resultOfTwo = firstNumber * secondNumber;
        return resultOfTwo
    }

    let finalResult = multyplyOfTwo(firstNumber,secondNumber)*thirdNumber;

    if(finalResult >= 0){
        console.log('Positive');
    } else {
        console.log('Negative');
    }
}

signCheck( -6,
    -12,
   14
   )