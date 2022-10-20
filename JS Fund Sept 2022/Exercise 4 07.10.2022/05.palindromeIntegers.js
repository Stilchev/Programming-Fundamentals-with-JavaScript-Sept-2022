function palindromeIntegers(arrayOfNumbers) {

    for(let index = 0; index < arrayOfNumbers.length; index++) {
        let currentNumber = arrayOfNumbers[index].toString();
        let reversedCurrentNumber = currentNumber.split("").reverse().join("");

        if(reversedCurrentNumber == arrayOfNumbers[index]) {
            console.log("true");
        } else {
            console.log("false");
        }
    }
}

palindromeIntegers([123,323,421,121])