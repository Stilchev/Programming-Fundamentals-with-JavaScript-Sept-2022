function bitcoinMining(input){
    let bitcoinCount = 0;
    let bitcounNumber = 0
    let goldPrice = 67.51;
    let bitcoinPrice = 11949.16;
    let money = 0;
    let firstBitcoinDay = 0;
    let day = 1;

    for(let index = 0; index < input.length; index++){
        let goldIncome = Number(input[index])
        if(day % 3 === 0){
            goldIncome *= 0.70;  
        } 
         money += (goldIncome * goldPrice)
        
        
        if(money >= bitcoinPrice){
            bitcoinCount++;
            let number = Math.floor(money / bitcoinPrice)
            bitcounNumber += number;

            money -= (number * bitcoinPrice);

        }

        if(bitcoinCount === 1){
            firstBitcoinDay = day;

        }
        day++;

    }

    console.log(`Bought bitcoins: ${bitcounNumber}`);
    if(bitcoinCount >= 1) {
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);
    

}
bitcoinMining([50, 100])