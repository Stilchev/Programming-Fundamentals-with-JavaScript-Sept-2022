function condenseArrayToNumber(startArray) {
    let array = [];

    for (let i = 0; i < startArray.length; i++) {
        array[i] = Number(startArray[i]);
    }

    while (array.length > 1) {
        let condenseArr = [];

        for (let j = 0; j < array.length - 1; j++) {

            condenseArr[j] = Number(array[j] + array[j + 1])
        }

        array = condenseArr;
        condenseArr = 0;
    }

    console.log(Number(array));


}
condenseArrayToNumber([2, 10, 3])