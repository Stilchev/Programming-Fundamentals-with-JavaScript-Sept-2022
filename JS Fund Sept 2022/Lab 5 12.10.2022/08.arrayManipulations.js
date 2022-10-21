function arrayManipulations(input) {
    let arr = input.shift().split(" ").map(Number)
    //console.log(arr);
    function add(num) {
        arr.push(num)
    }

    function remove(num) {
        arr = arr.filter(x => x !== num)
    }

    function removeAt(index) {
        arr.splice(index, 1)
    }

    function insert(num, index) {
        arr.splice(index, 0, num)
    }

    for (let i = 0; i < input.length; i++) {
        let [command, firstNum, secondNum] = input[i].split(" ")

        firstNum = Number(firstNum);
        secondNum = Number(secondNum);

        switch (command) {
            case "Add":
                add(firstNum)
                break;
            case "Remove":
                remove(firstNum)
                break;
            case "RemoveAt":
                removeAt(firstNum)
                break;
            case "Insert":
                insert(firstNum, secondNum)
                break;


        }
    }
    console.log(arr.join(" "));
}

arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
)

arrayManipulations(['6 12 2 65 6 42',
    'Add 8',
    'Remove 12',
    'RemoveAt 3',
    'Insert 6 2']
)