function specialNumbers(number) {
    let isSpecial = false;

    for(let currentNumber = 1; currentNumber <= number; currentNumber++) {
        let sumOfDigits = 0;
        let numberToString = currentNumber.toString()

        for(let index = 0; index < numberToString.length; index++){
            if(number >= 10){
                sumOfDigits += Number(numberToString[index])
            } else{
                sumOfDigits += Number(currentNumber);
            }
            
        }
        if(sumOfDigits === 5 || sumOfDigits === 7 || sumOfDigits === 11){
            isSpecial = true;
            console.log(`${currentNumber} -> True`);
        } else {
            isSpecial = false;
            console.log(`${currentNumber} -> False`);
        }
    }
}
specialNumbers(15)