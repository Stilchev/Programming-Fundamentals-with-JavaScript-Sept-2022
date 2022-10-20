function magicSum(arr, num) {
    for(let i = 0; i < arr.length; i++) {
        for(let r = i + 1; r < arr.length; r++){
            if((arr[i] + arr[r]) === num) {
                console.log(`${arr[i]} ${arr[r]}`);
            }
        }
    }
}

magicSum([1, 7, 6, 2, 19, 23],
    8
    )