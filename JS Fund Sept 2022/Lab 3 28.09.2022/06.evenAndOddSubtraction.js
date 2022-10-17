function evenAndOddSubtraction(numbersArray) {
    let evenSum = 0;
    let oddSum = 0;
    for(let number of numbersArray){
       if(number % 2 === 0){
        oddSum += number;
       } else {
        evenSum += number;
       }
    }
    console.log(oddSum - evenSum);
}
evenAndOddSubtraction([3,5,7,9])