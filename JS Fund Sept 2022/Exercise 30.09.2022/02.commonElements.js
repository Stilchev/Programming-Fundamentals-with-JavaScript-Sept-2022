function commonElements(firstArr, secondArr) {
    for(let i = 0; i < firstArr.length; i++){
        for(let k = 0; k < secondArr.length; k++){
            if(firstArr[i] === secondArr[k]){
                console.log(firstArr[i]);
            }
        }
    }
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']
)