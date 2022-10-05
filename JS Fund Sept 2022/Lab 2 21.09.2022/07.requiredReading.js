function requiredReading(pages, pagesPerHour, days) {
    let hoursForBook = pages / pagesPerHour;

    let hoursPerDay = hoursForBook / days;
    console.log(hoursPerDay);
}
requiredReading(212,
    20 ,
    2 
    )