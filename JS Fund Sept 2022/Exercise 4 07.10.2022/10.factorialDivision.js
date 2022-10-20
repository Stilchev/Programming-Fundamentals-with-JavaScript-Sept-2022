function factorialDivision(firstNumber, secondNumber) {

    function facturial(num) {
        let factorial = 1;
        for (let i = 1; i <= num; i++) {
            factorial *= i
        }
        return factorial
    }

    console.log((facturial(firstNumber) / facturial(secondNumber)).toFixed(2));
}

factorialDivision(5,
    2
)