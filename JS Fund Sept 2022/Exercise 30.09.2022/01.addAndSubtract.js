function addAndSubtract(arr) {
    let newArr = [];
    let sumArr = 0;
    let sumNewArr = 0;

    for(let i = 0; i < arr.length; i++){
        sumArr += Number(arr[i]);
    }

    for(let j = 0; j < arr.length; j++){
        let currentNum = arr[j];
        if(currentNum % 2 === 0){
            currentNum = arr[j] + j;
        } else {
            currentNum = arr[j] - j;
        }
        newArr.push(currentNum)
        sumNewArr += currentNum;
    }
console.log(newArr);
console.log(sumArr);
console.log(sumNewArr);
}

addAndSubtract([5, 15, 23, 56, 35])