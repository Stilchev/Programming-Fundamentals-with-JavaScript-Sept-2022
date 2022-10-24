function train(arr) {
    let passengersInWagons = arr.shift().split(" ").map(Number);

    let capacityOfWagon = Number(arr.shift());
    let arrLength = arr.length;

    for(let i = 0; i < arrLength; i++) {
        let currentCommand = arr[i].split(" ");

        let newWagon = Number(currentCommand[1])

        if(currentCommand[0] === "Add") {
            passengersInWagons.push(newWagon);
        } else{
            for(let j = 0; j < passengersInWagons.length; j++) {
                let pasCurWagon = Number(passengersInWagons[j]);

                if((pasCurWagon + Number(currentCommand[0])) <= capacityOfWagon) {
                    passengersInWagons[j] += Number(currentCommand[0]);
                    break
                }
                
                
                
            }
        }

    }
    console.log(passengersInWagons.join(" "));
}

train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
)