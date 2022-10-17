function equalArrays(arr1, arr2) {
    let sumArr1 = 0;
    for (let i = 0; i < arr1.length; i++) {
        arr1[i] = Number(arr1[i]);
        sumArr1 += arr1[i]
    }

    for (let j = 0; j < arr2.length; j++) {
        arr2[j] = Number(arr2[j]);
    }

    let isEqualArrays = true;

    for (let k = 0; k < arr1.length; k++) {
        if (arr1[k] !== arr2[k]) {
            console.log(`Arrays are not identical. Found difference at ${k} index`);
            isEqualArrays = false;
            break;
        }
    }
    if (isEqualArrays === true) {
        console.log(`Arrays are identical. Sum: ${sumArr1}`);
    }
}
equalArrays(['10', '20', '30'], ['10', '20', '30'])