function rightPlace(string, char, result){
    let finalResult = string.replace("_", char);
    let match = result === finalResult? "Matched" : "Not Matched";
    console.log(match);
}
rightPlace()