function maxSequenceOfEqualElements(arr) {
    let finalArr = [];
    let tempSequence = [];

    for (let i = 0; i < arr.length; i++) {
        tempSequence.push(arr[i])
        for (let r = i + 1; r < arr.length; r++) {

            if (arr[i] === arr[r]) {

                tempSequence.push(arr[r])
                if (tempSequence.length > finalArr.length) {
                    finalArr = tempSequence
                }
            } else {
                tempSequence = []
            }
        }

    }
    console.log(finalArr.join(" "));
}

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])