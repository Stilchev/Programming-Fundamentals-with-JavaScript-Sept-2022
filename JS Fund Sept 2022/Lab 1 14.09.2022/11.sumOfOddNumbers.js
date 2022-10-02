function sumOfOddNumbers(num) {
    let sum = 1;
    let totalSum = 0;
    for(let i = 1; i <= num ; i++){
        totalSum += sum
        console.log(sum);
        sum += 2;
        
    }
    console.log(`Sum: ${totalSum}`);
}
sumOfOddNumbers(5)