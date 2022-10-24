function searchForANumber(numbers, actions) {
    let numbersToTake = actions[0];
    let numbersToDelete = actions[1];
    let specialNumber = actions[2];

    let newNumbers = numbers.slice(0, numbersToTake);
    newNumbers.splice(0,numbersToDelete);

    let counter = 0;

    for (const number of newNumbers) {
        if( number === specialNumber){
            counter++
        }
    }
    console.log(`Number ${specialNumber} occurs ${counter} times.`);
}

searchForANumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
    )