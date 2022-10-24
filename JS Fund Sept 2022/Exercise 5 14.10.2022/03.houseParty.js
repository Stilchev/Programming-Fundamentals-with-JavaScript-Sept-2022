function houseParty(arr) {
    let list = [];

    for(let i = 0; i < arr.length; i++) {
        let currentRow = arr[i].split(" ");
        let name = currentRow[0];

        if(currentRow.length === 3) {
            if(list.includes(currentRow[0])) {
                console.log(`${name} is already in the list!`);
                
            } else {
                list.push(name)
            }
        } else {
            if(!list.includes(name)) {
                console.log(`${name} is not in the list!`);
            } else {
                let nameIndex = list.indexOf(name);
                list.splice(nameIndex,1);
            }
        }
    }
    console.log(list.join("\n"));
}

houseParty(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']
)