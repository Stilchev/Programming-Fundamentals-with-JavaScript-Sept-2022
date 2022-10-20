function passwordValidator(password) {

    let digitCounter = 0;
    let passwordLength = password.length;
    let isSymbol = false;

    for(let i = 0; i < passwordLength; i++) {
        let currentChar = password[i].charCodeAt();

        let isDigit = currentChar >= 48 && currentChar <= 57;
        let isSmallLetter = currentChar >= 97 && currentChar <= 122;
        let isBigLetter = currentChar >= 65 && currentChar <= 90;
        
        if(isDigit) {
            digitCounter++;
        }

        if(!isDigit && !isSmallLetter && !isBigLetter) {
            isSymbol = true;
        }

    }

    if(password.length < 6 || password.length > 10) {
        console.log("Password must be between 6 and 10 characters");
    }

    if(isSymbol) {
        console.log("Password must consist only of letters and digits");
    }

    if(digitCounter < 2) {
        console.log("Password must have at least 2 digits");
    }

    if(digitCounter >= 2 && !isSymbol && password.length >= 6 && password.length <= 10) {
        console.log("Password is valid");
    }
    
}

passwordValidator('logIn')