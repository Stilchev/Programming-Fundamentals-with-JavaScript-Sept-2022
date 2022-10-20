function charactersInRange(firstChar, secondChar) {
    let startChar = Math.min(firstChar.charCodeAt(), secondChar.charCodeAt());
    let endChar = Math.max(firstChar.charCodeAt(), secondChar.charCodeAt());
    let arrayOfChars = [];

    for(let i = startChar + 1; i < endChar; i++) {
        let currentChar = String.fromCharCode(i);
        arrayOfChars.push(currentChar)
    }

    console.log(arrayOfChars.join(" "));
}

charactersInRange('#',
':'
)