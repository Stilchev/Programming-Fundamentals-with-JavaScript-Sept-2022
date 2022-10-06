function gladiatorExpenses(loses, helmCost, swordCost, shieldCost, armorCost) {
    let expenses = 0;
    let shieldBrokenCounter = 0;

    for(let figths = 1; figths <= loses; figths++) {
        if (figths % 2 === 0){
            expenses += helmCost;
        }
        if(figths % 3 === 0){
            expenses += swordCost;
        }
        if(figths % 6 === 0){
            expenses += shieldCost
            shieldBrokenCounter++;
        }
        if(shieldBrokenCounter === 2){
            expenses+= armorCost;
            shieldBrokenCounter = 0;
        }
    }
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
gladiatorExpenses(7,
    2,
    3,
    4,
    5
    )