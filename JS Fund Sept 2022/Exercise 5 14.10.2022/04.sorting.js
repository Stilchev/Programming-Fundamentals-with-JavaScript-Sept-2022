function sorting(arr) {
    let sortedArr = arr.sort((a,b) => a-b)

    let newArr = []

    for(let i = 0; i < arr.length; i++) {
        let lastNum = sortedArr.pop();
        let firstNum = sortedArr.shift()

        newArr.push(lastNum);
        newArr.push(firstNum)
    }
    newArr.push(sortedArr.pop())
    newArr.push(sortedArr.shift())
    console.log(newArr.join(" "));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])