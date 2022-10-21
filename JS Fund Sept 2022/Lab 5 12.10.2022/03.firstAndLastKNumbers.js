function firstAndLastKNumbers(input) {
    let count = input.shift();

    let firstNumbers = input.slice(0, count);
    let lastNumbers = input.slice(input.length - count)

    console.log(firstNumbers.join(" "));
    console.log(lastNumbers.join(" "));
}

firstAndLastKNumbers([2, 
    7, 8, 9]
    )