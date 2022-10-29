function taxCalculator(input) {
    let taxSum = 0;
    let linesArray = input.shift().split(">>")
    let linesArrLength = linesArray.length;

    const familyTax = 50;
    const heavyDutyTax = 80;
    const sportsTax = 100;

    for (let i = 0; i < linesArrLength; i++) {
        let currentLine = linesArray[i].split(" ")
        let carType = currentLine[0];
        let years = Number(currentLine[1]);
        let kmTravelled = Number(currentLine[2]);

        switch (carType) {
            case "family":
                let familyMidTax = Math.floor(kmTravelled / 3000)
                let familyFinalTax = familyMidTax * 12 + (familyTax - (years * 5))
                console.log(`A ${carType} car will pay ${familyFinalTax.toFixed(2)} euros in taxes.`);
                taxSum += familyFinalTax;

                break;
            case "heavyDuty":
                let heavyDutyMidTax = Math.floor(kmTravelled / 9000);
                let heavyDutyFinalTax = heavyDutyMidTax * 14 + (heavyDutyTax - (years * 8))
                console.log(`A ${carType} car will pay ${heavyDutyFinalTax.toFixed(2)} euros in taxes.`);
                taxSum += heavyDutyFinalTax

                break;
            case "sports":
                let sportsMidTax = Math.floor(kmTravelled / 2000);
                let sportsFinalTax = sportsMidTax * 18 + (sportsTax - (years * 9))
                console.log(`A ${carType} car will pay ${sportsFinalTax.toFixed(2)} euros in taxes.`);
                taxSum += sportsFinalTax

                break;
            default:
                console.log("Invalid car type.");
                break;

        }

    }
    console.log(`The National Revenue Agency will collect ${taxSum.toFixed(2)} euros in taxes.`);

}

taxCalculator((['family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410']))