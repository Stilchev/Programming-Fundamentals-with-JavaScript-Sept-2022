function sumFirstAndLast(input) {
    let sum = 0;

    let firstNum = Number(input[0]);
    let secondNumber = Number(input.pop());

    sum = firstNum + secondNumber;
    console.log(sum);
}

sumFirstAndLast(['20', '30', '40'])