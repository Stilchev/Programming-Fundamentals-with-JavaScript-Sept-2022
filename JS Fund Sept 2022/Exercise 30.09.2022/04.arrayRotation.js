function arrayRotation(startArr, numberRotations) {
    for(let i = 0; i < numberRotations; i++){
        let currentNum = startArr.shift()
        startArr.push(currentNum)
    }

    console.log(startArr.join(" "));
}

arrayRotation([51, 47, 32, 61, 21], 2)