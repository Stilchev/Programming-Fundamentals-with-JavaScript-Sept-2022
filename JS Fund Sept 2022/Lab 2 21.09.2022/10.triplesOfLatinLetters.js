function triplesOfLatinLetters(num) {

    let number = Number(num);
    for(let firstChar = 0; firstChar <  number; firstChar++){
        let firstLetter = String.fromCharCode(firstChar + 97)
        for(let secondChar = 0; secondChar < number; secondChar++){
            let secondLetter = String.fromCharCode(secondChar + 97)
            for(let thirdChar = 0; thirdChar < number; thirdChar++){
                let thirdLetter = String.fromCharCode(thirdChar + 97)
                console.log(`${firstLetter}${secondLetter}${thirdLetter}`);
            }
        }
        
    }
}
triplesOfLatinLetters(2)