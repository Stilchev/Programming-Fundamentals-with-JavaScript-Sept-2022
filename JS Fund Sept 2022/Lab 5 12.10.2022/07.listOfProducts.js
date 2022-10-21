function listOfProducts(input) {
    let sortedList = input.sort()
    //(a, b) => a.localeCompare(b)
    for (let i = 0; i < input.length; i++) {
        console.log(`${1 + i}.${sortedList[i]}`);
    }
}

listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])