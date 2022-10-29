function schoolLibrary(input) {

    let bookOnShelve = input.shift().split("&");
    let currentLine = input.shift();

    while (currentLine !== "Done") {
        let line = currentLine.split(" | ")
        let command = line[0];
        let firstBook = line[1]
        let secondBook = line[2];
        switch (command) {
            case "Add Book":
                if (bookOnShelve.includes(firstBook)) {
                    break;
                } else {
                    bookOnShelve.unshift(firstBook)
                    
                }
                break;
            case "Take Book":
                if (bookOnShelve.includes(firstBook)) {
                    let bookIndex = bookOnShelve.indexOf(firstBook);
                    bookOnShelve.splice(bookIndex, 1);
                    
                }
                break;
            case "Swap Books":
                if (bookOnShelve.includes(firstBook) && bookOnShelve.includes(secondBook)) {
                    let firstBookIndex = bookOnShelve.indexOf(firstBook);
                    let secondBookIndex = bookOnShelve.indexOf(secondBook);
                    bookOnShelve.splice(firstBookIndex, 1, secondBook);
                    bookOnShelve.splice(secondBookIndex, 1, firstBook);
                    
                }

                break;
            case "Insert Book":
                if (bookOnShelve.includes(firstBook)) {
                    break;
                } else {
                    bookOnShelve.push(firstBook)
                }

                break;
            case "Check Book":
                let index = Number(firstBook)
                if(index < 0 || index > bookOnShelve.length){
                    break;
                } else {
                    console.log(bookOnShelve[index]);
                }
                break;

        }
        currentLine = input.shift();

    }
    console.log(bookOnShelve.join(", "));

}



schoolLibrary((["Don Quixote&The Great Gatsby&Moby Dick",
    "Add Book | Ulysses",
    "Take Book | Don Quixote",
    "Insert Book | Alice's Adventures in Wonderland",
    "Done"])
)

