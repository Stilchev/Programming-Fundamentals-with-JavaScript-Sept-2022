function experienceGaining(input) {
    let expNeeded = Number(input.shift());
    let battles = Number(input.shift());
    let dayCount = 0;

    let tempExp = 0;

    for (let i = 0; i < battles; i++) {
        dayCount++;
        let currentBattleExp = Number(input[i]);
         if (dayCount % 3 === 0) {
            currentBattleExp = Math.round(currentBattleExp * 1.15);
            currentBattleExp = Number(currentBattleExp)
        } 
        if (dayCount % 5 === 0) {
            currentBattleExp = Math.round(currentBattleExp * 0.90);
            currentBattleExp = Number(currentBattleExp)
        }

        if (dayCount % 3 === 0 && dayCount % 5 === 0) {
            currentBattleExp = Math.round(currentBattleExp * 1.05);
            currentBattleExp = Number(currentBattleExp)
        }

        tempExp += currentBattleExp;

        if (tempExp >= expNeeded) {
            break;
        }

    }
    let leftExp = Number(expNeeded - tempExp)

    if (tempExp >= expNeeded) {
        console.log(`Player successfully collected his needed experience for ${dayCount} battles.`);
    } else {
        console.log(`Player was not able to collect the needed experience, ${leftExp.toFixed(2)} more needed.`);
    }

}



experienceGaining(([500,
    5,
    50,
    100,
    200,
    100,
    20])
    )