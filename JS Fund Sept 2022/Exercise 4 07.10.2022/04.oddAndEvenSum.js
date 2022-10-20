function oddAndEvenSum(num) {
    let evenSum = 0;
    let oddSum = 0

    let numAsString = num.toString()
    let numAsStringLength = numAsString.length
    for(let currentDigit = 0; currentDigit < numAsStringLength; currentDigit++) {
        let currentNum = Number(numAsString[currentDigit]);

        if(currentNum % 2 === 0) {
            evenSum += currentNum
        } else {
            oddSum += currentNum
        }

    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(1000435)