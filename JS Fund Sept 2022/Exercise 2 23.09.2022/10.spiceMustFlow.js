function spiceMustFlow(startingYeild){
    let totalAmaountSpice = 0;
    let totalUsedSpice = 0;
    let days = 0;
    for(let i = startingYeild; i >= 100; i-=10){
        totalAmaountSpice += i;
        days++;
        totalUsedSpice += 26
    }
    if(totalAmaountSpice >= 26){
        totalUsedSpice += 26
    }
    console.log(days);
    console.log(totalAmaountSpice - totalUsedSpice);

}
spiceMustFlow(200)