function maxNumber(startArr) {
    let newArr = []
    
    for(let i = 0; i < startArr.length; i++){
        let isBigger = true;
        for(let r = i+1; r < startArr.length; r++){
            if(startArr[i] <= startArr[r]){
                isBigger = false;
            }
        }
        if(isBigger === true){
            newArr.push(startArr[i])
        }
    }

    console.log(newArr.join(" "));
}

maxNumber([1, 4, 3, 2])