function login(input) {
    let index = 0
    let username = input[index];
    index++
    let password = username.split("").reverse("").join("");

    let failAttepmtCounter = 0;
    let currentPassword = input[index]
    index++
    while(currentPassword !== password ) {

        if(failAttepmtCounter >= 3){
            console.log(`User ${username} blocked!`);
            break;
        }else if (failAttepmtCounter < 4){
            console.log("Incorrect password. Try again.");
        }
        currentPassword = input[index]
        index++
        failAttepmtCounter++
    }
    if(password === currentPassword){
        console.log(`User ${username} logged in.`);
    }


}
login(['Acer','login','go','let me in','recA'])
login(['momo','omom'])
login(['sunny','rainy','cloudy','sunny','not sunny'])