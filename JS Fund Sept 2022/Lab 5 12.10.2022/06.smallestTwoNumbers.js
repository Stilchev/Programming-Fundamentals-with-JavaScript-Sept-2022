function smallestTwoNumbers(input) {
    let resultArr = [];
    let sortedArr = [];

    sortedArr = input.sort((a,b) => a-b);
    let firstEl = sortedArr.shift()
    resultArr.push(firstEl)
    let secondEl = sortedArr.shift()
    resultArr.push(secondEl)

    console.log(resultArr.join(" "))
}

smallestTwoNumbers([30, 15, 50, 5])