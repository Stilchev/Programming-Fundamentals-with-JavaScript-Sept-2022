function vacation(people, typeOfGroup, dayOfWeek) {
    let totalSum = 0

    switch (typeOfGroup) {
        case "Students":
            if (dayOfWeek == "Friday") {
                totalSum = people * 8.45
            } else if (dayOfWeek == "Saturday") {
                totalSum = people * 9.80
            } else if (dayOfWeek == "Sunday") {
                totalSum = people * 10.46
            }
            if(people >= 30) {
                totalSum = totalSum * 0.85
            }

            break;
        case "Business":
            if(people >= 100){
                people -= 10
            }
            if (dayOfWeek == "Friday") {
                totalSum = people * 10.90
            } else if (dayOfWeek == "Saturday") {
                totalSum = people * 15.60
            } else if (dayOfWeek == "Sunday") {
                totalSum = people * 16
            }


            break;
        case "Regular":
            if (dayOfWeek == "Friday") {
                totalSum = people * 15
            } else if (dayOfWeek == "Saturday") {
                totalSum = people * 20
            } else if (dayOfWeek == "Sunday") {
                totalSum = people * 22.50
            }
            if(people >= 10 && people <= 20){
                totalSum = totalSum * 0.95
            }

            break;

        
    }
    console.log(`Total price: ${totalSum.toFixed(2)}`);
}
vacation(30,
    "Students",
    "Sunday"
    )
