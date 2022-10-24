function bombNumbers(numbers, actions) {
    let bombNumber = actions[0];
    let damageNumber = actions[1];
    let bombArray = numbers.slice(0);

    for(let i = 0; i < bombArray.length; i++){
        if(bombNumber === bombArray[i]) {
            let bombIndex = bombArray.indexOf(bombNumber);
            let startIndex = Math.max(bombIndex - damageNumber,0);

            bombArray.splice(bombIndex, damageNumber+1);
            bombArray.splice(startIndex,damageNumber)
            i = 0;
        }
    }

    let sum = 0;
    for(let i = 0; i < bombArray.length; i++){
        sum += bombArray[i]
    }
    console.log(sum);
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]
    )