function lastKNumbersSequance(length, k) {
    let newArray = [1];

    for(let i = 1; i < length; i++) {
        let index = Math.max(newArray.length - k, 0)

        let lastNumbers = newArray.slice(index);
        let sum = 0;
        for (const el of lastNumbers) {
            sum += el;
        }
        newArray.push(sum)
    }

    console.log(newArray.join(" "));

}

lastKNumbersSequance(6, 3)