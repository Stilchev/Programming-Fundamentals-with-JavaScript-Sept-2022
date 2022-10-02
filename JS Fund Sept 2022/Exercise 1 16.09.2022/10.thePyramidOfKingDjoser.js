function pyramidDjoser(side, higth){
    let stoneSum = 0;
    let marbleSum = 0;
    let lapisSum = 0;
    let goldSum = 0;

    let row = 0;

    let currentSide = side;

    while(currentSide > 2){
        let marble = (currentSide * 4 - 4) * higth;
        let stone = currentSide * currentSide * higth - marble;

        stoneSum += stone;
        
        row++;

        if(row % 5 === 0){
            lapisSum += marble;
        } else {
            marbleSum += marble;
        }
        currentSide -= 2;


    }
    row++;
    goldSum = currentSide * currentSide * higth;
    let rowHigth = row * higth;

    console.log(`Stone required: ${Math.ceil(stoneSum)}`);
    console.log(`Marble required: ${Math.ceil(marbleSum)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisSum)}`);
    console.log(`Gold required: ${Math.ceil(goldSum)}`);
    console.log(`Final pyramid height: ${Math.floor(rowHigth)}`);

}
pyramidDjoser(11,
    0.75
    )